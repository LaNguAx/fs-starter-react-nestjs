import { createBrowserRouter } from 'react-router';
import Root from '@/ui/Root';
import NotFound from '@/ui/components/NotFound';
import { ErrorBoundary } from '@/ui/components/Error';

const localStorage = {
  defaultUser: {
    name: 'Itay Aknin',
    defaultSheet: {
      title: 'Sheet #1',
      description: 'My First Sheet',
      slug: 'sheet#1',
    },
  },
};

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    Component: Root,
  },
  {
    path: '*',
    Component: NotFound,
    handle: { breadcrumb: 'Not Found' },
  },
]);
