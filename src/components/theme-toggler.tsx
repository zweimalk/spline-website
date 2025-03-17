import { MoonIcon, SunIcon } from '@heroicons/react/16/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkTheme = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className='rounded-md p-2 transition-colors w-8 h-8 cursor-pointer'
      aria-label={`Switch to ${isDarkTheme ? 'light' : 'dark'} theme`}
    >
      {isDarkTheme ? <SunIcon className='w-full h-full' /> : <MoonIcon className='w-full h-full' />}
    </button>
  );
};

export default ThemeToggler;
