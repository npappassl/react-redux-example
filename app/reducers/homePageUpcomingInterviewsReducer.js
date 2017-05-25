import { fromJS } from 'immutable';
import types from 'actions/types';

export default function homePageUpcomingInterviewsReducer(state = [], action) {
    console.log(action);
    if(!action.payload){
        return state;
        console.log(types.UPCOMING_INTERVIEWS_LOAD_SUCCESS,"Whithout payload", action.payload);
    }
  switch (action.type) {
    case types.UPCOMING_INTERVIEWS_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
