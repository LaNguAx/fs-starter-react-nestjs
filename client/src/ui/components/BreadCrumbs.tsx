import * as React from 'react';
import { Link, useMatches, type UIMatch, type Params, useParams } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/shadcnComponents/breadcrumb';
import { useGetBoardCategoriesQuery } from '@/store/apis/categoriesApi';

type BreadcrumbHandle = {
  breadcrumb: (ctx: { params: Params }) => React.ReactNode;
};

// Tell TS what kind of matches we have:
type Match = UIMatch<unknown, BreadcrumbHandle>;

export default function BreadCrumbs() {
  const matches = useMatches() as Match[];
  const { board: boardSlug } = useParams();

  const items = matches.filter((m) => typeof m.handle?.breadcrumb === 'function');

  const { data: categories, isLoading, isFetching } = useGetBoardCategoriesQuery(boardSlug as string, { skip: !boardSlug });

  if (!boardSlug || isLoading || isFetching) return;

  if (items.length === 0) return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((m, i) => {
          const isLast = i === items.length - 1;
          const label = m.handle!.breadcrumb({ params: m.params });
          const to = m.pathname;

          const title =
            (categories?.find((category) => category.slug === label)?.title ||
              categories
                ?.map((category) => category.children)
                .flat()
                .find((subCategory) => subCategory?.slug === label)?.title) ??
            label;

          // The home breadcrumb
          if (i === 0)
            return (
              <React.Fragment key={m.id ?? i}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>Home</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={`/${boardSlug}`} replace>
                        Home
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );

          return (
            <React.Fragment key={m.id ?? i}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link to={to}>{title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
