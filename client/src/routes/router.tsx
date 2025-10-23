import { createBrowserRouter } from 'react-router';
import AppLayout from '@/ui/AppLayout';
import Home from '@/ui/pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    errorElement: <div>error element</div>,
    children: [
      { index: true, Component: Home },
      // {
      //   path: 'about',
      //   Component: AboutLayout,
      //   errorElement: <Error />,
      //   children: [
      //     { index: true, Component: About },
      //     { path: 'details', Component: AboutDetails },
      //   ],
      // },
    ],
  },
]);
