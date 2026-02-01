import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-warm-900/90 backdrop-blur-sm border-b border-primary-200 dark:border-warm-700">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary-700 dark:text-primary-400">
          Chandra Veera
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-warm-600 dark:text-warm-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-warm-600 dark:text-warm-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Experience
          </a>
          <a href="#education" className="text-warm-600 dark:text-warm-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Education
          </a>
          <a href="#contact" className="text-warm-600 dark:text-warm-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Contact
          </a>
          <ThemeToggle />
          <a
            href="/Chandra_Resume.pdf"
            download
            className="px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
