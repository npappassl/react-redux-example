import types from 'actions/types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}

export const sendApplicationDetailRequest = function(id) {
    console.log("sendApplicationsDetaiRequest");
    return function(dispatch){
        return APIcaller.getNotCompletedApplicationDetail(id).then((response) => {
            dispatch(loadApplicationDetailSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadApplicationDetailSuccess(response){
    return {
        type: types.APPLICATION_DETAIL_LOAD_SUCCESS,
        payload: response
    }
}
