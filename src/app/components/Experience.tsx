const experiences = [
  {
    title: 'Senior Front End Engineer',
    company: 'WorkBoard AI',
    period: 'Jan 2022 – Jan 2026',
    description:
      'Led front-end development for AI-powered enterprise solutions. Built scalable React applications with TypeScript and micro-frontend architecture.',
    highlight: true,
  },
  {
    title: 'Lead Front End Engineer',
    company: 'Oracle',
    period: 'Aug 2017 – Jan 2022',
    description:
      'Architected and led development of Oracle cloud applications. Mentored team members and established front-end best practices.',
    highlight: true,
  },
  {
    title: 'Senior Software Consultant',
    company: 'Northrop Grumman',
    period: 'Feb 2017 – Aug 2017',
    description:
      'Delivered enterprise software solutions for government clients with a focus on security and performance.',
  },
  {
    title: 'Principal Architect',
    company: 'Fusion Media Group',
    period: 'Nov 2015 – Jan 2017',
    description:
      'Designed and implemented architecture for high-traffic media platforms serving millions of users.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Condé Nast',
    period: 'Mar 2012 – Nov 2015',
    description:
      'Built web applications for premium publishing brands including Vogue, GQ, and Wired.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-warm-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-warm-800 dark:text-white mb-4 text-center">
          Work Experience
        </h2>
        <p className="text-warm-600 dark:text-warm-400 text-center mb-12">
          A journey through leading technology companies
        </p>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-6 border-l-2 border-primary-300 dark:border-primary-600 last:pb-0"
            >
              <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${exp.highlight ? 'bg-gradient-to-r from-primary-400 to-accent-500' : 'bg-primary-400'}`} />
              <div className={`p-6 rounded-2xl border transition-all hover:shadow-lg ${exp.highlight ? 'bg-gradient-to-r from-primary-50 to-accent-300/10 dark:from-primary-900/30 dark:to-accent-900/20 border-primary-200 dark:border-primary-700' : 'bg-white dark:bg-warm-800 border-warm-200 dark:border-warm-700'}`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-warm-800 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-primary-700 dark:text-primary-300 font-medium bg-primary-100 dark:bg-primary-900/50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{exp.company}</p>
                <p className="text-warm-600 dark:text-warm-400">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
