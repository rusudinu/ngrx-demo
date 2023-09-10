import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, clearTodos } from './app.actions';
import { initialState } from './app.state';

export const todosReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(removeTodo, (state, { todo }) => ({ ...state, todos: state.todos.filter(t => t !== todo) })),
  on(clearTodos, state => ({ ...state, todos: [] }))
);
