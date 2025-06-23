import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 focus:outline-none transition-transform transform hover:scale-110"
      style={{ border: 'none', cursor: 'pointer' }}
    >
      {isDark ? <span role="img" aria-label="sun" style={{ fontSize: '24px' }}>☀️</span> : <span role="img" aria-label="moon" style={{ fontSize: '24px' }}>🌙</span>}
    </button>
  );
}