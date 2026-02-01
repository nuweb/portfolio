import { useEffect, useState } from 'react';

export function Logo() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    // Watch for theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
      {isDark ? (
        <>
          {/* Dark Mode - Indigo Braces */}
          <text x="10" y="42" fill="#6366F1" style={{ fontFamily: "'Fira Code', monospace", fontSize: '40px', fontWeight: 500 }}>{'{'}</text>
          
          {/* Name in Monospace Silver */}
          <text x="45" y="40" fill="#F8FAFC" style={{ fontFamily: "'Fira Code', monospace", fontSize: '32px', fontWeight: 400, letterSpacing: '0px' }}>Chandra</text>
          
          {/* Closing Indigo Brace */}
          <text x="182" y="42" fill="#6366F1" style={{ fontFamily: "'Fira Code', monospace", fontSize: '40px', fontWeight: 500 }}>{'}'}</text>
        </>
      ) : (
        <>
          {/* Light Mode - Coral Braces */}
          <text x="10" y="42" fill="var(--color-coral-500)" style={{ fontFamily: "'Fira Code', monospace", fontSize: '40px', fontWeight: 500 }}>{'{'}</text>
          
          {/* Name in Slate Grey/Black */}
          <text x="45" y="40" fill="#0F172A" style={{ fontFamily: "'Fira Code', monospace", fontSize: '32px', fontWeight: 400, letterSpacing: '0px' }}>Chandra</text>
          
          {/* Closing Coral Brace */}
          <text x="182" y="42" fill="var(--color-coral-500)" style={{ fontFamily: "'Fira Code', monospace", fontSize: '40px', fontWeight: 500 }}>{'}'}</text>
        </>
      )}
      
      {/* Subtle Glow Effect */}
      <defs>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
