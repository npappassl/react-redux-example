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
        const baseUrl = "services/application/notCompleted";
        return this.sendGetRequest(baseUrl);
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
        const baseUrl = "services/application/appsForSift";
        return this.sendGetRequest(baseUrl);
    }
    static getMyUpcomingInterviews() {
        const baseUrl = "services/interview/my_upcoming_interviews";
        return this.sendGetRequest(baseUrl);
    }
    static getMyUpcomingInterviewsToScore() {
        const baseUrl = "services/interview/my_upcoming_interviews_to_score";
        return this.sendGetRequest(baseUrl);
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
        return this.sendGetRequest(baseUrl+urlParams);
    }
    static getActionRequestTargets(){
        const baseUrl = "services/actionRequest/getTargets";
        return this.sendGetRequest(baseUrl);
    }
    static getCreateApplicationForm(){
        const baseUrl = "services/application/form/createForm";
        return this.sendGetRequest(baseUrl);
    }
    static getCalendarNewApps(){
        const baseUrl = "services/calendar/new";
        return this.sendGetRequest(baseUrl);
    }
    static getCalendarNewAvailability(){
        const baseUrl = "services/calendar/new_availability?interviewers=213%2C200%2C100%2C20%2C165%2C177%2C193%2C199%2C83%2C40%2C156%2C151%2C166%2C107%2C149%2C110%2C61%2C152%2C120%2C109%2C41%2C69%2C11%2C70%2C192%2C118%2C175%2C194%2C60%2C42%2C190%2C167%2C82%2C164%2C119%2C49&meetingRooms=1%2C2&conferenceLines=1%2C2&date=Sat%2017%2F06%2F2017&start=08%3A00&duration=10h&_=1496648883592";
        return this.sendGetRequest(baseUrl);
    }
    static sendGetRequest(baseUrl){
        const request = new Request(baseUrl, {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            return response;
        }).catch(error => {
            return error;
        });
    }
}
