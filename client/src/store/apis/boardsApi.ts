import { getUserBoards as fetchUserBoards } from '@/services/boards/getUserBoards';
import type { Board } from '@/types/boards/board';
import { createApi, type BaseQueryFn } from '@reduxjs/toolkit/query/react';

const mockBaseQuery: BaseQueryFn<string, Board[], unknown> = async () => {
  try {
    const data = await fetchUserBoards(); // returns Board[]
    return { data }; // <-- RTKQ expects this shape
  } catch (error) {
    return { error };
  }
};

export const boardsApi = createApi({
  reducerPath: 'boardsApi',
  baseQuery: mockBaseQuery as any,
  endpoints: (builder) => ({
    getUserBoards: builder.query<Board[], string>({
      query: (userId) => userId,
    }),
  }),
});
export const { useGetUserBoardsQuery } = boardsApi;
