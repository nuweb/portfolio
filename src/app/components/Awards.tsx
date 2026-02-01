const awards = [
  {
    title: "People's Choice Award",
    description: 'Recognized for outstanding contribution and innovation.',
  },
  {
    title: 'Toshiba Scholarship',
    description: 'Academic excellence scholarship recipient.',
  },
];

export function Awards() {
  return (
    <section id="awards" className="py-20 px-6 bg-white dark:bg-warm-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-warm-800 dark:text-white mb-12 text-center">
          Awards & Recognition
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-100 to-primary-200/50 dark:from-primary-900/40 dark:to-primary-800/20 p-6 rounded-2xl border border-primary-200 dark:border-primary-700 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg shadow-primary-500/25">
                🏆
              </div>
              <h3 className="text-xl font-semibold text-warm-800 dark:text-white mb-2">
                {award.title}
              </h3>
              <p className="text-warm-600 dark:text-warm-400">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
