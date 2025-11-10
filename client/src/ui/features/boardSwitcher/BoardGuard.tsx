import { Navigate, useParams } from 'react-router';
import { useGetUserBoardsQuery } from '@/store/apis/boardsApi';
import DashboardInset from '@/ui/components/DashboardInset';

export default function BoardGuard() {
  const { board: slug } = useParams();
  const { data, isLoading, isFetching, error } = useGetUserBoardsQuery('1');

  // Let the layout render while loading/error — sidebar can show skeleton/errors
  if (!slug || isLoading || isFetching || error) return <DashboardInset />;

  const exists = !!data?.some((b) => b.slug === slug);
  return exists ? <DashboardInset /> : <Navigate to="/" replace />;
}
