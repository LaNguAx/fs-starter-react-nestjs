import { type ITodo, type PartialTodo } from '@/types/interfaces/todo';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AppData {
  sheet: string;
}

const initialState: AppData = {
  sheet: '',
};

export const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setSheet: (state, action: PayloadAction<string>) => {
      state.sheet = action.payload;
    },
  },
});

export const { setSheet } = appDataSlice.actions;

export default appDataSlice.reducer;
