import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with a service like Formspree
    window.location.href = `mailto:veeracs@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section className="min-h-screen mt-8 px-6 py-8 pb-24 md:pb-8 bg-warm-50 dark:bg-navy-950">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-warm-900 dark:text-white mb-2">Get in Touch</h1>
        <p className="text-warm-500 dark:text-navy-400">
          Let's discuss your next project or simply connect.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Quick Contact Buttons */}
        <div className="grid grid-cols-1 gap-4 mb-8">
        <a
          href="mailto:veeracs@gmail.com"
          className="flex flex-col items-center gap-2 p-6 bg-white dark:bg-navy-900 rounded-2xl border border-warm-200 dark:border-navy-700 hover:border-coral-300 dark:hover:border-violet-600 transition-colors"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-coral-100 dark:bg-violet-900/30 rounded-xl">
            <svg className="w-6 h-6 text-coral-500 dark:text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-warm-700 dark:text-navy-200">Email Me</span>
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-12">
        <div>
          <label className="block text-xs text-warm-500 dark:text-navy-400 uppercase tracking-wider mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-warm-200 dark:border-navy-700 rounded-xl text-warm-900 dark:text-white placeholder-warm-400 dark:placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-coral-500 dark:focus:ring-violet-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs text-warm-500 dark:text-navy-400 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-warm-200 dark:border-navy-700 rounded-xl text-warm-900 dark:text-white placeholder-warm-400 dark:placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-coral-500 dark:focus:ring-violet-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs text-warm-500 dark:text-navy-400 uppercase tracking-wider mb-2">
            Message
          </label>
          <textarea
            placeholder="How can I help you?"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 bg-white dark:bg-navy-900 border border-warm-200 dark:border-navy-700 rounded-xl text-warm-900 dark:text-white placeholder-warm-400 dark:placeholder-navy-500 focus:outline-none focus:ring-2 focus:ring-coral-500 dark:focus:ring-violet-500 focus:border-transparent resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-coral-500 hover:bg-coral-600 dark:bg-violet-500 dark:hover:bg-violet-600 text-white rounded-2xl font-medium transition-colors"
        >
          Send Message
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </form>

      {/* Footer */}
      <footer className="text-center border-t border-warm-200 dark:border-navy-700 pt-8">
        <h3 className="text-xl font-bold text-warm-900 dark:text-white mb-1">Chandra Sekhar Veera</h3>
        <p className="text-sm text-warm-500 dark:text-navy-400 uppercase tracking-wider mb-6">
          Senior Front-End Engineer
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://linkedin.com/in/veeracs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-warm-200 dark:bg-navy-800 rounded-full text-warm-600 dark:text-navy-300 hover:bg-warm-300 dark:hover:bg-navy-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/veeracs"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center bg-warm-200 dark:bg-navy-800 rounded-full text-warm-600 dark:text-navy-300 hover:bg-warm-300 dark:hover:bg-navy-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="/Chandra_Resume.pdf"
            download
            className="w-12 h-12 flex items-center justify-center bg-warm-200 dark:bg-navy-800 rounded-full text-warm-600 dark:text-navy-300 hover:bg-warm-300 dark:hover:bg-navy-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-warm-400 dark:text-navy-500 mb-4">
          © 2024 Chandra Sekhar Veera. All rights reserved.<br />
          Engineered for High Performance and UX.
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm text-coral-500 dark:text-violet-400 hover:text-coral-600 dark:hover:text-violet-300 font-medium"
        >
          TOP ↑
        </button>
      </footer>
      </div>
    </section>
  );
}
