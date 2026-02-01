const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    color: 'primary',
    icon: '💻',
  },
  {
    title: 'Libraries & Frameworks',
    skills: ['React', 'Redux', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
    color: 'accent',
    icon: '⚛️',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'Webpack', 'Vite', 'Docker', 'AWS', 'CI/CD'],
    color: 'warm',
    icon: '🛠️',
  },
  {
    title: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'],
    color: 'primary',
    icon: '🧪',
  },
];

const colorClasses = {
  primary: {
    bg: 'bg-gradient-to-br from-primary-400 to-primary-600',
    badge: 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300',
  },
  accent: {
    bg: 'bg-gradient-to-br from-accent-400 to-accent-600',
    badge: 'bg-accent-400/20 text-accent-600 dark:bg-accent-500/20 dark:text-accent-400',
  },
  warm: {
    bg: 'bg-gradient-to-br from-warm-500 to-warm-700',
    badge: 'bg-warm-500/20 text-warm-700 dark:bg-warm-600/30 dark:text-warm-400',
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-white to-primary-50 dark:from-warm-800 dark:to-warm-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-warm-800 dark:text-white mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-warm-600 dark:text-warm-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built over 15+ years of software development
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            return (
              <div
                key={category.title}
                className="bg-white dark:bg-warm-800 p-6 rounded-2xl shadow-lg border border-primary-100 dark:border-warm-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-warm-800 dark:text-white mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${colors.badge} rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
