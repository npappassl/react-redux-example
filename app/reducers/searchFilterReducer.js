import { fromJS } from 'immutable';
import types from 'actions/types';

export default function applicationsReducer(state = "", action) {
  switch (action.type) {
    case types.SEARCH_FILTER_CHANGED:
      return action.payload;
    default:
      return state;
  }
}
