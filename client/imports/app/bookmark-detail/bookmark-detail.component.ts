import "reflect-metadata";
import { Component, OnInit, NgZone } from '@angular/core';

import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Meteor } from 'meteor/meteor';
@Component({
  selector: 'bookmark-detail',
  template: `
<a [routerLink]="['/']" class="btn btn-primary">Go Back</a>
<hr>
<header *ngIf="bookmark">
    <h2>
        {{bookmark.title}}
    </h2>
    <p><strong>URL:</strong>{{bookmark.url}}</p>
    <p><strong>Category:</strong>{{bookmark.category}}</p>
</header>
<hr>

<div *ngIf="isOwner">
<h3>
    Update Bookmark
</h3>
    <form (ngSubmit)="updateBookmark(bookmark)">
        <div class="form-group">
            <label>Type</label>
            <input type="text" class="form-control" [(ngModel)]="bookmark.title" name="type">
        </div>
        <div class="form-group">
            <label>URL</label>
            <input type="text" class="form-control" [(ngModel)]="bookmark.url" name="url">
        </div>
        <div class="form-group">
            <label>Category</label>
            <input type="text" class="form-control" [(ngModel)]="bookmark.category" name="category">
        </div>
        <button class="btn btn-primary">Submit</button>
    </form>
</div>
  `
})
export class bookmarksDetailComponent implements OnInit{
  bookmarkID:string;
  bookmark: Bookmark;
  isOwner= false;
  constructor(private route: ActivatedRoute, private zone: NgZone) {
  }
  ngOnInit(){
      this.route.params.subscribe((params)=>{
        this.bookmarkID=params['bookmarkID'];  
        var current=Bookmarks.findOne(this.bookmarkID);
        if(current.owner == Meteor.userId()){
            this.isOwner = true;
        }     
      });
      
      this.bookmark=Bookmarks.findOne({ _id: this.bookmarkID})
  }
  updateBookmark(bookmark){
      if (Meteor.userId()){
            Bookmarks.update(bookmark._id, {
            title: bookmark.title,
            url: bookmark.url,
            category: bookmark.category
         })
      }else{
          alert('Please login to update your bookmarks')
      }
    
  }
}
  
