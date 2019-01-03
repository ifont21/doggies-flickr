import { PhotosApiService } from './../../core/services/photos-api.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as actionTypes from './photos.type';
import * as actionCreators from './photos.actions';
import { switchMap, map, catchError, tap, debounceTime } from 'rxjs/operators';

@Injectable()
export class PhotosSummaryEffects {

  @Effect()
  fetchPhotosSummary$: Observable<Action> = this.actions$.pipe(
    ofType<actionTypes.FetchPhotosSummary>(
      actionTypes.FETCH_PHOTOS_SUMMARY
    ),
    debounceTime(500),
    switchMap(action => this.api.getPhotoList(action.payload).pipe(
      map(payload => payload.photos),
      map(actionCreators.fetchPhotosSummarySuccess),
      catchError(error => of(actionCreators.fetchPhotosSummaryFailure(error))),
    ))
  );


  @Effect()
  fetchMorePhotosSummary$: Observable<Action> = this.actions$.pipe(
    ofType<actionTypes.FetchMorePhotosSummary>(
      actionTypes.FETCH_MORE_PHOTOS_SUMMARY
    ),
    debounceTime(500),
    switchMap(action => this.api.getPhotoList(action.payload).pipe(
      map(payload => payload.photos),
      map(actionCreators.fetchMorePhotosSummarySuccess),
      catchError(error => of(actionCreators.fetchPhotosSummaryFailure(error))),
    ))
  );

  constructor(
    private api: PhotosApiService,
    private actions$: Actions
  ) { }
}
