import types from 'actions/types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}

export const sendApplicationsRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APIcaller.getNotCompletedApplications().then((response) => {
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
