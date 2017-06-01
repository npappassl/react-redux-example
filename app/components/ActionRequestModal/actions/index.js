import types from 'actions/types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}

export const sendTargetsRequest = function() {
    console.log("sendApplicationsDetaiRequest");
    return function(dispatch){
        return APIcaller.getActionRequestTargets().then((response) => {
            dispatch(loadActionRequestTargetSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadActionRequestTargetSuccess(response){
    return {
        type: types.ACTION_REQUEST_TARGETS_LOAD_SUCCESS,
        payload: response
    }
}
