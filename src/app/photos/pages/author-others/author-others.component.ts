import { ActivatedRoute } from '@angular/router';
import { PhotoState } from './../../store/photos.state';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../../store/photos.actions';
import { takeUntil, switchMap } from 'rxjs/operators';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'app-author-others',
  templateUrl: './author-others.component.html',
  styleUrls: ['./author-others.component.scss']
})
export class AuthorOthersComponent implements OnInit, OnDestroy {

  userId: string;

  get payload() {
    return {
      extras: 'media,url_n,owner_name',
      userId: this.userId
    };
  }

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
        this.userId = id;
        this.store.dispatch(actions.fetchPhotosSummary(this.payload));
      });
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

}
