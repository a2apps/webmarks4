import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { bookmarksListComponent } from './bookmarks-list/bookmarks.component';
import { bookmarksDetailComponent } from './bookmark-detail/bookmark-detail.component';
const appRoutes: Routes = [
    {path:'', component: bookmarksListComponent},
    {path:'bookmark/:bookmarkID', component: bookmarksDetailComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);