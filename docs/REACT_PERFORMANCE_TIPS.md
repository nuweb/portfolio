# React Performance Tips Every Senior Software Engineer Should Know

## Understanding the Render Function

Two steps happen in order whenever the render function is called:

### 1. Diffing

React compares the new version of the tree returned by the new call of the render function with the old one. This step is necessary for React to decide how to update the DOM. Although React performs this step using highly optimized algorithms, it still comes with a cost.

### 2. Reconciliation

Based on the result of diffing, React updates the DOM tree. This step also has a cost since unmounting and mounting nodes in the DOM doesn't come for free.

---

## Performance Tips

### Tip 1: Distribute State Lower in the Tree

A state update on a parent node causes a diff on all child nodes, even if they don't rely on that state. Place state as close as possible to where it's used.

```jsx
// ❌ Bad - state at top level affects all children
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
      <ExpensiveComponent /> {/* Re-renders unnecessarily */}
    </div>
  );
}

// ✅ Good - state colocated with usage
function App() {
  return (
    <div>
      <Counter /> {/* State lives here */}
      <ExpensiveComponent /> {/* Won't re-render */}
    </div>
  );
}
```

---

### Tip 2: Consolidate State Updates

Make fewer state updates by batching related state changes together within a component.

```jsx
// ❌ Bad - multiple state updates
function handleSubmit() {
  setLoading(true);
  setError(null);
  setData(null);
}

// ✅ Good - consolidated state
function handleSubmit() {
  setFormState({ loading: true, error: null, data: null });
}

// ✅ Also good - useReducer for complex state
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'SUBMIT_START' });
```

---

### Tip 3: Memoize Components

Use `React.memo` for functional components or extend `React.PureComponent` for class components to prevent unnecessary re-renders.

```jsx
// Functional component with memo
const Bar = React.memo(function Bar({ name }) {
  return <div>{name}</div>;
});

// Class component with PureComponent
class Bar extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

#### How it works

At every update, these perform a shallow comparison between new and old props/state. If no difference is detected, the render is skipped.

```jsx
// Shallow comparison example
const prevProps = { name: 'John', age: 30 };
const nextProps = { name: 'John', age: 30 };

// Shallow comparison checks:
// prevProps.name === nextProps.name → true
// prevProps.age === nextProps.age → true
// Result: No re-render needed
```

#### Should every component be memoized?

**No.** Memoization has its own cost (the shallow comparison). Use it when:

- The component renders often with the same props
- The component's render is expensive
- The component is a leaf node with many siblings

---

### Tip 4: Write Better Props

Instead of passing objects, break them down into primitive values to make shallow comparison effective:

```jsx
// ❌ Bad - object reference changes every render
<UserCard user={{ name, age, email }} />

// ✅ Good - primitives are easy to compare
<UserCard name={name} age={age} email={email} />
```

---

### Tip 5: Avoid Inline Functions and Objects in JSX

Inline definitions create new references on every render, defeating memoization:

```jsx
// ❌ Bad - new function reference every render
<Button onClick={() => handleClick(id)} />

// ✅ Good - stable function reference
const handleButtonClick = useCallback(() => handleClick(id), [id]);
<Button onClick={handleButtonClick} />
```

```jsx
// ❌ Bad - new object reference every render
<Component style={{ color: 'red' }} />

// ✅ Good - stable object reference
const style = useMemo(() => ({ color: 'red' }), []);
<Component style={style} />

// ✅ Also good - defined outside component
const style = { color: 'red' };
function Component() {
  return <Child style={style} />;
}
```

---

### Tip 6: Use `useMemo` for Expensive Computations

```jsx
// ❌ Bad - recalculates on every render
function ProductList({ products, filter }) {
  const filteredProducts = products
    .filter((p) => p.category === filter)
    .sort((a, b) => a.price - b.price);

  return <List items={filteredProducts} />;
}

// ✅ Good - only recalculates when dependencies change
function ProductList({ products, filter }) {
  const filteredProducts = useMemo(
    () =>
      products
        .filter((p) => p.category === filter)
        .sort((a, b) => a.price - b.price),
    [products, filter]
  );

  return <List items={filteredProducts} />;
}
```

---

### Tip 7: Virtualize Long Lists

For lists with hundreds or thousands of items, only render what's visible using libraries like `react-window` or `react-virtualized`:

```jsx
import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  // Row component receives index and style from the virtualizer
  // - index: which item to render
  // - style: positioning (must be applied for virtualization to work)
  const Row = ({ index, style }) => (
    <div style={style}>{items[index].name}</div>
  );

  return (
    <FixedSizeList
      height={400}             // Viewport height - visible scrollable area (px)
      itemCount={items.length} // Total number of items in the list
      itemSize={35}            // Height of each row in pixels (fixed)
      width="100%"             // Width of the list container
    >
      {Row}
    </FixedSizeList>
  );
}
```

#### When to virtualize

- Lists with 100+ items
- Complex list item components
- Mobile devices with limited memory

---

### Tip 8: Use the `key` Prop Correctly

Keys help React identify which items changed. Always use stable, unique identifiers:

```jsx
// ❌ Bad - index causes issues with reordering/deletion
{items.map((item, index) => (
  <Item key={index} {...item} />
))}

