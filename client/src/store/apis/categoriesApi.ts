import { getBoardCategories as fetchBoardCategories } from '@/services/categories/getBoardCategories';
import type { Category } from '@/types/categories/category';
import { createApi, type BaseQueryFn } from '@reduxjs/toolkit/query/react';

const mockBaseQuery: BaseQueryFn<string, Category[], unknown> = async () => {
  try {
    const data = await fetchBoardCategories(); // returns Category[]
    return { data }; // <-- RTKQ expects this shape
  } catch (error) {
    return { error };
  }
};

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: mockBaseQuery as any,
  endpoints: (builder) => ({
    getBoardCategories: builder.query<Category[], string>({
      query: (userId) => userId,
    }),
  }),
});
export const { useGetBoardCategoriesQuery } = categoriesApi;
