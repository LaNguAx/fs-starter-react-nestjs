import { lazy, Suspense, type ComponentType, type LazyExoticComponent } from 'react';
import { useParams } from 'react-router';

const pageImports: Record<string, LazyExoticComponent<ComponentType<any>>> = {
  history: lazy(() => import('@/ui/pages/subpages/History')),
};

export default function Category() {
  const { category } = useParams();

  const LazyView = category ? pageImports[category] : null;

  return LazyView ? (
    <Suspense fallback={<div className="p-3 text-sm opacity-70">Loading…</div>}>
      <LazyView />
    </Suspense>
  ) : (
    <div>testPage</div>
    // <GenericSubCategory categorySlug={category!} subCategorySlug={subCategory} />
  );
}
