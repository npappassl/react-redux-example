import { fromJS } from 'immutable';
import types from 'actions/types';

const initialState = fromJS ({
    applicationList: null,
    userPreferences: null
});
export default function applicationsReducer(state = null, action) {
    console.log(action);
    if(!action.payload){
        return state;
        console.log(types.APPLICATIONS_LOAD_SUCCESS,"Whithout payload", action.payload);
    }
  switch (action.type) {
    case types.APPLICATIONS_LOAD_SUCCESS:
      return action.payload;
    //   return state
    //     .set('applicationList', action.payload.applications)
    //     .set('userPreferences', action.payload.userPreferences);
    default:
      return state;
  }
}
