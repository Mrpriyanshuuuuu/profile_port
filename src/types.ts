export type Theme = 'light' | 'dark';

export interface ComponentExample {
  id: string;
  name: string;
  description: string;
  category: 'buttons' | 'cards' | 'forms' | 'navigation' | 'feedback' | 'data-display';
  code: string;
}