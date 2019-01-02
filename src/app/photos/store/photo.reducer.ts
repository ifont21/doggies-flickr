import { PhotosSummaryState } from './photos.state';
import * as actionTypes from './photos.type';

export function reducer(
  state: PhotosSummaryState,
  action: actionTypes.PhotosSummaryAction
): PhotosSummaryState {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_SUMMARY:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_MORE_PHOTOS_SUMMARY:
      return { ...state, loading: true, error: null };

    case actionTypes.FETCH_PHOTOS_SUMMARY_SUCCESS:
      return {
        flickr: { ...action.payload },
        loading: false,
        error: null
      };

    case actionTypes.FETCH_MORE_PHOTOS_SUMMARY_SUCCESS:
      return {
        flickr: { ...action.payload },
        loading: false,
        error: null
      };
      // return {
      //   flickr: {
      //     photos: {}
      //   }
      //   // flickr: { ...state.flickr.photos['photo  ...action.payload },
      //   loading: false,
      //   error: null
      // };

    case actionTypes.FETCH_PHOTOS_SUMMARY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
