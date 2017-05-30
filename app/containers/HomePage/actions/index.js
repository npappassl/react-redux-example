import types from 'actions/types';
// import APICalls from 'APIs/index';
import APICalls from 'APIs/mockIndex';

export const sendApplicationsForSiftRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APICalls.getForSiftApplications().then((response) => {
            dispatch(loadApplicationsForSiftSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};
export const sendUpcomingInterviewsRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APICalls.getMyUpcomingInterviews().then((response) => {
            dispatch(loadUpcomingInterviewsSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};
export const sendInterviewsToScoreRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APICalls.getMyUpcomingInterviewsToScore().then((response) => {
            dispatch(loadUpcomingInterviewsSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadApplicationsForSiftSuccess(response){
    console.log(response);
    return {
        type: types.APPLICATIONS_FOR_SIFT_LOAD_SUCCESS,
        payload: response
    }
}
function loadUpcomingInterviewsSuccess(response){
    console.log(response);
    return {
        type: types.UPCOMING_INTERVIEWS_LOAD_SUCCESS,
        payload: response
    }
}
function loadInterviewsToScoreSuccess(response){
    console.log(response);
    return {
        type: types.INTERVIEWS_TO_SCORE_LOAD_SUCCESS,
        payload: response
    }
}
