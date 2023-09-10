import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] Add Todo',
  props<{ todo: string }>()
);

export const removeTodo = createAction(
  '[Todo] Remove Todo',
  props<{ todo: string }>()
);

export const clearTodos = createAction(
  '[Todo] Clear Todos'
);
