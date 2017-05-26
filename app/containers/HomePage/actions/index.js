import types from 'actions/types';
import APICalls from 'APIs/index';

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


export const makeMockApplicationsForSift = function(){
    return function(dispatch){
        return dispatch(loadApplicationsForSiftSuccess([
            {"id":243,"name":"dsfgsdfg lkjh","firstName":"dsfgsdfg",
                "lastName":"lkjh","email":"lkjh","jobTitle":"lkjh","jobTitleInternal":"Office Admin Manager",
                "jobGroup":"Administration","conclusion":null,"office":{"description":"London","id":4},"duration":20,"stage":"Pending CV Screen","filterStage":"Pending CV Screen","source":"5678","numberOfInterviews":0,"date":"Fri 05/05/2017 00:00",
                "preferredInterviewType":null,"referralSource":"lkjh","reasonableAdjustments":"No","reasonableAdjustmentsDetails":null,"actionRequests":[]
            },
            {"id":244,"name":"Ben asdf","firstName":"Ben",
                "lastName":"asdf","email":"asdf","jobTitle":"advertised job title","jobTitleInternal":null,
                "jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":16,"stage":"Pending CV Screen","filterStage":"Pending CV Screen","source":"5678","numberOfInterviews":0,"date":"Tue 09/05/2017 00:00",
                "preferredInterviewType":{"name":"Undefined","id":1,"canDelete":false},"referralSource":"dfgh","reasonableAdjustments":"No","reasonableAdjustmentsDetails":null,"actionRequests":[]}
            ]));
    }
}
export const makeMockUpcomingInterviews = function(){
    return function(dispatch){
        return dispatch(loadUpcomingInterviewsSuccess(mockInterviews));
    }
}
export const makeMockInterviewsToScore = function(){
    return function(dispatch){
        return dispatch(loadInterviewsToScoreSuccess(mockInterviews));
    }
}

const mockInterviews = [
    {"id":12,"date":"Fri 26/05/2017","startTime":"16:30","timeRange":"16:30 - 17:30","length":"1h","timeStamp":1495812600000,"interviewers":[{"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
    {"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
    {"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0}],
    "invitations":[{"accepted":false,"rejected":false,"participant":"Ben Howard","interviewer":{"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},{"accepted":false,"rejected":false,"participant":"Alex Block","interviewer":{"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},{"accepted":false,"rejected":false,"participant":"bristol mock","interviewer":null,"meetingRoom":{"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}},"conferenceLine":null},{"accepted":false,"rejected":false,"participant":"Nikolaos Pappas","interviewer":{"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},"meetingRoom":null,"conferenceLine":null}],"application":{"id":10,"name":"dupe one","firstName":"dupe","lastName":"one","email":"bhoward@scottlogic.com","jobTitle":"role","jobTitleInternal":"Office Admin Manager","jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":14,"stage":"Awaiting 1st interview (single combat)","filterStage":"Awaiting interview","source":"Direct application","numberOfInterviews":1,"date":"Fri 12/05/2017 07:39","preferredInterviewType":{"name":"single combat","id":11,"canDelete":false},"referralSource":"referralsource","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"adjustments","actionRequests":[]},"meetingRooms":[{"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}}],"conferenceLine":null,"completed":false,"interviewType":{"name":"single combat","id":11,"canDelete":false}}];
