import { Detail } from './details.state';
import { PhotosApiService } from './../../../core/services/photos-api.service';
import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as actionTypes from './details.type';
import * as actionCreators from './details.actions';
import { debounceTime, switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class PhotoDetailsEffects {

  @Effect()
  fetchPhotoDetail$: Observable<Action> = this.actions$.pipe(
    ofType<actionTypes.FetchPhotoDetail>(
      actionTypes.FETCH_PHOTO_DETAIL
    ),
    debounceTime(200),
    switchMap(action => this.api.getPhotoInfo(action.payload).pipe(
      map((payload) => {
        const [details, size] = payload;
        const sizes = size
          && size.sizes
          && size.sizes.size;
        return {
          ...details.photo,
          sizes
        } as Detail;
      }),
      map(actionCreators.fetchPhotoDetailSuccess),
      catchError(error => of(actionCreators.fetchPhotoDetailFailure(error))),
    ))
  );

  constructor(
    private api: PhotosApiService,
    private actions$: Actions
  ) { }
}
