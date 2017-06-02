import types from './types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}


export const sendCreateAppFormRequest = function() {
    console.log("sendUserPermissionsRequest");
    return function(dispatch){
        return APIcaller.getCreateApplicationForm().then((response) => {
            dispatch(loadCreateAppFormLoadSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadCreateAppFormLoadSuccess(response){
    return {
        type: types.CREATE_FORM_REQUEST_LOAD_SUCCESS,
        payload: response
    }
}
