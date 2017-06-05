import types from 'actions/types';
import MockAPICalls from 'APIs/mockIndex';
import APICalls from 'APIs/index';
let APIcaller;
if(process.env.NODE_ENV === "development"){
    APIcaller = MockAPICalls;
} else {
    APIcaller = APICalls;
}

export const sendScheduleInterviewPageRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APIcaller.getCalendarNewApps().then((response) => {
            console.log("mock",response);
            dispatch(loadScheduleInterviewPageSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

export const sendNewAvailabilityCalendarRequest = function() {
    console.log("sendAvailabilityRequest");
    return function(dispatch){
        return APIcaller.getCalendarNewAvailability().then((response) => {
            console.log("mock",response);
            dispatch(loadInterviewerAvailabilitySuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
}
function loadInterviewerAvailabilitySuccess(response){
    return{
        type: types.NEW_CALEDAR_AVAILABILITY_LOAD_SUCCESS,
        payload: response
    }
}
function loadScheduleInterviewPageSuccess(response){
    console.log("mockDispatcher",response);
    return {
        type: types.SCHEDULE_INTERVIEW_PAGE_LOAD_RESOURCE_SUCCESS,
        payload: response
    }
}
