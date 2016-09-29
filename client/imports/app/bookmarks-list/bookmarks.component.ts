import "reflect-metadata";
import { Component, OnInit, NgZone } from '@angular/core';
// import template from './bookmarks.component.html';
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Observable } from 'rxjs';

@Component({
  selector: 'bookmarks-list',
  template:`
  <h3>
    Bookmarks List
</h3>
<table class="table table-striped">
    <thead>
        <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Category</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        
        <tr *ngFor="let bookmark of bookmarks">
            <td><a [routerLink]="['/bookmark', bookmark._id]">{{bookmark.title}}</a></td>
            <td>{{bookmark.url}}</td>
            <td>{{bookmark.category}}</td>
            <td><button class="btn btn-danger" (click)="removeBookmark(bookmark)">Delete</button></td>
        </tr>
    </tbody>
</table>
  `
})
export class bookmarksListComponent implements OnInit{
  private bookmarks: bookmark[];
  constructor(private zone: NgZone) {
  }
  ngOnInit(){
    Bookmarks.find({}).zone().subscribe({
      next: bookmarks => {
        // console.log("Got Bookmarks: ", bookmarks);
        this.bookmarks=bookmarks;
      }
    });
  }
  removeBookmark(bookmark){
    Bookmarks.remove(bookmark._id);
  }
}
  
