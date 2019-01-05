import { PhotoState } from './photos.state';
import { ActionReducerMap } from '@ngrx/store';
import { reducer as photosSummary } from './photo.reducer';
import { reducer as detail } from './details/details.reducer';

export const reducers: ActionReducerMap<PhotoState> = {
  photosSummary,
  detail
};
