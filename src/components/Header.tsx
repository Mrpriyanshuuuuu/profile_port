import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ navOpen, setNavOpen }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
            UI
          </div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Component Gallery</h1>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            className="md:hidden p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;