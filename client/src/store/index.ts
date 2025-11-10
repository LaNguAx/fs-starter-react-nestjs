import { boardsApi } from '@/store/apis/boardsApi';
import { categoriesApi } from '@/store/apis/categoriesApi';
import appReducer from '@/store/slices/appSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    appState: appReducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(boardsApi.middleware, categoriesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
