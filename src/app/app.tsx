import {
  Header,
  Hero,
  Skills,
  Experience,
  Education,
  Awards,
  Contact,
} from './components';

export function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-warm-900 transition-colors">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
