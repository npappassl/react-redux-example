export default class MockAPIcalls {
    static getUserPermissions() {
        const user = {
            "fullName":"HR User","ldap":"hruser",
            "allowed":[
                "ACCESS_ALL","DELETE_APPLICATIONS","EDIT_APPLICATIONS","SEARCH_APPLICATIONS","CREATE_APPLICATIONS","SCHEDULE_INTERVIEW","MANAGE_ACCESS_NOTES_AND_CONFIDENTIAL_NOTES","UPDATE_DELETE_INTERVIEW","MANAGE_SKILLS","MANAGE_MEETING_ROOMS","MANAGE_CONFERENCE_LINES","MANAGE_INTERVIEWERS","MANAGE_CV_SCREENERS","MANAGE_SECURITY_TAGS","MANAGE_APPLICATION_SOURCES","MANAGE_GROUPS","MANAGE_QUESTIONS","VIEW_POTENTIAL_DUPES","VIEW_DOCUMENTS_AND_INTERVIEWS_FOR_HIRES","CHANGE_CONFIG",
                "MANAGE_INTERVIEW_TYPES","MANAGE_MAIL_PROCESSOR","MANAGE_LINK_TYPES","MANAGE_ACTION_REQUEST_TARGETS"
            ],"disallowed":[],"resourceAllowed":[
                "VIEW_APPLICATIONS","VIEW_APPLICATION_HISTORY","VIEW_UPCOMING_INTERVIEWS","ADD_EDIT_SCORES_FOR_OTHERS","VIEW_CONFIDENTIAL_FIELDS","APP_INITIAL_CV_SIFT","APP_CV_SIFT","APP_PROGRESS_DECISION","APP_REOPEN","APP_WITHDRAW_CANDIDATE","APP_MAKE_OFFER","APP_CANDIDATE_DECISION","APP_REJECT"
            ],
            "resourceDisallowed":[],"applicationsPageVisible":true,"interviewsPageVisible":true,"cvSiftVisible":true,"permissionsRetrieved":true,"userExistsInSecurityService":true
        }
        const request = new Request("services/user/user", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => user};
        });

    }
    static getNotCompletedApplications() {
        const mockNotCompleted = {
            applications:[
                { id: 2, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Bristol", id:1}, filterStage:"Waiting Feedback",stage:"Waitign Feedback"},
                { id: 3, name: "George Kuparissis", firstName: "George", lastName: "Kyparissis", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Newcastle", id:2}, filterStage:"New Application", stage:"New Application"}
            ],userPreferences:[]
        };
        const request = new Request("services/application/notCompleted", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => mockNotCompleted};
        });
    }
    static getForSiftApplications() {
        const mockAppsForSift = [
            {"id":243,"name":"dsfgsdfg lkjh","firstName":"dsfgsdfg",
                "lastName":"lkjh","email":"lkjh","jobTitle":"lkjh","jobTitleInternal":"Office Admin Manager",
                "jobGroup":"Administration","conclusion":null,"office":{"description":"London","id":4},"duration":20,"stage":"Pending CV Screen","filterStage":"Pending CV Screen","source":"5678","numberOfInterviews":0,"date":"Fri 05/05/2017 00:00",
                "preferredInterviewType":null,"referralSource":"lkjh","reasonableAdjustments":"No","reasonableAdjustmentsDetails":null,"actionRequests":[]
            },
            {"id":244,"name":"Ben asdf","firstName":"Ben",
                "lastName":"asdf","email":"asdf","jobTitle":"advertised job title","jobTitleInternal":null,
                "jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":16,"stage":"Pending CV Screen","filterStage":"Pending CV Screen","source":"5678","numberOfInterviews":0,"date":"Tue 09/05/2017 00:00",
                "preferredInterviewType":{"name":"Undefined","id":1,"canDelete":false},"referralSource":"dfgh","reasonableAdjustments":"No","reasonableAdjustmentsDetails":null,"actionRequests":[]
            }];
        const request = new Request("services/application/notCompleted", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => mockAppsForSift};
        });
    }
    static getMyUpcomingInterviews() {
        const mockInterviews = [
            {"id":12,"date":"Fri 26/05/2017","startTime":"16:30","timeRange":"16:30 - 17:30","length":"1h","timeStamp":1495812600000,
                "interviewers":[
                    {"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                    {"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                    {"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0}
                ],
                "invitations":[
                    {"accepted":false,"rejected":false,"participant":"Ben Howard","interviewer":{"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"Alex Block","interviewer":{"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"bristol mock","interviewer":null,"meetingRoom":{"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}},"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"Nikolaos Pappas","interviewer":{"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},"meetingRoom":null,"conferenceLine":null}
                ],
                "application":{
                    "id":10,"name":"dupe one","firstName":"dupe","lastName":"one","email":"bhoward@scottlogic.com","jobTitle":"role","jobTitleInternal":"Office Admin Manager","jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":14,"stage":"Awaiting 1st interview (single combat)","filterStage":"Awaiting interview","source":"Direct application","numberOfInterviews":1,"date":"Fri 12/05/2017 07:39","preferredInterviewType":{"name":"single combat","id":11,"canDelete":false},"referralSource":"referralsource","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"adjustments","actionRequests":[]
                },
                "meetingRooms":[
                    {"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}}],"conferenceLine":null,"completed":false,
                    "interviewType":{"name":"single combat","id":11,"canDelete":false}}
                ];
        const request = new Request("services/application/notCompleted", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => mockInterviews};
        });
    }
    static getMyUpcomingInterviewsToScore() {
        const mockInterviews = [
            {"id":13,"date":"Fri 26/05/2017","startTime":"16:30","timeRange":"16:30 - 17:30","length":"1h","timeStamp":1495812600000,
                "interviewers":[
                    {"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                    {"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                    {"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0}
                ],
                "invitations":[
                    {"accepted":false,"rejected":false,"participant":"Ben Howard","interviewer":{"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"Alex Block","interviewer":{"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},"meetingRoom":null,"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"bristol mock","interviewer":null,"meetingRoom":{"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}},"conferenceLine":null},
                    {"accepted":false,"rejected":false,"participant":"Nikolaos Pappas","interviewer":{"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":1,"interviewCountLongTerm":1,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},"meetingRoom":null,"conferenceLine":null}
                ],
                "application":{
                    "id":10,"name":"dupe one","firstName":"dupe","lastName":"one","email":"bhoward@scottlogic.com","jobTitle":"role","jobTitleInternal":"Office Admin Manager","jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":14,"stage":"Awaiting 1st interview (single combat)","filterStage":"Awaiting interview","source":"Direct application","numberOfInterviews":1,"date":"Fri 12/05/2017 07:39","preferredInterviewType":{"name":"single combat","id":11,"canDelete":false},"referralSource":"referralsource","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"adjustments","actionRequests":[]
                },
                "meetingRooms":[
                    {"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}}],"conferenceLine":null,"completed":false,
                    "interviewType":{"name":"single combat","id":11,"canDelete":false}}
                ];
        const request = new Request("services/application/toScore", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => mockInterviews};
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
    static getNotCompletedApplicationDetail(id) {
        const application = {
            "candidate":{
                "first":"aaa","last":"aaa","email":"aa","phoneNumber":"aa","address":"aa","postcode":"11"},
                "id":1,"jobTitleAsAdvertised":"111","office":{"description":"Bristol","id":5},
                "eligibility":{
                    "description":"Yes (UK/EU Citizen)","id":1
                },"visaType":null,"visaExpiryDate":null,
                "applicationDate":"Wed 10/05/2017","applicationDuration":20,"stage":"Awaiting feedback following 1st interview (single combat)","conclusion":null,"conclusionComments":null,"source":{"id":1,"description":"Direct application","enabled":true},"referralSource":"","currentSalary":"11","salaryExpectation":"11",
                "interviews":[
                    {"id":10,"date":"Tue 23/05/2017","startTime":"13:30","timeRange":"13:30 - 14:30","length":"1h",
                    "interviewers":[
                        {"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":7,"interviewCountLongTerm":7,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                        {"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":8,"interviewCountLongTerm":8,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1}
                    ],"meetingRooms":[
                        {"id":3,"description":"London mock 1","emailAddress":"NPappas@scottlogic.com","enabled":true,"office":{"description":"London","id":4}},{"id":2,"description":"bristol mock 2","emailAddress":"bhoward@scottlogic.co.uk","enabled":true,"office":{"description":"Bristol","id":5}}
                    ],"conferenceLine":null,"feedbacks":[],"candidateName":"aaa aaa","questions":{"questions":[],"interviewId":10},"interviewType":{"name":"single combat","id":11,"canDelete":false}}],
                    "documents":[
                        {"name":"Hackathon.pdf","id":1}
                    ],"feedbackDocuments":[],"duplicates":[],"notes":[],
                    "appStatusPermissions":{
                        "allowedToInitialSift":false,"allowedToCvSift":false,"allowedToProgressApp":false,"allowedToScheduleInterview":false,"allowedToWithdrawApp":true,"allowedToRejectApp":false,"allowedToMakeOffer":false,"allowedToEnterCandidateDecision":false,"allowedToReopenApp":false
                    },"jobTitleGroups":[
                        {"id":3008,"description":"Administration","jobTitles":[
                            {"id":34,"description":"Office Admin Manager"},
                            {"id":35,"description":"Administrator"}]
                        },
                        {"id":3010,"description":"Application Support","jobTitles":[
                            {"id":40,"description":"Head of Support"},
                            {"id":41,"description":"Lead Application Support Consultant"},
                            {"id":42,"description":"Senior Application Support Consultant"},
                            {"id":43,"description":"Application Support Consultant"},
                            {"id":44,"description":"Graduate Application Support Consultant"}
                        ]},
                        {"id":3004,"description":"Commercial Marketing","jobTitles":[
                            {"id":20,"description":"Marketing Executive"},
                            {"id":19,"description":"Marketing Campaigns Manager"},
                            {"id":18,"description":"Web Developer"},
                            {"id":17,"description":"Head of Marketing"},
                            {"id":21,"description":"Marketing Intern"}
                        ]},
                        {"id":3003,"description":"Delivery","jobTitles":[
                            {"id":15,"description":"Client Manager"},
                            {"id":16,"description":"Technical Project Manager"}
                        ]},
                        {"id":3000,"description":"Development","jobTitles":[
                            {"id":3,"description":"Lead Developer"},
                            {"id":4,"description":"Senior Developer"},
                            {"id":1,"description":"Principal Consultant"},
                            {"id":2,"description":"Technical Architect"},
                            {"id":7,"description":"Intern"},
                            {"id":5,"description":"Developer"},
                            {"id":6,"description":"Graduate Developer"}
                        ]},
                        {"id":3006,"description":"Finance","jobTitles":[
                            {"id":24,"description":"Finance Officer"},
                            {"id":26,"description":"System Administrator"},
                            {"id":25,"description":"Head of Internal Systems"}]},
                            {"id":3020,"description":"GroupWithNoTitles","jobTitles":[]
                        },
                        {"id":3009,"description":"HR","jobTitles":[
                            {"id":37,"description":"HRBP"},
                            {"id":38,"description":"Recruitment Officer"},
                            {"id":39,"description":"Recruitment Admin"},
                            {"id":36,"description":"Recruitment Manager"}
                        ]},
                        {"id":3007,"description":"Products","jobTitles":[
                            {"id":33,"description":"Product Sales Consultant"},
                            {"id":28,"description":"Senior Developer"},
                            {"id":27,"description":"Lead Developer"},
                            {"id":32,"description":"Technical Evangelist"},
                            {"id":31,"description":"Product Engineer"},
                            {"id":30,"description":"Graduate Developer"},
                            {"id":29,"description":"Developer"}
                        ]},
                        {"id":3005,"description":"Sales","jobTitles":[
                            {"id":23,"description":"Sales Executive"},
                            {"id":22,"description":"Business Development Manager"}
                        ]},
                        {"id":3011,"description":"Senior Management","jobTitles":[
                            {"id":50,"description":"Head of UX"},
                            {"id":49,"description":"HR Director"},
                            {"id":52,"description":"Finance Director"},
                            {"id":51,"description":"Sales Director"},
                            {"id":45,"description":"Head of Development"},
                            {"id":46,"description":"Commercial Director"},
                            {"id":47,"description":"Delivery Director"},
                            {"id":48,"description":"Technical Director"}
                        ]},
                        {"id":3012,"description":"Solution Architecture","jobTitles":[
                            {"id":53,"description":"Technical Architect"}
                        ]},
                        {"id":3017,"description":"Test","jobTitles":[
                            {"id":62,"description":"Test1"},
                            {"id":63,"description":"Test2"}
                        ]},
                        {"id":3001,"description":"Test Practice","jobTitles":[
                            {"id":8,"description":"Lead Test Engineer"},
                            {"id":11,"description":"Graduate Test Engineer"},
                            {"id":9,"description":"Senior Test Engineer"},
                            {"id":10,"description":"Test Engineer"}
                        ]},
                        {"id":3002,"description":"UX Practice","jobTitles":[
                            {"id":12,"description":"Senior UX Designer"},
                            {"id":13,"description":"UX Designer"},
                            {"id":14,"description":"Graduate UX Designer"}
                        ]}
                    ],
                    "jobTitleGroup":
                        {"id":3000,"description":"Development","jobTitles":[
                            {"id":3,"description":"Lead Developer"},
                            {"id":4,"description":"Senior Developer"},
                            {"id":1,"description":"Principal Consultant"},
                            {"id":2,"description":"Technical Architect"},
                            {"id":7,"description":"Intern"},
                            {"id":5,"description":"Developer"},
                            {"id":6,"description":"Graduate Developer"}
                        ]},
                        "jobTitle":{"id":4,"description":"Senior Developer"},"hired":false,"allowedToAddOrEditScoresForOthers":true,"allowedToAddScoresToMyInterviews":false,"allowedToViewSensitiveApplicationDetails":true,"allowedToViewApplicationHistory":true,
                        "applicationHistory":[{"dateTimeString":"Wed 10/05/2017 08:40","user":"HR User","action":"Created application","stage":"New application"},{"dateTimeString":"Wed 10/05/2017 09:01","user":"HR User","action":"Passed initial sift","stage":"Pending CV Screen"},
                        {"dateTimeString":"Tue 23/05/2017 10:23","user":"HR User","action":"Passed CV screening","stage":"Schedule 1st interview (single combat)"},{"dateTimeString":"Tue 23/05/2017 10:41","user":"HR User","action":"Scheduled interview","stage":"Awaiting 1st interview (single combat)"},
                        {"dateTimeString":"Tue 23/05/2017 10:43","user":"HR User","action":"Scheduled interview","stage":"Awaiting 1st interview (single combat)"}],
                        "socialMediaLinks":[],
                        "actionRequests":[
                            {"id":1,"applicationId":null,"subject":"asdfasdfa","status":"NEW","entries":[{"id":1,"actionRequestId":1,"dateAndTime":"Fri 19/05/2017 15:30","comment":"asdfasdf","user":"HR User",
                                "target":{"id":4,"target":"The King","enabled":true,"deletable":false}}
                                ],"creationDate":1495207800000},
                            {"id":2,"applicationId":null,"subject":"asdfasdfa","status":"NEW","entries":[{"id":1,"actionRequestId":1,"dateAndTime":"Fri 19/05/2017 15:30","comment":"asdfasdf","user":"HR User",
                                "target":{"id":1,"target":"Originator","enabled":true,"deletable":false}}
                                ],"creationDate":1495207800000}
                        ],
                        "reasonableAdjustments":false,"reasonableAdjustmentsDetails":null
        }
        const request = new Request("services/application/notCompleted", {
                        method: "GET",
                        credentials: "include"
        });
        return fetch(request).then(response => {
                        console.log(response);
                        return {json: () => application};
        });
    }
    static getActionRequestTargets(){
        const targets = [
            {"id":1,"target":"Originator","enabled":true,"deletable":true},
            {"id":4,"target":"The King","enabled":true,"deletable":false}
        ];
        const request = new Request("services/application/notCompleted", {
            method: "GET",
            credentials: "include"
        });
        return fetch(request).then(response => {
            console.log(response);
            return {json: () => targets};
        });
    }

}
