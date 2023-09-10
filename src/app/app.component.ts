import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTodo, clearTodos } from './state/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-demo';

  constructor(private store: Store) {

  }

  addTodo() {
    this.store.dispatch(addTodo({ todo: 'Hello' }));
  }

  clearTodos() {
    this.store.dispatch(clearTodos());
  }
}
