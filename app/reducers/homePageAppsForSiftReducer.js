import { fromJS } from 'immutable';
import types from 'actions/types';

const initialState = fromJS ({
    applicationList: null,
    userPreferences: null
});
export default function homePageAppsForSiftReducer(state = [], action) {
    console.log(action);
    if(!action.payload){
        return state;
        console.log(types.APPLICATIONS_FOR_SIFT_LOAD_SUCCESS,"Whithout payload", action.payload);
    }
  switch (action.type) {
    case types.APPLICATIONS_FOR_SIFT_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
