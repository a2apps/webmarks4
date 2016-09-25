import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { METEOR_PROVIDERS } from 'angular2-meteor';

import { AppComponent } from './app.component';

import { bookmarksListComponent } from './bookmarks-list/bookmarks.component';
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    bookmarksListComponent
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
    BrowserModule
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
