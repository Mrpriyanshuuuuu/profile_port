import { ComponentExample } from '../types';

export const components: ComponentExample[] = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    description: 'A primary action button with hover and focus states',
    category: 'buttons',
    code: `<button
  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md 
  transition-all duration-300 focus:ring-2 focus:ring-teal-300 focus:ring-opacity-50"
>
  Button Text
</button>`
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    description: 'A secondary action button with hover and focus states',
    category: 'buttons',
    code: `<button
  className="bg-white hover:bg-gray-100 text-teal-600 font-medium py-2 px-4 rounded-md 
  border border-teal-500 transition-all duration-300 focus:ring-2 focus:ring-teal-300 
  focus:ring-opacity-50 dark:bg-gray-800 dark:text-teal-400 dark:border-teal-400 
  dark:hover:bg-gray-700"
>
  Button Text
</button>`
  },
  {
    id: 'button-outline',
    name: 'Outline Button',
    description: 'An outline button that works well as a tertiary action',
    category: 'buttons',
    code: `<button
  className="bg-transparent hover:bg-teal-50 text-teal-600 font-medium py-2 px-4 
  rounded-md border border-teal-300 transition-all duration-300 focus:ring-2 
  focus:ring-teal-300 focus:ring-opacity-50 dark:hover:bg-gray-800 dark:text-teal-400 
  dark:border-teal-500"
>
  Button Text
</button>`
  },
  {
    id: 'button-icon',
    name: 'Icon Button',
    description: 'A button with an icon for enhanced visual communication',
    category: 'buttons',
    code: `<button
  className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-4 rounded-md 
  inline-flex items-center space-x-2 transition-all duration-300"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
  <span>Save Changes</span>
</button>`
  },
  {
    id: 'card-basic',
    name: 'Basic Card',
    description: 'A simple card component with padding and rounded corners',
    category: 'cards',
    code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300">
  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-300">Card content goes here. This is a basic card component with a title and some text content.</p>
</div>`
  },
  {
    id: 'card-interactive',
    name: 'Interactive Card',
    description: 'A card with hover effects and interactive elements',
    category: 'cards',
    code: `<div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
  <img src="https://images.pexels.com/photos/2096543/pexels-photo-2096543.jpeg" 
    alt="Card" className="w-full h-48 object-cover" />
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Card Title</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">Card content with an image and interactive hover effects.</p>
    <button className="text-teal-500 hover:text-teal-700 font-medium transition-colors duration-300">
      Learn More &rarr;
    </button>
  </div>
</div>`
  },
  {
    id: 'form-input',
    name: 'Form Input',
    description: 'A styled form input field with label',
    category: 'forms',
    code: `<div className="mb-4">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md 
    shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent
    bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
    placeholder="you@example.com"
  />
</div>`
  },
  {
    id: 'alert-component',
    name: 'Alert Component',
    description: 'An alert message component with different variants',
    category: 'feedback',
    code: `<div className="bg-teal-50 dark:bg-teal-900/30 border-l-4 border-teal-500 p-4 mb-4 rounded-r-md">
  <div className="flex items-start">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm text-teal-800 dark:text-teal-200 font-medium">
        This is an informational message.
      </p>
    </div>
  </div>
</div>`
  },
  {
    id: 'data-badge',
    name: 'Badge Component',
    description: 'Status badge for displaying state information',
    category: 'data-display',
    code: `<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-300">
  Active
</span>`
  },
  {
    id: 'nav-tabs',
    name: 'Navigation Tabs',
    description: 'Tab navigation with active state indication',
    category: 'navigation',
    code: `<div className="border-b border-gray-200 dark:border-gray-700">
  <nav className="flex space-x-8">
    <button className="border-teal-500 text-teal-600 dark:text-teal-400 py-4 px-1 border-b-2 font-medium text-sm">
      Dashboard
    </button>
    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
      dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600
      py-4 px-1 border-b-2 font-medium text-sm">
      Projects
    </button>
    <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
      dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600
      py-4 px-1 border-b-2 font-medium text-sm">
      Team
    </button>
  </nav>
</div>`
  }
];