import type { Board } from '@/types/boards/board';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  activeBoard: Board | undefined;
}

const initialState: AppState = {
  activeBoard: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveBoard: (state, action: PayloadAction<Board>) => {
      state.activeBoard = action.payload;
    },
  },
});

export const { setActiveBoard } = appSlice.actions;

export default appSlice.reducer;
