import { PhotoState } from './../../store/photos.state';
import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as selectors from '../../store/photos.selectors';

@Component({
  selector: 'app-flickr-photo-container',
  templateUrl: './flickr-photo.component.html',
  styleUrls: ['./flickr-photo.component.scss']
})
export class FlickrPhotoComponent implements OnInit {

  @ContentChild('title') titleTpl: TemplateRef<any>;
  @ContentChild('content') contentTpl: TemplateRef<any>;

  photoSummary$: Observable<any>;

  constructor(private store: Store<PhotoState>) { }

  ngOnInit() {
    this.photoSummary$ = this.store.pipe(select(selectors.selectPhotosSummary));
  }

}
