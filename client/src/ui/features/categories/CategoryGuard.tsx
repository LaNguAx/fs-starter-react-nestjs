import { useGetBoardCategoriesQuery } from '@/store/apis/categoriesApi';
import Skeleton from '@/ui/components/Skeleton';
import { Navigate, Outlet, useParams } from 'react-router';

export default function CategoryGuard() {
  const { board: boardSlug, category: categorySlug, subCategory: subCategorySlug } = useParams();

  if (!boardSlug) return <Navigate to="/" replace />;

  const { data: categories, isLoading, isFetching, error } = useGetBoardCategoriesQuery(boardSlug);

  if (isLoading || isFetching || error) return <Skeleton />;

  const match = !!categories?.some(
    (_category) =>
      (_category.slug === categorySlug && !subCategorySlug) || // if trying to access category page
      (subCategorySlug && // if trying to access subcategory page
        _category.slug === categorySlug &&
        _category.children?.some((_subCategory) => _subCategory.slug === subCategorySlug)),
  );

  if (!match) return <Navigate to={`/${boardSlug}`} replace />;

  return <Outlet />;
}
