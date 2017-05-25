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

function loadApplicationsForSiftSuccess(response){
    console.log(response);
    return {
        type: types.APPLICATIONS_FOR_SIFT_LOAD_SUCCESS,
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
