import { createBrowserRouter, type Params } from 'react-router';
import Root from '@/ui/Root';
import NotFound from '@/ui/components/NotFound';
import BoardGuard from '@/ui/features/boardSwitcher/BoardGuard';
import CategoryGuard from '@/ui/features/categories/CategoryGuard';
import Category from '@/ui/pages/Category';
import SubCategory from '@/ui/pages/SubCategory';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: ':board',
        Component: BoardGuard,
        handle: {
          breadcrumb: ({ params }: { params: Params }) => params.board ?? '/',
        },
        children: [
          {
            path: ':category',
            Component: CategoryGuard,
            handle: {
              breadcrumb: ({ params }: { params: Params }) => params.category ?? 'Category',
            },
            children: [
              {
                index: true,
                Component: Category,
              },
              {
                path: ':subCategory',
                Component: SubCategory,
                handle: {
                  breadcrumb: ({ params }: { params: Params }) => params.subCategory ?? 'Subcategory',
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
    handle: { breadcrumb: () => 'Not Found' },
  },
]);
