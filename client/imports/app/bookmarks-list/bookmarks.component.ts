import { Component } from '@angular/core';

import template from './bookmarks.component.html';

@Component({
  selector: 'bookmarks-list',
  template
})
export class bookmarksListComponent {
  bookmarks: Array<Object>;
  constructor() {
    this.bookmarks=[
      {
        'title': 'Webmark 1',
        'url' : 'http://test.com',
        'category' : 'Web Design'
      },
      {
        'title': 'Webmark 2',
        'url' : 'http://test.com',
        'category' : 'SEO'
      },
      {
        'title': 'Webmark 3',
        'url' : 'http://test.com',
        'category' : 'Social Networks'
      }
    ]
  }
}
