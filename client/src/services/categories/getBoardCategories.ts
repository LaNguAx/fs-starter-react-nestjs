import type { Category } from '@/types/categories/category';
import { LucideIconsEnum } from '@/types/enums/icons';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'cat_0',
    title: 'Home',
    subtitle: 'Overview and workspace launcher',
    description: 'Quick access to your main workspace dashboard.',
    slug: '',
    icon: LucideIconsEnum.Home,
  },
  {
    id: 'cat_1',
    title: 'Playground',
    subtitle: 'Try things and test ideas',
    description: 'A sandbox space for experimenting with prompts and workflows.',
    slug: 'playground',
    icon: LucideIconsEnum.Playground,
    children: [
      { id: 'pg_hist', title: 'History', slug: 'history' },
      { id: 'pg_star', title: 'Starred', slug: 'starred' },
      { id: 'pg_sets', title: 'Settings', slug: 'settings' },
    ],
  },
  {
    id: 'cat_2',
    title: 'Models',
    subtitle: 'Explore available AI models',
    description: 'Compare outputs, performance, and characteristics of models.',
    slug: 'models',
    icon: LucideIconsEnum.Models,
    children: [
      { id: 'mdl_gen', title: 'Genesis', slug: 'genesis' },
      { id: 'mdl_exp', title: 'Explorer', slug: 'explorer' },
      { id: 'mdl_qtm', title: 'Quantum', slug: 'quantum' },
    ],
  },
  {
    id: 'cat_3',
    title: 'Documentation',
    subtitle: 'Guides & help resources',
    description: 'Learn how everything works and explore examples.',
    slug: 'docs',
    icon: LucideIconsEnum.Docs,
    children: [
      { id: 'dc_intro', title: 'Introduction', slug: 'introduction' },
      { id: 'dc_start', title: 'Get Started', slug: 'get-started' },
      { id: 'dc_tut', title: 'Tutorials', slug: 'tutorials' },
      { id: 'dc_log', title: 'Changelog', slug: 'changelog' },
    ],
  },
  {
    id: 'cat_4',
    title: 'Settings',
    subtitle: 'Workspace configuration',
    description: 'Manage workspace-level preferences and controls.',
    slug: 'settings',
    icon: LucideIconsEnum.Settings,
    children: [
      { id: 'st_gen', title: 'General', slug: 'general' },
      { id: 'st_team', title: 'Team', slug: 'team' },
      { id: 'st_bill', title: 'Billing', slug: 'billing' },
      { id: 'st_limits', title: 'Limits', slug: 'limits' },
    ],
  },
  {
    id: 'cat_5',
    title: 'Taliya',
    subtitle: 'Workspace configuration',
    description: 'Manage workspace-level preferences and controls.',
    slug: 'taliya',
    icon: LucideIconsEnum.Settings,
    children: [{ id: 'st_itay', title: 'itay', slug: 'itay' }],
  },
];

export async function getBoardCategories(): Promise<Category[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_CATEGORIES); // or filter based on boardSlug later
    }, 1500);
  });
}
