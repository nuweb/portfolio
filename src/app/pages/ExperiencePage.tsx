const skillCategories = [
  {
    title: 'LANGUAGES',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    title: 'FRAMEWORKS & LIBRARIES',
    skills: ['React', 'Angular', 'Redux', 'NestJS', 'NodeJS', 'ExpressJS'],
    highlight: true,
  },
  {
    title: 'DATABASES',
    skills: ['MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    title: 'RUNTIMES',
    skills: ['Node.js', 'PHP', 'Java'],
  },
  {
    title: 'TESTING',
    skills: ['Jest', 'Ava', 'Storybook/Loki', 'Cypress', 'Chai', 'Mocha'],
  },
  {
    title: 'VERSION CONTROL',
    skills: ['Git', 'GitHub', 'GitLab'],
  },
  {
    title: 'BUILD TOOLS',
    skills: ['Webpack', 'Vite'],
  },
  {
    title: 'PACKAGE MANAGERS',
    skills: ['npm', 'yarn', 'pnpm'],
  },
  {
    title: 'CLOUD',
    skills: ['AWS', 'Azure'],
  },
];

const workHistory = [
  {
    title: 'Senior Front End Engineer',
    company: 'WorkBoard AI',
    period: 'Jan 2022 – Jan 2026',
    highlights: [
      'Architected micro-frontend architecture using Module Federation',
      'Led design & development of navigation used by 100K+ users',
      'Drove accessibility compliance for the main navigation',
      'Built REST APIs with NestJS/NodeJS to consume legacy MySQL data',
      'Developed a Gen AI chat UI prototype for internal hackathon',
    ],
    techStack: 'React, Redux, React Query, React Router, NestJS, NodeJS, MySQL, TypeScript, Webpack, Figma, Cypress, Storybook',
    current: false,
  },
  {
    title: 'Lead Front End Engineer',
    company: 'Oracle',
    period: 'Aug 2017 – Jan 2022',
    highlights: [
      'Led migration of legacy AngularJS application to Angular 5 and React',
      'Contributed to the React core team with accessible widgets and reusable UI components',
      'Developed a component library improving developer velocity across teams',
    ],
    techStack: 'Angular, React, Mocha, Chai, Jest, Ava, Storybook/Loki, Java',
  },
  {
    title: 'Senior Software Consultant',
    company: 'Northrop Grumman',
    period: 'Feb 2017 – Aug 2017',
    highlights: [
      'Contributed to Disability Case Processing System for the Social Security Administration'
    ],
    techStack: 'React, Flux, Node.js, PostgreSQL',
  },
  {
    title: 'Principal Architect',
    company: 'Fusion Media Group',
    period: 'Nov 2015 – Jan 2017',
    highlights: [
      'Led full-stack development using modern JS tooling',
      'Set up Universal React seed projects, build pipelines, and performance optimizations',
      'Improved API performance with Redis/AWS ElastiCache',
      'Mentored a team of React developers; established UI development best practices',
      'Built D3.js-based analytics dashboards and lazy-loading ad components',
    ],
    techStack: 'ExpressJS, React, Redux, Webpack, WordPress, Jenkins, AWS, Node.js, Redis, Nginx',
  },
];

const education = [
  {
    degree: 'MS, Computer Science',
    school: 'Missouri University of Science and Technology',
  },
  {
    degree: 'BS, Computer Science & Engineering',
    school: 'University of Madras',
  },
];

const awards = [
  {
    title: "People's Choice Award",
    description: 'Internal Hackathon, Condé Nast',
    icon: '🏆',
  },
  {
    title: 'Toshiba Scholarship',
    description: 'Missouri University of Science and Technology',
    icon: '🎖️',
  },
];

export function ExperiencePage() {
  return (
    <section className="min-h-screen mt-2 md:mt-6 px-6 py-8 pb-24 md:pb-8 bg-warm-50 dark:bg-navy-950">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-warm-900 dark:text-white">Experience</h1>
          <p className="text-warm-500 dark:text-navy-400 text-sm">15+ Years in Frontend Engineering</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Skills */}
        <div className="lg:col-span-1">
          {/* Technical Skills */}
          <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-coral-500 dark:text-violet-400">💻</span>
          <h2 className="text-lg font-bold text-warm-900 dark:text-white">Technical Skills</h2>
        </div>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-4">
            <p className="text-xs text-warm-500 dark:text-navy-400 uppercase tracking-wider mb-2">
              {category.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                    category.highlight
                      ? 'bg-coral-100 dark:bg-violet-900/30 text-coral-700 dark:text-violet-300 border border-coral-200 dark:border-violet-700'
                      : 'bg-warm-200 dark:bg-navy-800 text-warm-600 dark:text-navy-300'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
          </div>
        </div>

        {/* Right Column - Work History, Education, Awards */}
        <div className="lg:col-span-2">
          {/* Work History */}
          <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-coral-500 dark:text-violet-400">📁</span>
          <h2 className="text-lg font-bold text-warm-900 dark:text-white">Work History</h2>
        </div>

        <div className="space-y-4">
          {workHistory.map((job, index) => (
            <div key={index} className="relative pl-6">
              {/* Timeline dot */}
              <div className={`absolute left-0 top-2 w-2 h-2 rounded-full ${job.current ? 'bg-coral-500 dark:bg-violet-500' : 'bg-warm-300 dark:bg-navy-600'}`} />
              {index < workHistory.length - 1 && (
                <div className="absolute left-[3px] top-4 w-0.5 h-full bg-warm-200 dark:bg-navy-700" />
              )}

              <div className="bg-white dark:bg-navy-900 rounded-2xl p-4 border border-warm-200 dark:border-navy-700">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-coral-600 dark:text-violet-400">
                      {job.title}
                    </h3>
                    <p className="text-warm-600 dark:text-navy-300 text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs text-warm-500 dark:text-navy-400 bg-warm-100 dark:bg-navy-800 px-2 py-1 rounded">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-1 mb-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-warm-500 dark:text-navy-400">
                      <span className="text-coral-500 dark:text-violet-400 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div>
                  <p className="text-xs text-warm-400 dark:text-navy-500 uppercase tracking-wider mb-1">
                    Tech Stack
                  </p>
                  <p className="text-xs text-warm-600 dark:text-navy-300">{job.techStack}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>

          {/* Education & Awards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Education */}
            <div className="bg-warm-100 dark:bg-navy-900/50 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span>🎓</span>
          <h2 className="font-bold text-warm-900 dark:text-white">Education</h2>
        </div>
        {education.map((edu, index) => (
          <div key={index} className="mb-2 last:mb-0">
            <p className="font-medium text-warm-800 dark:text-navy-200 text-sm">{edu.degree}</p>
            <p className="text-warm-500 dark:text-navy-400 text-xs">{edu.school}</p>
          </div>
        ))}
            </div>

            {/* Awards */}
            <div className="bg-warm-100 dark:bg-navy-900/50 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span>🏅</span>
          <h2 className="font-bold text-warm-900 dark:text-white">Awards</h2>
        </div>
        {awards.map((award, index) => (
          <div key={index} className="flex items-start gap-3 mb-2 last:mb-0">
            <span className="text-lg">{award.icon}</span>
            <div>
              <p className="font-medium text-warm-800 dark:text-navy-200 text-sm">{award.title}</p>
              <p className="text-warm-500 dark:text-navy-400 text-xs">{award.description}</p>
            </div>
          </div>
        ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
