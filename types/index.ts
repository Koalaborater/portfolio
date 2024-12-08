import { LucideIcon } from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  category: 'development' | 'design' | 'marketing' | 'other';
}