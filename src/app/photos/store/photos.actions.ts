import { SharedPhotoOptions } from './../../shared/models/photo-options';
import { HttpErrorResponse } from '@angular/common/http';

import * as actionTypes from './photos.type';
import { FlickrPhotos } from './photos.state';

export function fetchPhotosSummary(
  payload: SharedPhotoOptions = { text: '' }
): actionTypes.FetchPhotosSummary {
  return {
    type: actionTypes.FETCH_PHOTOS_SUMMARY,
    payload
  };
}

export function fetchMorePhotosSummary(
  payload: SharedPhotoOptions = { text: '' }
): actionTypes.FetchMorePhotosSummary {
  return {
    type: actionTypes.FETCH_MORE_PHOTOS_SUMMARY,
    payload
  };
}

export function fetchPhotosSummarySuccess(
  payload: FlickrPhotos
): actionTypes.FetchPhotosSummarySuccess {
  return {
    type: actionTypes.FETCH_PHOTOS_SUMMARY_SUCCESS,
    payload
  };
}

export function fetchMorePhotosSummarySuccess(
  payload: FlickrPhotos
): actionTypes.FetchMorePhotosSummarySuccess {
  return {
    type: actionTypes.FETCH_MORE_PHOTOS_SUMMARY_SUCCESS,
    payload
  };
}

export function fetchPhotosSummaryFailure(
  payload: HttpErrorResponse
): actionTypes.FetchPhotosSummaryFailure {
  return {
    type: actionTypes.FETCH_PHOTOS_SUMMARY_FAILURE,
    payload
  };
}
