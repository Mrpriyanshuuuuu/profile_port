import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ComponentGrid from './components/ComponentGrid';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [navOpen, setNavOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
        
        <div className="flex">
          {/* Mobile Sidebar */}
          <Sidebar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            navOpen={navOpen}
            mobileOnly={true}
          />
          
          {/* Desktop Sidebar */}
          <Sidebar 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory}
            navOpen={true}
            mobileOnly={false}
          />
          
          <main className="flex-1 md:ml-64">
            <ComponentGrid activeCategory={activeCategory} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;