import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '@/store/slices/todosSlice';
import appDataReducer from '@/store/slices/appSlice';

export const store = configureStore({
  reducer: { todos: todosReducer, appData: appDataReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
