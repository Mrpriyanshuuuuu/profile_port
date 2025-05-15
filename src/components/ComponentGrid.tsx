import React from 'react';
import { components } from '../data/components';
import ComponentCard from './ComponentCard';

interface ComponentGridProps {
  activeCategory: string;
}

const ComponentGrid: React.FC<ComponentGridProps> = ({ activeCategory }) => {
  const filteredComponents = activeCategory === 'all' 
    ? components 
    : components.filter(component => component.category === activeCategory);
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="pt-6 pb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {activeCategory === 'all' ? 'All Components' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          {filteredComponents.length} components available
        </p>
      </div>
      
      {filteredComponents.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400">No components found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComponents.map((component) => (
            <ComponentCard key={component.id} component={component} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ComponentGrid;