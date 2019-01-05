import { Detail } from './details.state';
import { HttpErrorResponse } from '@angular/common/http';
import * as actionTypes from './details.type';

export function fetchPhotoDetail(
  payload: string
): actionTypes.FetchPhotoDetail {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL,
    payload
  };
}

export function fetchPhotoDetailSuccess(
  payload: Detail
): actionTypes.FetchPhotoDetailSuccess {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL_SUCCESS,
    payload
  };
}

export function fetchPhotoDetailFailure(
  payload: HttpErrorResponse
): actionTypes.FetchPhotoDetailFailure {
  return {
    type: actionTypes.FETCH_PHOTO_DETAIL_FAILURE,
    payload
  };
}
