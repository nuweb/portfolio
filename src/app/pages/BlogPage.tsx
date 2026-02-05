import { Link } from 'react-router-dom';

const topics = [
  {
    title: 'React Performance',
    description: 'Tips every senior engineer should know about optimizing React applications',
    path: '/blog/react-performance',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'JavaScript Fundamentals',
    description: 'Core concepts, closures, prototypes, and modern ES6+ features',
    path: '/blog/javascript',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    comingSoon: true,
  },
  {
    title: 'TypeScript',
    description: 'Type system, generics, utility types, and best practices',
    path: '/blog/typescript',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    comingSoon: true,
  },
  {
    title: 'CSS & Styling',
    description: 'Modern CSS, Flexbox, Grid, animations, and CSS-in-JS',
    path: '/blog/css',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    comingSoon: true,
  },
];

export function BlogPage() {
  return (
    <section className="min-h-screen mt-2 md:mt-6 flex flex-col items-center justify-start px-6 py-20 bg-warm-50 dark:bg-navy-950">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-warm-600 dark:text-navy-300">
            Deep dives into technologies, patterns, and best practices
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link
              key={topic.path}
              to={topic.comingSoon ? '#' : topic.path}
              className={`group relative p-6 bg-white dark:bg-navy-900 rounded-2xl border border-warm-200 dark:border-navy-700 transition-all ${
                topic.comingSoon
                  ? 'opacity-60 cursor-not-allowed'
                  : 'hover:border-coral-400 dark:hover:border-violet-500 hover:shadow-lg'
              }`}
              onClick={(e) => topic.comingSoon && e.preventDefault()}
            >
              {topic.comingSoon && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-warm-200 dark:bg-navy-700 text-warm-500 dark:text-navy-400 text-xs rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-coral-100 dark:bg-navy-800 text-coral-600 dark:text-violet-400 rounded-xl">
                  {topic.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-warm-900 dark:text-white mb-2 group-hover:text-coral-600 dark:group-hover:text-violet-400 transition-colors">
                    {topic.title}
                  </h2>
                  <p className="text-sm text-warm-500 dark:text-navy-400">
                    {topic.description}
                  </p>
                </div>
              </div>
              {!topic.comingSoon && (
                <div className="mt-4 flex items-center text-coral-500 dark:text-violet-400 text-sm font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
