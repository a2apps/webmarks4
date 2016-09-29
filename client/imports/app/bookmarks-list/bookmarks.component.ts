import "reflect-metadata";
import { Component, OnInit, NgZone } from '@angular/core';
import template from './bookmarks.component.html';
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Observable } from 'rxjs';
@Component({
  selector: 'bookmarks-list',
  template
})
export class bookmarksListComponent implements OnInit{
  private bookmarks: bookmark[];
  constructor(private zone: NgZone) {
  }
  ngOnInit(){
    Bookmarks.find({}).zone().subscribe({
      next: bookmarks => {
        console.log("Got Bookmarks: ", bookmarks);
        this.bookmarks=bookmarks;
      }
    });
  }
}
  
