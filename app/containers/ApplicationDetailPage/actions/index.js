import types from 'actions/types';
// import APICalls from 'APIs/index';
import APICalls from 'APIs/mockIndex';

export const sendApplicationDetailRequest = function(id) {
    console.log("sendApplicationsDetaiRequest");
    return function(dispatch){
        return APICalls.getNotCompletedApplicationDetail(id).then((response) => {
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
