import React, { useState } from 'react';
import { ComponentExample } from '../types';
import { Copy, Check } from 'lucide-react';

interface ComponentCardProps {
  component: ComponentExample;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  const [copied, setCopied] = useState(false);
  
  const copyCode = () => {
    navigator.clipboard.writeText(component.code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
      <div className="p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="font-medium text-gray-900 dark:text-white">{component.name}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 font-medium capitalize">
          {component.category}
        </span>
      </div>
      
      <div className="p-6 flex items-center justify-center min-h-[120px]">
        <div dangerouslySetInnerHTML={{ __html: component.code }} />
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{component.description}</p>
        
        <div className="relative">
          <pre className="text-xs bg-gray-800 text-gray-300 p-3 rounded-md overflow-x-auto">
            {component.code}
          </pre>
          
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 p-1.5 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors duration-200"
            aria-label="Copy code"
          >
            {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;