// ✅ Good - unique, stable identifier
{items.map((item) => (
  <Item key={item.id} {...item} />
))}
```

#### Why index as key is problematic

When items are reordered, added, or removed:

- React may reuse wrong component instances
- Input state can "jump" to different items
- Animations may behave unexpectedly

---

### Tip 9: Lazy Load Components

Split your bundle and load components only when needed:

```jsx
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<HeavyChart />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Suspense>
  );
}
```

#### Best candidates for lazy loading

- Route-level components
- Modals and dialogs
- Below-the-fold content
- Admin/authenticated sections

---

### Tip 10: Use `useTransition` for Non-Urgent Updates (React 18+)

Prioritize urgent updates (like typing) over expensive ones (like filtering):

```jsx
import { useState, useTransition } from 'react';

function SearchableList({ items }) {
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  function handleSearch(e) {
    const value = e.target.value;

    // Urgent: update input immediately
    setQuery(value);

    // Non-urgent: can be interrupted
    startTransition(() => {
      setFilteredItems(items.filter((item) => item.name.includes(value)));
    });
  }

  return (
    <div>
      <input value={query} onChange={handleSearch} />
      {isPending && <Spinner />}
      <List items={filteredItems} />
    </div>
  );
}
```

---

### Tip 11: Split Context by Update Frequency

Context consumers re-render when context value changes. Separate frequently-changing values:

```jsx
// ❌ Bad - all consumers re-render on any change
const AppContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState([]);

  return (
    <AppContext.Provider value={{ user, theme, notifications }}>
      <Children />
    </AppContext.Provider>
  );
}

// ✅ Good - isolated re-renders
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          <Children />
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
```

#### Context optimization techniques

1. **Split by update frequency** - as shown above
2. **Memoize provider value** - prevent reference changes
3. **Use selectors** - with libraries like `use-context-selector`

```jsx
// Memoize provider value
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
```

---

### Tip 12: Profile Before Optimizing

Use React DevTools Profiler to identify actual bottlenecks:

1. Open React DevTools → **Profiler** tab
2. Click **Record** and perform interactions
3. Review the flame graph for slow components
4. Check "Why did this render?" for unnecessary re-renders
5. Focus optimization efforts on actual problems

#### What to look for

- Components rendering multiple times per interaction
- Long render times (>16ms breaks 60fps)
- Components re-rendering when props haven't changed

---

## Quick Reference

| Tip | Technique                       | Benefit                         |
| --- | ------------------------------- | ------------------------------- |
| 1   | Distribute state lower          | Fewer components re-render      |
| 2   | Consolidate state updates       | Fewer render cycles             |
| 3   | `React.memo` / `PureComponent`  | Skip unchanged components       |
| 4   | Primitive props                 | Effective shallow comparison    |
| 5   | `useCallback` / `useMemo`       | Stable references               |
| 6   | `useMemo` for computations      | Avoid redundant calculations    |
| 7   | Virtualization                  | Render only visible items       |
| 8   | Stable keys                     | Efficient list reconciliation   |
| 9   | `React.lazy`                    | Smaller initial bundle          |
| 10  | `useTransition`                 | Responsive UI during heavy work |
| 11  | Split contexts                  | Targeted re-renders             |
| 12  | Profile first                   | Optimize what matters           |

---

## Key Takeaways

1. **Most performance issues stem from unnecessary re-renders.** The React rendering cycle (diffing → reconciliation) has a cost.

2. **Don't optimize prematurely.** Profile first, then optimize the actual bottlenecks.

3. **Memoization isn't free.** It adds comparison overhead. Use it strategically.

4. **Stable references matter.** Objects, arrays, and functions created inline cause re-renders in memoized children.

5. **State placement matters.** Keep state as close as possible to where it's used.

---

## Further Reading

- [React Docs: Optimizing Performance](https://react.dev/learn/render-and-commit)
- [React Docs: useMemo](https://react.dev/reference/react/useMemo)
- [React Docs: useCallback](https://react.dev/reference/react/useCallback)
- [React DevTools Profiler](https://react.dev/learn/react-developer-tools)
