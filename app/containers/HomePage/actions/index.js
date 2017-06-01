import types from 'actions/types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}

export const sendApplicationsForSiftRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APIcaller.getForSiftApplications().then((response) => {
            dispatch(loadApplicationsForSiftSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};
export const sendUpcomingInterviewsRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APIcaller.getMyUpcomingInterviews().then((response) => {
            dispatch(loadUpcomingInterviewsSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};
export const sendInterviewsToScoreRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APIcaller.getMyUpcomingInterviewsToScore().then((response) => {
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
