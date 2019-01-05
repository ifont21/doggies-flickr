import { PhotoState, initialState } from './../photos.state';
import { DetailState } from './details.state';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';


export function selectPhotoDetails(state: PhotoState = initialState) {
  debugger;
  return state.detail;
}

export const selectDetails = createSelector(
  selectPhotoDetails,
  (state: DetailState) => state && state.details
);

export const selectLoading = createSelector(
  selectPhotoDetails,
  (state: DetailState) => state && state.loading
);

export const selectError = createSelector(
  selectPhotoDetails,
  (state: DetailState) => state && state.error
);
