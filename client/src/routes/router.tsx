import { createBrowserRouter } from 'react-router';
import AppLayout from '@/ui/AppLayout';
import Home from '@/ui/pages/Home';
import NotFound from '@/ui/components/NotFound';
import AboutLayout from '@/ui/features/about/AboutLayout';
import { ErrorBoundary } from '@/ui/components/Error';
import About from '@/ui/pages/About';
import AboutDetails from '@/ui/features/about/AboutDetails';
import Todos from '@/ui/pages/Todos';
import TodosLayout from '@/ui/features/todos/TodosLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, Component: Home },
      {
        path: 'about',
        Component: AboutLayout,
        children: [
          { index: true, Component: About },
          { path: 'details', Component: AboutDetails },
        ],
      },
      { path: 'todos', Component: TodosLayout, children: [{ index: true, Component: Todos }] },
      { path: '*', Component: NotFound },
    ],
  },
]);
