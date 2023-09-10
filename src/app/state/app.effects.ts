import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { addTodo } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {
  }

  printTodos$ = createEffect(() => this.actions$.pipe(
    ofType(addTodo.type),
    tap(action => console.log(action))
  ), { dispatch: false });
}
