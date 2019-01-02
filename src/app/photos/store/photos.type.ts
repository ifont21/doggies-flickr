import { SharedPhotoOptions } from './../../shared/models/photo-options';
import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { FlickrPhotos } from './photos.state';

export const FETCH_PHOTOS_SUMMARY =
  '[Photos][PhotosSummary] Fetch photos summary';

export const FETCH_MORE_PHOTOS_SUMMARY =
  '[Photos][PhotosSummary] Fetch More photos summary';

export const FETCH_PHOTOS_SUMMARY_SUCCESS =
  '[Photos][PhotosSummarySuccess] Fetch photos summary success';

export const FETCH_MORE_PHOTOS_SUMMARY_SUCCESS =
  '[Photos][PhotosSummarySuccess] Fetch more photos summary success';

export const FETCH_PHOTOS_SUMMARY_FAILURE =
  '[Photos][PhotosSummaryFailure] Fetch photos summary failure';

export interface FetchPhotosSummary extends Action {
  readonly type: typeof FETCH_PHOTOS_SUMMARY;

  payload: SharedPhotoOptions;
}

export interface FetchMorePhotosSummary extends Action {
  readonly type: typeof FETCH_MORE_PHOTOS_SUMMARY;

  payload: SharedPhotoOptions;
}

export interface FetchPhotosSummarySuccess extends Action {
  readonly type: typeof FETCH_PHOTOS_SUMMARY_SUCCESS;

  payload: FlickrPhotos;
}

export interface FetchMorePhotosSummarySuccess extends Action {
  readonly type: typeof FETCH_MORE_PHOTOS_SUMMARY_SUCCESS;

  payload: FlickrPhotos;
}

export interface FetchPhotosSummaryFailure extends Action {
  readonly type: typeof FETCH_PHOTOS_SUMMARY_FAILURE;

  payload: HttpErrorResponse;
}

export type PhotosSummaryAction =
  | FetchPhotosSummary
  | FetchMorePhotosSummary
  | FetchPhotosSummarySuccess
  | FetchMorePhotosSummarySuccess
  | FetchPhotosSummaryFailure;
