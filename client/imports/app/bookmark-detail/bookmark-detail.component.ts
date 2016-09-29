import "reflect-metadata";
import { Component, OnInit, NgZone } from '@angular/core';
import template from './bookmark-detail.component.html';
import { Bookmarks, bookmark } from '../../../../collections/bookmarks';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bookmark-detail',
  template
})
export class bookmarksDetailComponent implements OnInit{
  bookmarkID:string;
  bookmark: Object;
  constructor(private route: ActivatedRoute, private zone: NgZone) {
  }
  ngOnInit(){
      this.route.params.subscribe((params)=>{
        this.bookmarkID=params['bookmarkID'];        
      });
      
      this.bookmark=Bookmarks.findOne({ _id: this.bookmarkID})
  }
}
  
