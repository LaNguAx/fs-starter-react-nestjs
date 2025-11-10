import { FlaskRound, Cpu, BookOpen, Key, type LucideIcon, Home } from 'lucide-react';
export const LucideIconsEnum = {
  Playground: 'playground',
  Models: 'models',
  Docs: 'docs',
  Settings: 'settings',
  Home: 'home',
} as const;

export type LucideIconsEnum = (typeof LucideIconsEnum)[keyof typeof LucideIconsEnum];

export const LucideIconsMap: Record<LucideIconsEnum, LucideIcon> = {
  [LucideIconsEnum.Playground]: FlaskRound,
  [LucideIconsEnum.Models]: Cpu,
  [LucideIconsEnum.Docs]: BookOpen,
  [LucideIconsEnum.Settings]: Key,
  [LucideIconsEnum.Home]: Home,
};
