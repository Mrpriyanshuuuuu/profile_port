import React from 'react';
import { Layers, Square, FormInput, Navigation, BarChart2, AlertCircle } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  navOpen: boolean;
  mobileOnly?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeCategory, 
  setActiveCategory, 
  navOpen,
  mobileOnly = false
}) => {
  const categories = [
    { id: 'all', name: 'All Components', icon: <Layers size={18} /> },
    { id: 'buttons', name: 'Buttons', icon: <Square size={18} /> },
    { id: 'cards', name: 'Cards', icon: <BarChart2 size={18} /> },
    { id: 'forms', name: 'Form Elements', icon: <FormInput size={18} /> },
    { id: 'navigation', name: 'Navigation', icon: <Navigation size={18} /> },
    { id: 'feedback', name: 'Feedback', icon: <AlertCircle size={18} /> }
  ];

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <nav 
      className={`${mobileOnly ? 'md:hidden' : 'hidden md:block'} ${
        navOpen ? 'block' : 'hidden'
      } fixed inset-0 z-10 bg-gray-600/75 md:bg-transparent md:static md:inset-auto`}
    >
      <div className="h-full w-64 bg-white dark:bg-gray-900 shadow-lg md:shadow-none transition-colors duration-300 p-6">
        <div className="mt-8 md:mt-0">
          <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            Categories
          </h2>
          <div className="space-y-1">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`w-full text-left px-3 py-2.5 rounded-md flex items-center gap-3 transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className={`${
                  activeCategory === category.id
                    ? 'text-teal-600 dark:text-teal-400'
                    : 'text-gray-500 dark:text-gray-400'
                } transition-colors duration-200`}>
                  {category.icon}
                </span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;