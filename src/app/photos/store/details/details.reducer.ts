import { DetailState } from './details.state';
import * as actionTypes from './details.type';

export function reducer(
  state: DetailState,
  action: actionTypes.PhotoDetailAction
): DetailState {
  switch (action.type) {

    case actionTypes.FETCH_PHOTO_DETAIL:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.FETCH_PHOTO_DETAIL_SUCCESS:
      return {
        details: action.payload,
        loading: false,
        error: null
      };

    case actionTypes.FETCH_PHOTO_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
