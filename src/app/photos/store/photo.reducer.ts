import { PhotosSummaryState, Photo } from './photos.state';
import * as actionTypes from './photos.type';

export function reducer(
  state: PhotosSummaryState,
  action: actionTypes.PhotosSummaryAction
): PhotosSummaryState {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_SUMMARY:
      return {
        ...state,
        loading: true,
        error: null,
        loadingScroll: false
      };

    case actionTypes.FETCH_MORE_PHOTOS_SUMMARY:
      return {
        ...state,
        loading: false,
        error: null,
        loadingScroll: true
      };

    case actionTypes.FETCH_PHOTOS_SUMMARY_SUCCESS:
      return {
        loading: false,
        flickr: action.payload,
        error: null,
        loadingScroll: false
      };

    case actionTypes.FETCH_MORE_PHOTOS_SUMMARY_SUCCESS:
      return {
        flickr: {
          ...state.flickr,
          photo: [...state.flickr.photo, ...action.payload.photo],
          page: action.payload.page
        },
        loading: false,
        loadingScroll: false,
        error: null
      };

    case actionTypes.FETCH_PHOTOS_SUMMARY_FAILURE:
      return {
        ...state,
        loading: false,
        loadingScroll: false,
        error: action.payload
      };

    default:
      return state;
  }
}
