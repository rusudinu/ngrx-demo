import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.state';

// select the particular state (in case you had multiple states, in AppState)
export const selectTodos = createFeatureSelector<AppState>('todos');

// select data based upon particular state
export const selectTodoList = createSelector(
  selectTodos,
  (state: AppState) => state.todos
);
