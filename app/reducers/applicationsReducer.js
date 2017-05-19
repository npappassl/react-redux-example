import { fromJS } from 'immutable';
import types from '../actions/types';

const initialState = fromJS ({
    userPreferences: [],
    applications: []
});
function applicationsReducer(state = initialState, action) {
  switch (action.type) {
    case types.APPLICATIONS_LOAD_SUCCESS:
      return state
        .set('applications', action.applications);
    default:
      return state;
  }
}

export default applicationsReducer;
