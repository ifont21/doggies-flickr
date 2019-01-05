import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PhotoState } from './photos.state';

export const selectPhotos = createFeatureSelector<PhotoState>(
  'photos'
);

export const selectPhotosSummary = createSelector(
  selectPhotos,
  (state: PhotoState) => state && state.photosSummary
);

export const selectDetails = createSelector(
  selectPhotos,
  (state: PhotoState) => state && state.detail
);


