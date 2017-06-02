import types from 'containers/CreateApplicationPage/actions/types';

const initState = {
    offices: false,
    actionRequest: false,
    showHistory: false,
    widthdrawCandidate: false,
    initialSift: false,
    cvSift:false,
    actionTargets: null,

}
export default function modalReducer(state = null,action){
    switch (action.type) {
        case types.CREATE_FORM_REQUEST_LOAD_SUCCESS:
            return action.payload;
            break;
        // case types.CREATE_FORM_REQUEST_LOAD_SUCCESS:
        //     return {
        //         ...state,
        //         newRequest:true,
        //         payload: action.payload
        //     };
        //     break;
        default:
            return state;
    }
}
