import { SharedPhotoOptions } from './../../../shared/models/photo-options';
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
      this.state.flickr.photos &&
      this.state.flickr.photos.photo;
  }

  get total() {
    return this.state &&
      this.state.flickr &&
      this.state.flickr.photos &&
      this.state.flickr.photos.total;
  }

  get payload() {
    const pageState = this.state &&
      this.state.flickr &&
      this.state.flickr.photos;

    return {
      page: pageState.page + 1,
      tags: 'dogs',
      extras: 'media,url_n,owner_name'
    };
  }

  constructor(private store: Store<PhotoState>) { }

}
