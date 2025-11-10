import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import { useParams } from 'react-router';

const subpageImports: Record<string, LazyExoticComponent<ComponentType<any>>> = {
  history: lazy(() => import('@/ui/pages/subpages/History')),
};

export default function SubCategory() {
  const { subCategory } = useParams();

  const LazyView = subCategory ? subpageImports[subCategory] : null;

  return LazyView ? (
    <Suspense fallback={<div className="p-3 text-sm opacity-70">Loading…</div>}>
      <LazyView />
    </Suspense>
  ) : (
    <div>test</div>
    // <GenericSubCategory categorySlug={category!} subCategorySlug={subCategory} />
  );
}
