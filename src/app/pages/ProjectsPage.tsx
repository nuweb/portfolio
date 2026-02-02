import { useState } from 'react';

const filters = ['All Work', 'React', 'Architecture', 'Cloud'];

const projects = [
  {
    id: 1,
    title: 'WorkBoard AI Architecture',
    category: 'ENTERPRISE',
    description: 'Scalable micro-frontend architecture using Module Federation, supporting 100k+ enterprise users with a focus on high-performance delivery.',
    tags: ['React', 'Module Federation', 'Next.js'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    featured: true,
  },
  {
    id: 2,
    title: 'Oracle UI Framework',
    category: 'TOOLING',
    description: 'A robust, accessible component library that improved developer velocity by 40% across 12+ internal product teams and multiple platforms.',
    tags: ['Storybook', 'TypeScript', 'Jest'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Condé Nast Analytics',
    category: 'REAL-TIME',
    description: 'Subscription analytics platform using WebSockets for real-time traffic monitoring across global media brands with D3 visualization.',
    tags: ['D3.js', 'WebSockets', 'Redux'],
    image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
];

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All Work');

  return (
    <section className="min-h-screen mt-2 md:mt-6 px-6 py-8 pb-24 md:pb-8 bg-warm-50 dark:bg-navy-950">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">Featured Projects</h1>
        <p className="text-warm-500 dark:text-navy-400 text-sm">Senior Front-End Engineering Portfolio</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-6 px-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === filter
                ? 'bg-coral-500 dark:bg-violet-500 text-white'
                : 'bg-warm-200 dark:bg-navy-800 text-warm-600 dark:text-navy-300 hover:bg-warm-300 dark:hover:bg-navy-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-navy-900 rounded-3xl overflow-hidden shadow-sm border border-warm-200 dark:border-navy-700"
          >
            {/* Project Image */}
            <div
              className="h-48 flex items-center justify-center"
              style={{ background: project.image }}
            >
              <div className="text-white/20 text-6xl font-bold">
                {project.title.charAt(0)}
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-warm-900 dark:text-white">
                  {project.title}
                </h3>
                <span className="px-2 py-1 bg-coral-500/10 dark:bg-violet-500/10 text-coral-500 dark:text-violet-400 text-xs font-medium rounded">
                  {project.category}
                </span>
              </div>

              <p className="text-warm-500 dark:text-navy-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-warm-100 dark:bg-navy-800 text-warm-600 dark:text-navy-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-coral-500 hover:bg-coral-600 dark:bg-violet-500 dark:hover:bg-violet-600 text-white rounded-xl font-medium transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Demo
                </button>
                <button className="px-4 py-3 bg-warm-100 dark:bg-navy-800 hover:bg-warm-200 dark:hover:bg-navy-700 text-warm-600 dark:text-navy-300 rounded-xl transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
