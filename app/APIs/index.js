export default class APIcalls {
    static getUserPermissions() {
        const request = new Request("services/user/user", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    static getNotCompletedApplications() {
        const request = new Request("services/application/notCompleted", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    static getNotCompletedApplicationDetail(id) {
        const request = new Request("services/application/application?applicationId="+id, {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    static getForSiftApplications() {
        const request = new Request("services/application/appsForSift", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    static getMyUpcomingInterviews() {
        const request = new Request("services/interview/my_upcoming_interviews", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    static getMyUpcomingInterviewsToScore() {
        const request = new Request("services/interview/my_upcoming_interviews_to_score", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            if(response.ok){
                return response;
            } else {
                throw Error(response.statusText);
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    static saveCreateApplication(formData) {
        const request = new Request("services/application/form/saveCreateApplication", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(formData),
            headers:{
                "Content-Type": "multipart/form-data;"
            }
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error
        });
    }
    static askIfDuplicate(formData) {
        const baseUrl = "services/application/form/checkIfIsDuplicate";
        let urlParams = "?";
        formData.map(item => {
            if(urlParams==="?"){
                urlParams += item.name+"="+item.value;
            }else {
                urlParams += "&"+item.name+"="+item.value;
            }
        });
        const request = new Request(baseUrl + urlParams, {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error
        });
    }
    static getActionRequestTargets(){
        const baseUrl = "services/actionRequest/getTargets";
        const request = new Request(baseUrl, {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error
        });

    }
}
