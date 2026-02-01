export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-primary-50 via-white to-accent-300/10 dark:from-warm-900 dark:via-warm-800 dark:to-primary-900/20">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-warm-800 dark:text-white mb-6 animate-fade-in-up">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">
            Chandra Sekhar Veera
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-700 dark:text-primary-400 font-medium mb-4 animate-fade-in-up delay-100">
          Senior Front-End Engineer
        </p>
        <p className="text-lg text-warm-600 dark:text-warm-400 max-w-2xl mx-auto mb-8 animate-fade-in-up delay-200">
          15+ years of experience building scalable web applications.
          Specializing in React, TypeScript, and micro-frontend architecture.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all shadow-lg shadow-primary-500/25 hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            className="w-full sm:w-auto px-6 py-3 border-2 border-primary-400 dark:border-primary-500 text-primary-700 dark:text-primary-400 rounded-lg hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all hover:scale-105"
          >
            View Experience
          </a>
        </div>
      </div>
    </section>
  );
}
