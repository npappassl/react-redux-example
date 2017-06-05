import types from 'actions/types';

export default function scheduleInterviewPageReducer(state = null, action){
    switch (action.type) {
        case types.SCHEDULE_INTERVIEW_PAGE_LOAD_RESOURCE_SUCCESS:
            return action.payload;
            break;
        default:
            return state
    }
}
