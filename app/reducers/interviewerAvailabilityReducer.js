import types from 'actions/types';

export default function interviewerAvailabilityReducer(state = null, action){
    switch (action.type) {
        case types.NEW_CALEDAR_AVAILABILITY_LOAD_SUCCESS:
            return action.payload;
            break;
        default:
            return state
    }
}
