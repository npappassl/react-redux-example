import { fromJS } from 'immutable';
import types from 'actions/types';

export default function homePageInterviewsToScoreReducer(state = [], action) {
    // console.log(action);
    // if(!action.payload){
    //     return state;
    //     console.log(types.INTERVIEWS_TO_SCORE_LOAD_SUCCESS,"Whithout payload", action.payload);
    // }
  switch (action.type) {
    case types.INTERVIEWS_TO_SCORE_LOAD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
