import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import template from './app.component.html';
import { Bookmarks } from '../../../collections/bookmarks';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  constructor() {
  }
}
