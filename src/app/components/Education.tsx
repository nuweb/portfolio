const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University',
    year: '',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University',
    year: '',
    icon: '📚',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-primary-50 to-white dark:from-warm-800 dark:to-warm-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-warm-800 dark:text-white mb-12 text-center">
          Education
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-warm-800 p-6 rounded-2xl shadow-lg border border-primary-200 dark:border-warm-700 hover:border-primary-400 dark:hover:border-primary-600 transition-colors"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-2xl mb-4">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold text-warm-800 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-primary-600 dark:text-primary-400">{edu.school}</p>
              {edu.year && <p className="text-warm-500 dark:text-warm-400 text-sm mt-1">{edu.year}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
