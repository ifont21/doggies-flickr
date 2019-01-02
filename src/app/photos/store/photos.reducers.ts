import { PhotoState } from './photos.state';
import { ActionReducerMap } from '@ngrx/store';
import { reducer as photosSummary } from './photo.reducer';

export const reducers: ActionReducerMap<PhotoState> = {
  photosSummary
};
