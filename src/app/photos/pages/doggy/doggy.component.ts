import { Detail } from './../../store/details/details.state';
import { PhotoState } from './../../store/photos.state';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap, tap, map, takeUntil } from 'rxjs/operators';
import * as selectors from '../../store/photos.selectors';
import * as actions from '../../store/details/details.actions';
import { Observable, of, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-doggy',
  templateUrl: './doggy.component.html',
  styleUrls: ['./doggy.component.scss']
})
export class DoggyComponent implements OnInit, OnDestroy {

  details$: Observable<any>;

  private ngUnSubscribe = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private store: Store<PhotoState>
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      takeUntil(this.ngUnSubscribe),
      switchMap(params => of(params['id'])))
      .subscribe(id => {
        this.store.dispatch(actions.fetchPhotoDetail(id));
      });
    this.details$ = this.store.pipe(select(selectors.selectDetails));
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  getInfo(details: Detail, field: string) {
    switch (field) {
      case 'title':
        return (details &&
          details.title &&
          details.title._content) ?
          details.title._content : '';
      case 'description':
        return (details &&
          details.description &&
          details.description._content) ?
          details.description._content : '';
      case 'takenDate':
        return (details &&
          details.dates &&
          details.dates.taken) ?
          details.dates.taken : '';
    }
  }

  getImageProperties(details: Detail) {
    const size = details &&
      details.sizes;
    if (!size) {
      return {
        source: '',
        width: '',
        height: ''
      };
    }
    return {
      source: size[5].source,
      width: size[5].width,
      height: size[5].height
    };
  }

  getGeolocation(details: Detail) {
    const location = details && details.location;
    if (!location) {
      return;
    }
    return location;
  }

  getOwner(details: Detail) {
    const owner = details && details.owner;
    if (!owner) {
      return '';
    }
    return owner;
  }

}
