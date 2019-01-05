import { PhotoState } from './../../store/photos.state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input } from '@angular/core';
import * as actions from '../../store/photos.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {

  @Input()
  state: any;

  @Input()
  payload: any;

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

  get payloadScroll() {
    const pageState = this.state &&
      this.state.flickr;

    return {
      page: pageState.page + 1,
      ...this.payload
    };
  }

  constructor(
    private store: Store<PhotoState>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  updateScroll($event) {
    this.store.dispatch(actions.fetchMorePhotosSummary(this.payloadScroll));
  }

  details(photoId: string) {
    if (this.payload.userId) {
      return;
    }
    this.router.navigate(
      [photoId],
      { relativeTo: this.route }
    );
  }

}
