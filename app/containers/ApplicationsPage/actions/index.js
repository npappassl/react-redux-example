import types from 'actions/types';
import APICalls from 'APIs/index';

export const sendApplicationsRequest = function() {
    console.log("sendApplicationsRequest");
    return function(dispatch){
        return APICalls.getNotCompletedApplications().then((response) => {
            dispatch(loadApplicationsSuccess(response.json()))
        }).catch((error) => {
            throw (error);
        });
    }
};

function loadApplicationsSuccess(response){
    console.log(response);
    return {
        type: types.APPLICATIONS_LOAD_SUCCESS,
        payload: response
    }
}


export const makeMockApplications = function(){
    return function(dispatch){
        return dispatch(loadApplicationsSuccess({applications:[
            { id: 2, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Bristol", id:1}, filterStage:"Waiting Feedback"},
            { id: 3, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Newcastle", id:2}, filterStage:"New Application"}
        ],userPreferences:[]}));
    }
}
