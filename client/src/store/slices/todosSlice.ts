// import { type ITodo, type PartialTodo } from '@/types/interfaces/todo';
// import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// interface TodosState {
//   todos: ITodo[];
// }

// const initialState: TodosState = {
//   todos: [],
// };

// export const todosSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     create: (state, action: PayloadAction<ITodo>) => {
//       state.todos.push(action.payload);
//     },
//     update: (state, action: PayloadAction<PartialTodo>) => {
//       const todo = state.todos.find((todo) => todo.id === action.payload.id);

//       if (todo) Object.assign(todo, action.payload);
//     },
//     remove: (state, action: PayloadAction<number>) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });


// export const { create, update, remove } = todosSlice.actions;

// export default todosSlice.reducer;