import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { METEOR_PROVIDERS } from 'angular2-meteor';
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bookmarksListComponent } from './bookmarks-list/bookmarks.component';
import { bookmarksFormComponent } from './bookmarks-form/bookmark-form.component';
import { bookmarksDetailComponent } from './bookmark-detail/bookmark-detail.component';
@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
    bookmarksListComponent,
    bookmarksFormComponent,
    bookmarksDetailComponent
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
    appRoutingProviders
  ],
  // Modules
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, routing
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {}
