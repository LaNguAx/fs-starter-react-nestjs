import type { LucideIcon } from 'lucide-react';

export interface Board {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  logo?: LucideIcon;
}
