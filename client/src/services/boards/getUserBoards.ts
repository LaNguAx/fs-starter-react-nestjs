import type { Board } from '@/types/boards/board';

export const MOCK_BOARDS: Board[] = [
  {
    id: '1',
    title: 'Personal Tasks',
    subtitle: 'Daily life, habits, and reminders',
    description: 'Things I want to get done this week — gym, shopping, and errands.',
    slug: 'personal_tasks',
    // logo: GalleryVerticalEnd,
  },
  {
    id: '2',
    title: 'Work Projects',
    subtitle: 'Client work, side projects, and design sprints',
    description: 'Ongoing development and design tasks for client and internal projects.',
    slug: 'work_projects',
    // logo: GalleryVerticalEnd,
  },
  {
    id: '3',
    title: 'Learning Goals',
    subtitle: 'Courses and experiments for skill growth',
    description: 'Courses, tutorials, and experiments to level up my skills.',
    slug: 'learning_goals',
    // logo: GalleryVerticalEnd,
  },
  {
    id: '4',
    title: 'Startup Ideas',
    subtitle: 'Concepts, validation notes, and early sketches',
    description: 'Brainstorming space for new app concepts and side projects.',
    slug: 'startup_ideas',
    // logo: GalleryVerticalEnd,
  },
];

export async function getUserBoards(): Promise<Board[]> {
  const boards: Promise<Board[]> = new Promise((resolve) =>
    setTimeout(() => {
      resolve(MOCK_BOARDS);
    }, 500),
  );
  return boards;
}
