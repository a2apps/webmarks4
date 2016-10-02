import "reflect-metadata";
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import template from './bookmark-form.component.html';
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';

import { Observable } from 'rxjs';
import { Meteor } from 'meteor/meteor';
@Component({
  selector: 'bookmarks-form',
  template: `
  <h3>
    Add Bookmark
</h3>
<form [formGroup]="bookmarkForm" #f="ngForm" (ngSubmit)="addBookmark(f.value)">
    <div class="form-group">
        <label>Type</label>
        <input type="text" class="form-control" formControlName="title">
    </div>
    <div class="form-group">
        <label>URL</label>
        <input type="text" class="form-control" formControlName="url">
    </div>
    <div class="form-group">
        <label>Category</label>
        <input type="text" class="form-control" formControlName="category">
    </div>
    <button class="btn btn-primary">Submit</button>
</form>

  `
})
export class bookmarksFormComponent implements OnInit{
  private bookmarks: bookmark[];
  bookmarkForm: FormGroup;
  
  constructor(private zone: NgZone, private fb: FormBuilder) {
    this.bookmarkForm= fb.group({ 
    title:['', Validators.required],
    url: ['', Validators.required],
    category: ['', Validators.required]
    });
  }
  addBookmark(bookmark){
      if(this.bookmarkForm.valid){
        if (Meteor.userId()){
            Bookmarks.insert({
            title: bookmark.title,
            url: bookmark.url,
            category: bookmark.category,
            owner: Meteor.userId()
          });
          console.log(this.bookmarkForm.value);
          this.bookmarkForm.reset();
        } else{
          alert('Please login to add a bookmark')
        }
          
          // (<Control>this.bookmarkForm.controls['title'].updateValue(''));
          // (<Control>this.bookmarkForm.controls['url'].updateValue(''));
          // (<Control>this.bookmarkForm.controls['category'].updateValue(''));
      } 
    }

  ngOnInit(){
    Bookmarks.find({}).zone().subscribe({
      next: bookmarks => {
        // console.log("Got Bookmarks: ", bookmarks);
        this.bookmarks=bookmarks;
      }
    });
    
  }
}
  
