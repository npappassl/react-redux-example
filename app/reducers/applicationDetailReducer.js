import { fromJS } from 'immutable';
import types from 'actions/types';

const initialState = fromJS ({
    applicationList: null,
    userPreferences: null
});
export default function applicationsReducer(state = null, action) {
    switch (action.type) {
    case types.APPLICATION_DETAIL_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
