import { PhotosSummaryEffects } from './photos.effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './photos.reducers';
import { initialState } from './photos.state';

@NgModule({
  imports: [
    StoreModule.forFeature('photos', reducers, {
      initialState
    }),
    EffectsModule.forFeature([PhotosSummaryEffects])
  ]
})
export class PhotosStoreModule { }
