import { PhotoState } from './../../store/photos.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import * as actions from '../../store/photos.actions';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {

  @Input()
  state: any;

  buffer = [];

  get photos() {
    return this.state &&
      this.state.flickr &&
      this.state.flickr.photo;
  }

  get total() {
    return this.state &&
      this.state.flickr &&
      this.state.flickr.total;
  }

  get payload() {
    const pageState = this.state &&
      this.state.flickr;

    return {
      page: pageState.page + 1,
      tags: 'dogs',
      extras: 'media,url_n,owner_name'
    };
  }

  constructor(private store: Store<PhotoState>) { }

  updateScroll($event) {
    this.store.dispatch(actions.fetchMorePhotosSummary(this.payload));
  }

}
