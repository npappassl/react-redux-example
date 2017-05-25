import types from 'actions/types';

let initialState = {
    jobTitle: [],
    office: [],
    filterStage: [],
    source: []
}
export default function filterApplicationsReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case types.APPLICATIONS_APPLY_FILTER:
            let newState = {};
            for(let key of Object.keys(state)){
                newState[key] = state[key];
            }
            const index = newState[action.payload.type].indexOf(action.payload.filter);
            if(index<0){
                newState[action.payload.type].push(action.payload.filter);
            }else {
                newState[action.payload.type].splice(index,1);
            }
            console.log(newState);
            return newState;
            break;
        default:
            return state;
    }
}
