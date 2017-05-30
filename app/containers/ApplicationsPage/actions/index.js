import types from 'actions/types';
// import APICalls from 'APIs/index';
import APICalls from 'APIs/mockIndex';

export const sendApplicationsRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APICalls.getNotCompletedApplications().then((response) => {
            console.log("mock",response);
            dispatch(loadApplicationsSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadApplicationsSuccess(response){
    console.log("mockDispatcher",response);
    return {
        type: types.APPLICATIONS_LOAD_SUCCESS,
        payload: response
    }
}
