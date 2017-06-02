import types from 'actions/types';

const initState = {
    newRequest: false,
    actionRequest: false,
    showHistory: false,
    widthdrawCandidate: false,
    initialSift: false,
    cvSift:false,
    actionTargets: null,

}
export default function modalReducer(state = initState,action){
    switch (action.type) {
        case types.OPEN_MODAL_NEW_REQUEST:
            return {
                ...state,
                newRequest:true,
                payload: action.payload
            };
            break;
        case types.OPEN_MODAL_ACTION_REQUEST:
            return {
                ...state,
                actionRequest: action.payload
            }
            break;
        case types.OPEN_MODAL_SHOW_HISTORY:
            return {
                ...state,
                showHistory: action.payload
            }
            break;
        case types.OPEN_MODAL_WITHDRAW_CANDIDATE:
            return {
                ...state,
                withdrawCandidate: action.payload
            }
            break;
        case types.OPEN_MODAL_P_INITIAL_SIFT:
            return {
                ...state,
                initialSift: action.payload
            }
            break;
        case types.OPEN_MODAL_P_CV_SIFT:
            return {
                ...state,
                cvSift: action.payload
            }
            break;
        case types.ACTION_REQUEST_TARGETS_LOAD_SUCCESS:
            return {
                ...state,
                actionTargets: action.payload
            }
            break;
        case types.CLOSE_MODAL:
            return initState;
            break;
        default:
            return state;
    }
}
