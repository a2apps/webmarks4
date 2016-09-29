import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { METEOR_PROVIDERS } from 'angular2-meteor';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bookmarksListComponent } from './bookmarks-list/bookmarks.component';
import { bookmarksFormComponent } from './bookmarks-form/bookmark-form.component';
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    bookmarksListComponent,
    bookmarksFormComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [

  ],
  // Modules
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
