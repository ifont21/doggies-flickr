import { PhotoState } from './../../store/photos.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/photos.actions';

@Component({
  selector: 'app-doggies',
  templateUrl: './doggies.component.html',
  styleUrls: ['./doggies.component.scss']
})
export class DoggiesComponent implements OnInit {

  get payload() {
    return {
      extras: 'media,url_n,owner_name',
      tags: 'dogs'
    };
  }

  constructor(private store: Store<PhotoState>) { }

  ngOnInit() {
    this.store.dispatch(actions.fetchPhotosSummary(this.payload));
  }

}
