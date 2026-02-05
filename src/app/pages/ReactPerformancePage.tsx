import { Link } from 'react-router-dom';

const tips = [
  {
    id: 1,
    title: 'Distribute State Lower in the Tree',
    description: 'Place state as close as possible to where it\'s used to avoid unnecessary re-renders in unrelated components.',
  },
  {
    id: 2,
    title: 'Consolidate State Updates',
    description: 'Batch related state changes together to reduce the number of render cycles.',
  },
  {
    id: 3,
    title: 'Memoize Components',
    description: 'Use React.memo for functional components or PureComponent for class components to skip re-renders when props haven\'t changed.',
  },
  {
    id: 4,
    title: 'Write Better Props',
    description: 'Pass primitive values instead of objects when possible for more effective shallow comparison.',
  },
  {
    id: 5,
    title: 'Avoid Inline Functions and Objects',
    description: 'Use useCallback and useMemo to create stable references that won\'t defeat memoization.',
  },
  {
    id: 6,
    title: 'Use useMemo for Expensive Computations',
    description: 'Avoid recalculating expensive operations on every render by memoizing the results.',
  },
  {
    id: 7,
    title: 'Virtualize Long Lists',
    description: 'Only render visible items in long lists using libraries like react-window or react-virtualized.',
  },
  {
    id: 8,
    title: 'Use Keys Correctly',
    description: 'Always use stable, unique identifiers as keys—never array indices for dynamic lists.',
  },
  {
    id: 9,
    title: 'Lazy Load Components',
    description: 'Split your bundle and load components only when needed with React.lazy and Suspense.',
  },
  {
    id: 10,
    title: 'Use useTransition for Non-Urgent Updates',
    description: 'Prioritize urgent updates over expensive ones to keep the UI responsive.',
  },
  {
    id: 11,
    title: 'Split Context by Update Frequency',
    description: 'Separate frequently-changing context values to prevent unnecessary re-renders across consumers.',
  },
  {
    id: 12,
    title: 'Profile Before Optimizing',
    description: 'Use React DevTools Profiler to identify actual bottlenecks before applying optimizations.',
  },
];

export function ReactPerformancePage() {
  return (
    <section className="min-h-screen mt-2 md:mt-6 flex flex-col items-center justify-start px-6 py-20 bg-warm-50 dark:bg-navy-950">
      <div className="max-w-4xl w-full">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link to="/blog" className="text-warm-500 dark:text-navy-400 hover:text-coral-500 dark:hover:text-violet-400 transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-warm-400 dark:text-navy-500">/</li>
            <li className="text-warm-700 dark:text-navy-200">React Performance</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white mb-4">
            React Performance Tips
          </h1>
          <p className="text-lg text-warm-600 dark:text-navy-300 mb-6">
            Every senior software engineer should know these optimization techniques
          </p>

          {/* Key Concept */}
          <div className="p-6 bg-coral-50 dark:bg-navy-900 border border-coral-200 dark:border-navy-700 rounded-2xl">
            <h2 className="text-lg font-semibold text-warm-900 dark:text-white mb-3">
              Understanding the Render Function
            </h2>
            <p className="text-warm-600 dark:text-navy-300 mb-4">
              Two steps happen whenever render is called:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-navy-800 rounded-xl">
                <h3 className="font-semibold text-coral-600 dark:text-violet-400 mb-2">1. Diffing</h3>
                <p className="text-sm text-warm-500 dark:text-navy-400">
                  React compares the new virtual DOM tree with the old one to determine what changed.
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-navy-800 rounded-xl">
                <h3 className="font-semibold text-coral-600 dark:text-violet-400 mb-2">2. Reconciliation</h3>
                <p className="text-sm text-warm-500 dark:text-navy-400">
                  Based on the diff, React updates the actual DOM. Mounting/unmounting nodes has a cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips List */}
        <div className="space-y-4">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="p-6 bg-white dark:bg-navy-900 rounded-2xl border border-warm-200 dark:border-navy-700 hover:border-coral-300 dark:hover:border-navy-600 transition-colors"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-coral-100 dark:bg-navy-800 text-coral-600 dark:text-violet-400 rounded-full text-sm font-bold">
                  {tip.id}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-warm-900 dark:text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-warm-500 dark:text-navy-400">
                    {tip.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaway */}
        <div className="mt-12 p-6 bg-gradient-to-r from-coral-500 to-coral-600 dark:from-violet-600 dark:to-violet-700 rounded-2xl text-white">
          <h2 className="text-xl font-bold mb-3">Key Takeaway</h2>
          <p className="opacity-90">
            Most performance issues stem from unnecessary re-renders. The React rendering cycle 
            (diffing → reconciliation) has a cost, so minimizing render calls through proper state 
            management, memoization, and stable references is the foundation of React performance optimization.
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-coral-500 dark:text-violet-400 hover:text-coral-600 dark:hover:text-violet-300 font-medium transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
