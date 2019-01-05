import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Detail } from './details.state';


export const FETCH_PHOTO_DETAIL =
  '[Photo][Detail] Fetch photo detail';

export const FETCH_PHOTO_DETAIL_SUCCESS =
  '[Photo][Detail] Fetch photo detail success';

export const FETCH_PHOTO_DETAIL_FAILURE =
  '[Photo][Detail] Fetch photo detail failure';

export interface FetchPhotoDetail extends Action {
  readonly type: typeof FETCH_PHOTO_DETAIL;

  payload: string;
}

export interface FetchPhotoDetailSuccess extends Action {
  readonly type: typeof FETCH_PHOTO_DETAIL_SUCCESS;

  payload: Detail;
}

export interface FetchPhotoDetailFailure extends Action {
  readonly type: typeof FETCH_PHOTO_DETAIL_FAILURE;

  payload: HttpErrorResponse;
}

export type PhotoDetailAction =
  | FetchPhotoDetail
  | FetchPhotoDetailSuccess
  | FetchPhotoDetailFailure;
