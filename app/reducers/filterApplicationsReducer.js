import types from 'actions/types';

let initialState = {
    jobTitle: "",
    office: "",
    stage: "",
    source: ""
}
export default function filterApplicationsReducer(state = initialState, action) {
    switch (action.type) {
        case types.APPLICATIONS_APPLY_FILTER:
            return action.payload;
            break;
        default:
            return state;
    }
}
