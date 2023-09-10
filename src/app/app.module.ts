import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule, Actions } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AppEffects } from './state/app.effects';
import { todosReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ todos: todosReducer }),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [Actions],
  bootstrap: [AppComponent]
})
export class AppModule {
}
