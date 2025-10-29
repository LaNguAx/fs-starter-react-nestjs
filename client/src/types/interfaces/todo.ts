import type { PartialExcept } from '@/types/partialExcept';

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export type PartialTodo = PartialExcept<ITodo, 'id'>;
