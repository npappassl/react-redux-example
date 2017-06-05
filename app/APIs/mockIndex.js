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
    static getCalendarNewApps(){
        const mockCalendarNewApps = {
            "applications":[
                {"id":9,"name":"dupe one","firstName":"dupe","lastName":"one","email":"bhoward@scottlogic.com","jobTitle":"role","jobTitleInternal":"Finance Officer","jobGroup":"Finance","conclusion":null,"office":{"description":"London","id":4},"duration":24,"stage":"Awaiting decision following 1st interview (single combat)",
                    "filterStage":"Awaiting decision","source":"Direct application","numberOfInterviews":1,"date":"Fri 12/05/2017 00:00","preferredInterviewType":{"name":"single combat","id":11,"canDelete":false},"referralSource":"referralsource","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"adjustments","actionRequests":[]},
                {"id":11,"name":"dupe one","firstName":"dupe","lastName":"one","email":"bhoward@scottlogic.com","jobTitle":"role","jobTitleInternal":"Office Admin Manager","jobGroup":"Administration","conclusion":null,"office":{"description":"Bristol","id":5},"duration":24,"stage":"Awaiting 1st interview (Slick rap battle)",
                    "filterStage":"Awaiting interview","source":"Direct application","numberOfInterviews":1,"date":"Fri 12/05/2017 00:00","preferredInterviewType":{"name":"Slick rap battle","id":10,"canDelete":false},"referralSource":"referralsource","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"adjustments","actionRequests":[]},
                {"id":12,"name":"rick sanchez","firstName":"rick","lastName":"sanchez","email":"a@b.c","jobTitle":"the boss","jobTitleInternal":null,"jobGroup":"Senior Management","conclusion":null,"office":{"description":"Bristol","id":5},"duration":21,"stage":"Awaiting feedback following 1st interview (noughts and crosses)",
                    "filterStage":"Awaiting feedback","source":"Agency","numberOfInterviews":1,"date":"Mon 15/05/2017 00:00","preferredInterviewType":{"name":"single combat","id":11,"canDelete":false},"referralSource":"","reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"I can't see","actionRequests":[]},
                {"id":17,"name":"PassInitialSift MockStage","firstName":"PassInitialSift","lastName":"MockStage","email":"asdass@ASDAs.com","jobTitle":"PASS INITIAL SIFT JOB","jobTitleInternal":"Technical Architect","jobGroup":"Development","conclusion":null,"office":{"description":"Bristol","id":5},"duration":3,"stage":"Schedule 1st interview (Undefined)",
                    "filterStage":"Schedule interview","source":"asdfasdf","numberOfInterviews":0,"date":"Fri 02/06/2017 00:00","preferredInterviewType":{"name":"Undefined","id":1,"canDelete":false},"referralSource":"","reasonableAdjustments":"No","reasonableAdjustmentsDetails":null,"actionRequests":[]}
            ],"offices":[
                {"description":"Not specified","id":1},{"description":"Newcastle","id":2},{"description":"Edinburgh","id":3},{"description":"London","id":4},{"description":"Bristol","id":5}
            ],"meetingRooms":[
                {"id":1,"description":"bristol mock","emailAddress":"ABlock@scottlogic.com","enabled":true,"office":{"description":"Bristol","id":5}},{"id":2,"description":"bristol mock 2","emailAddress":"bhoward@scottlogic.co.uk","enabled":true,"office":{"description":"Bristol","id":5}},
                {"id":3,"description":"London mock 1","emailAddress":"NPappas@scottlogic.com","enabled":true,"office":{"description":"London","id":4}},{"id":4,"description":"Edibnurgh mock1","emailAddress":"a@b.com","enabled":true,"office":{"description":"Edinburgh","id":3}},
                {"id":5,"description":"London Mock 2","emailAddress":"b@c.com","enabled":true,"office":{"description":"London","id":4}}
            ],"conferenceLines":[
                {"id":1,"description":"mock conference","emailAddress":"ablock@scottlogic.co.uk","enabled":true,"internalNumber":"112","externalNumber":"112","adminPin":"1234","userPin":"4321"},
                {"id":2,"description":"mock conference 2","emailAddress":"bhoward@scottlogic.co.uk","enabled":true,"internalNumber":"123","externalNumber":"456","adminPin":"789","userPin":"10"}
            ],"skills":[],
            "interviewers":[
                {"id":213,"ldap":"abennett","name":"Adam Bennett","emailAddress":"ABennett@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":63,"ldap":"amorgan","name":"Adam Morgan","emailAddress":"AMorgan@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":195,"ldap":"aparvez","name":"Adil Parvez","emailAddress":"AParvez@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":2,"ldap":"aconlin","name":"Adrian Conlin","emailAddress":"AConlin@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":36,"ldap":"astanley","name":"Alan Stanley","emailAddress":"astanley@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10015,"ldap":"agard","name":"Alec Gard","emailAddress":"AGard@scottlogic.com","office":"Edinburgh","skills":[],"role":"Intern","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":200,"ldap":"ablock","name":"Alex Block","emailAddress":"ABlock@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":7,"interviewCountLongTerm":7,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                {"id":129,"ldap":"asheehan","name":"Alex Sheehan-Dare","emailAddress":"ASheehan-Dare@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":16,"ldap":"aclarke","name":"Alison Clarke","emailAddress":"AClarke@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":14,"ldap":"aduncan","name":"Alison Duncan","emailAddress":"ADuncan@scottlogic.com","office":"Newcastle","skills":[],"role":"Recruitment Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":32,"ldap":"awallis","name":"Allen Wallis","emailAddress":"awallis@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":93,"ldap":"apopovici","name":"Anda Popovici","emailAddress":"APopovici@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":163,"ldap":"acarr","name":"Andrew Carr","emailAddress":"ACarr@scottlogic.com","office":"London","skills":[],"role":"Principal Consultant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":100,"ldap":"adyer","name":"Andrew Dyer","emailAddress":"ADyer@scottlogic.com","office":"Bristol","skills":[],"role":"Technical Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":155,"ldap":"amjones","name":"Andrew Jones","emailAddress":"amjones@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":20,"ldap":"alee","name":"Andrew Lee","emailAddress":"alee@scottlogic.com","office":"Bristol","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":47,"ldap":"apolkinghorn","name":"Andrew Polkinghorn","emailAddress":"APolkinghorn@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":184,"ldap":"avelykis","name":"Andrius Velykis","emailAddress":"AVelykis@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":30,"ldap":"aaiken","name":"Andy Aiken","emailAddress":"AAiken@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":8,"ldap":"aburn","name":"Andy Burn","emailAddress":"ABurn@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":79,"ldap":"abasista","name":"Anna Wojtczuk","emailAddress":"awojtczuk@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":6,"ldap":"awelsh","name":"Antony Welsh","emailAddress":"awelsh@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10016,"ldap":"arashid","name":"Arran Rashid","emailAddress":"ARashid@scottlogic.com","office":"Edinburgh","skills":[],"role":"Intern","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":88,"ldap":"amatthews","name":"Ashley Matthews","emailAddress":"AMatthews@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":202,"ldap":"agrierson","name":"Avril Fiddes","emailAddress":"AFiddes@scottlogic.com","office":"Edinburgh","skills":[],"role":"Technical Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":78,"ldap":"brussell","name":"Barbara Russell","emailAddress":"BRussell@scottlogic.com","office":"Newcastle","skills":[],"role":"Finance Officer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":137,"ldap":"bjedrzejewski","name":"Bartosz Jedrzejewski","emailAddress":"BJedrzejewski@scottlogic.com","office":"London","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":165,"ldap":"bhoward","name":"Ben Howard","emailAddress":"BHoward@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":9,"interviewCountLongTerm":9,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                {"id":170,"ldap":"blambert","name":"Ben Lambert","emailAddress":"BLambert@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":142,"ldap":"bdimitrov","name":"Bogdan Dimitrov","emailAddress":"BDimitrov@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":188,"ldap":"byordanov","name":"Boyko Yordanov","emailAddress":"BYordanov@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10014,"ldap":"bmacdonald","name":"Brendan MacDonald","emailAddress":"BMacDonald@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Tester","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":177,"ldap":"cgonzalez","name":"Carlos Ortega Gonzalez","emailAddress":"CGonzalez@scottlogic.com","office":"Bristol","skills":[],"role":"Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":172,"ldap":"csanderson","name":"Chloe Sanderson","emailAddress":"CSanderson@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":193,"ldap":"cmeehan","name":"Chris Meehan","emailAddress":"CMeehan@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":37,"ldap":"cprice","name":"Chris Price","emailAddress":"CPrice@scottlogic.com","office":"Newcastle","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":216,"ldap":"crobson","name":"Christopher Robson","emailAddress":"CRobson@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":103,"ldap":"cwilton","name":"Christopher Wilton","emailAddress":"CWilton@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":199,"ldap":"cblakeman","name":"Colin Blakeman","emailAddress":"CBlakeman@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":9,"ldap":"ceberhardt","name":"Colin Eberhardt","emailAddress":"CEberhardt@scottlogic.com","office":"Newcastle","skills":[],"role":"Technology Director","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":123,"ldap":"csettle","name":"Connor Settle","emailAddress":"CSettle@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":124,"ldap":"cyule","name":"Courtney Yule","emailAddress":"CYule@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":196,"ldap":"cayre","name":"Craig Ayre","emailAddress":"CAyre@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":44,"ldap":"chart","name":"Craig Hart","emailAddress":"CHart@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":43,"ldap":"csmiles","name":"Craig Smiles","emailAddress":"CSmiles@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":71,"ldap":"ctongue","name":"Craig Tongue","emailAddress":"ctongue@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":174,"ldap":"cwylie","name":"Craig Wylie","emailAddress":"CWylie@scottlogic.com","office":"Edinburgh","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":83,"ldap":"ddyl","name":"Damian Dyl","emailAddress":"DDyl@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":46,"ldap":"dallsop","name":"Daniel Allsop","emailAddress":"DAllsop@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":145,"ldap":"ddrozdzewski","name":"Daniel Drozdzewski","emailAddress":"DDrozdzewski@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":40,"ldap":"dgorst","name":"Daniel Gorst","emailAddress":"dgorst@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":57,"ldap":"dmcnamee","name":"Daniel McNamee","emailAddress":"DMcNamee@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":156,"ldap":"dnicholas","name":"Danny Nicholas","emailAddress":"DNicholas@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":162,"ldap":"dsmith","name":"Darren Smith","emailAddress":"DSmith@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":151,"ldap":"dedwards","name":"David Edwards","emailAddress":"DEdwards@scottlogic.com","office":"Bristol","skills":[],"role":"Lead Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":81,"ldap":"djohnston","name":"David Johnston","emailAddress":"DJohnston@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":68,"ldap":"dmcavelia","name":"David McAvelia","emailAddress":"DMcAvelia@scottlogic.com","office":"Newcastle","skills":[],"role":"Account Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":171,"ldap":"dogle","name":"David Ogle","emailAddress":"DOgle@scottlogic.com","office":"Edinburgh","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":50,"ldap":"dkerr","name":"Dean Kerr","emailAddress":"DKerr@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":141,"ldap":"dcastellano","name":"Debbie Castellano","emailAddress":"DCastellano@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":205,"ldap":"dait-braham","name":"Djamila Ait-Braham","emailAddress":"DAit-Braham@scottlogic.com","office":"London","skills":[],"role":"Senior Office Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":189,"ldap":"dketley","name":"Dominic Ketley","emailAddress":"DKetley@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":125,"ldap":"dtheasby","name":"Drew Theasby","emailAddress":"DTheasby@scottlogic.com","office":"Edinburgh","skills":[],"role":"Tester","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10011,"ldap":"eharrison","name":"Eamonn Harrison","emailAddress":"EHarrison@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10013,"ldap":"efiennes","name":"Elizabeth Fiennes","emailAddress":"EFiennes@scottlogic.com","office":"London","skills":[],"role":"Lead Test Consultant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":114,"ldap":"fpozzobon","name":"Fabien Pozzobon","emailAddress":"FPozzobon@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":208,"ldap":"fhubin","name":"Frank Hubin","emailAddress":"FHubin@scottlogic.com","office":"London","skills":[],"role":"Technical Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":4,"ldap":"gemms","name":"Garath Emms","emailAddress":"GEmms@scottlogic.com","office":"Newcastle","skills":[],"role":"Systems Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":64,"ldap":"gjohnson","name":"Gary Johnson","emailAddress":"GJohnson@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":7,"ldap":"gscott","name":"Gary Scott","emailAddress":"GScott@scottlogic.com","office":"Newcastle","skills":[],"role":"Managing Director","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10012,"ldap":"gvaughan","name":"George Vaughan","emailAddress":"GVaughan@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":166,"ldap":"gginghina","name":"Georgina Ginghina","emailAddress":"GGinghina@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":115,"ldap":"ggovan","name":"Gordon Govan","emailAddress":"GGovan@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":29,"ldap":"godds","name":"Graham Odds","emailAddress":"godds@scottlogic.com","office":"Edinburgh","skills":[],"role":"Head of UX Practice","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":84,"ldap":"hpretswell","name":"Hannah Pretswell","emailAddress":"HPretswell@scottlogic.com","office":"Newcastle","skills":[],"role":"Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":104,"ldap":"hhudson","name":"Heather Hudson","emailAddress":"HHudson@scottlogic.com","office":"Newcastle","skills":[],"role":"Office Admin Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":121,"ldap":"hcampbell","name":"Helen Campbell","emailAddress":"HCampbell@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":65,"ldap":"ithake","name":"Ian Thake","emailAddress":"ithake@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":67,"ldap":"ilopatkin","name":"Ilya Lopatkin","emailAddress":"ILopatkin@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":128,"ldap":"jarnstein","name":"Jack Arnstein","emailAddress":"JArnstein@scottlogic.com","office":"Newcastle","skills":[],"role":"Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":80,"ldap":"jbradshaw","name":"Jack Bradshaw","emailAddress":"JBradshaw@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":91,"ldap":"jgraham","name":"Jack Graham","emailAddress":"JGraham@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":139,"ldap":"jdunkerley","name":"James Dunkerley","emailAddress":"JDunkerley@scottlogic.com","office":"London","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":215,"ldap":"jheward","name":"James Heward","emailAddress":"JHeward@scottlogic.com","office":"Edinburgh","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":134,"ldap":"jhill","name":"James Hill","emailAddress":"JHill@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":87,"ldap":"jleftley","name":"James Leftley","emailAddress":"JLeftley@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":173,"ldap":"jrice","name":"James Rice","emailAddress":"JRice@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":25,"ldap":"jtyrrell","name":"James Tyrrell","emailAddress":"jtyrrell@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":98,"ldap":"jwalker","name":"James Walker","emailAddress":"JWalker@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":143,"ldap":"jwhite","name":"James White","emailAddress":"JWhite@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":214,"ldap":"jwren","name":"James Wren","emailAddress":"JWren@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":130,"ldap":"jmorris","name":"Jamie Morris","emailAddress":"JMorris@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":191,"ldap":"jakerman","name":"Jan Akerman","emailAddress":"JAkerman@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":107,"ldap":"jebbin","name":"Jason Ebbin","emailAddress":"JEbbin@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":136,"ldap":"jmelon","name":"Jean-Sacha Melon","emailAddress":"JMelon@scottlogic.com","office":"London","skills":[],"role":"Client Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":149,"ldap":"jgaudion","name":"Jennifer Gaudion","emailAddress":"JGaudion@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":85,"ldap":"jmagee","name":"Joel Magee","emailAddress":"JMagee@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":31,"ldap":"jsmith","name":"Joel Smith","emailAddress":"JSmith@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":72,"ldap":"jbaker","name":"John Baker","emailAddress":"JBaker@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":110,"ldap":"jdawes","name":"John Dawes","emailAddress":"JDawes@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":201,"ldap":"johill","name":"John Hill","emailAddress":"John.Hill@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":61,"ldap":"jrobinson","name":"John Robinson","emailAddress":"jrobinson@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":76,"ldap":"jwright","name":"John Wright","emailAddress":"JWright@scottlogic.com","office":"Newcastle","skills":[],"role":"Recruitment Manager - Operations","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":152,"ldap":"jharris","name":"Jon Harris","emailAddress":"JHarris@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":176,"ldap":"jtucker","name":"Jon Tucker","emailAddress":"JTucker@scottlogic.com","office":"London","skills":[],"role":"Head of Business Development","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":140,"ldap":"jhodges","name":"Jonathan Hodges","emailAddress":"JHodges@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":169,"ldap":"jmiknys","name":"Justas Miknys","emailAddress":"JMiknys@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":54,"ldap":"karmer","name":"Kai Armer","emailAddress":"KArmer@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Product Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":120,"ldap":"kgray","name":"Kenneth Gray","emailAddress":"KGray@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":186,"ldap":"kwalker","name":"Kevin Walker","emailAddress":"KWalker@scottlogic.com","office":"Edinburgh","skills":[],"role":"Technical Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":150,"ldap":"khurley","name":"Kirsten Hurley","emailAddress":"KHurley@scottlogic.com","office":"London","skills":[],"role":"Business Development Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":204,"ldap":"lhammond","name":"Lauren Hammond","emailAddress":"LHammond@scottlogic.com","office":"Newcastle","skills":[],"role":"HR Assistant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":56,"ldap":"lbruce","name":"Laurence Bruce","emailAddress":"lbruce@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":185,"ldap":"lpisani","name":"Laurence Pisani","emailAddress":"LPisani@scottlogic.com","office":"London","skills":[],"role":"Head of Testing","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":154,"ldap":"lcollingwood","name":"Laurie Collingwood","emailAddress":"LCollingwood@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":109,"ldap":"lwinkworth","name":"Leigh Winkworth","emailAddress":"LWinkworth@scottlogic.com","office":"Bristol","skills":[],"role":"Office Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":41,"ldap":"ltaylor","name":"Luke Taylor","emailAddress":"ltaylor@scottlogic.com","office":"Bristol","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":127,"ldap":"msutula","name":"Mantas Sutula","emailAddress":"MSutula@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":17,"ldap":"mdias","name":"Marcio Dias","emailAddress":"MDias@scottlogic.com","office":"London","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":168,"ldap":"mredgrave","name":"Marcus Redgrave-Close","emailAddress":"MRedgrave-Close@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":52,"ldap":"mmorrison","name":"Marilyn Morrison","emailAddress":"MMorrison@scottlogic.com","office":"Newcastle","skills":[],"role":"Human Resources Director","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":97,"ldap":"mjose","name":"Mark Jose","emailAddress":"MJose@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":116,"ldap":"mkerby","name":"Mark Kerby","emailAddress":"MKerby@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":101,"ldap":"mmcalister","name":"Mark McAlister","emailAddress":"MMcAlister@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":178,"ldap":"mgardner","name":"Martin Gardner","emailAddress":"MGardner@scottlogic.com","office":"Newcastle","skills":[],"role":"Business Development Support Executive","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":198,"ldap":"mgolding","name":"Martin Golding","emailAddress":"MGolding@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":157,"ldap":"msuperina","name":"Marzio Superina","emailAddress":"MSuperina@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":24,"ldap":"mrichards","name":"Matt Richards","emailAddress":"MRichards@scottlogic.com","office":"Newcastle","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":69,"ldap":"mdunsdon","name":"Matthew Dunsdon","emailAddress":"MDunsdon@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":207,"ldap":"mnicholson","name":"Matthew Nicholson","emailAddress":"MNicholson@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Resourcing Partner","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":203,"ldap":"mphillips","name":"Matthew Phillips","emailAddress":"MPhillips@scottlogic.com","office":"London","skills":[],"role":"Head of Delivery","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":180,"ldap":"mlong","name":"Melanie Long","emailAddress":"MLong@scottlogic.com","office":"Newcastle","skills":[],"role":"Finance Assistant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":181,"ldap":"mboyd","name":"Michael Boyd","emailAddress":"MBoyd@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":62,"ldap":"morchard","name":"Michael Orchard","emailAddress":"MOrchard@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":117,"ldap":"mwakefield","name":"Michelle Wakefield","emailAddress":"MWakefield@scottlogic.com","office":"Newcastle","skills":[],"role":"Office Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":13,"ldap":"mbrown","name":"Mike Brown","emailAddress":"MBrown@scottlogic.com","office":"Newcastle","skills":[],"role":"External Consultant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":35,"ldap":"msmith","name":"Mike Smith","emailAddress":"MSmith@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":122,"ldap":"mkirova","name":"Mila Kirova","emailAddress":"MKirova@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":211,"ldap":"mmathew","name":"Mili Mathew","emailAddress":"MMathew@scottlogic.com","office":"London","skills":[],"role":"Lead Test Consultant","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":10,"ldap":"mcrease","name":"Murray Crease","emailAddress":"MCrease@scottlogic.com","office":"Edinburgh","skills":[],"role":"Head of Development - Edinburgh","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":197,"ldap":"nmcpherson","name":"Natalie McPherson","emailAddress":"NMcPherson@scottlogic.com","office":"Edinburgh","skills":[],"role":"Office Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":34,"ldap":"nherald","name":"Neil Herald","emailAddress":"NHerald@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":11,"ldap":"nhemley","name":"Nicholas Hemley","emailAddress":"nhemley@scottlogic.com","office":"Bristol","skills":[],"role":"Head of Development - Bristol","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":70,"ldap":"nstavrakakis","name":"Nicholas Stavrakakis","emailAddress":"NStavrakakis@scottlogic.com","office":"Bristol","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":18,"ldap":"nwolverson","name":"Nicholas Wolverson","emailAddress":"NWolverson@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":138,"ldap":"nowen","name":"Nick Owen","emailAddress":"NOwen@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":161,"ldap":"nwilson","name":"Nigel Wilson","emailAddress":"NWilson@scottlogic.com","office":"London","skills":[],"role":"General Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":192,"ldap":"npappas","name":"Nikolaos Pappas","emailAddress":"NPappas@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":2,"interviewCountLongTerm":2,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":1},
                {"id":74,"ldap":"nmeissner","name":"Nils Meissner","emailAddress":"NMeissner@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":159,"ldap":"okenyon","name":"Oliver Kenyon","emailAddress":"OKenyon@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":45,"ldap":"parmstrong","name":"Patrick Armstrong","emailAddress":"PArmstrong@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":99,"ldap":"pbishop","name":"Patrick Bishop","emailAddress":"PBishop@scottlogic.com","office":"London","skills":[],"role":"Business Development Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":118,"ldap":"pallen","name":"Paul Allen","emailAddress":"PAllen@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":1,"ldap":"pedwin","name":"Paul Edwin","emailAddress":"PEdwin@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":183,"ldap":"phands","name":"Paul Hands","emailAddress":"PHands@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":58,"ldap":"pschofield","name":"Paul Schofield","emailAddress":"PSchofield@scottlogic.com","office":"Newcastle","skills":[],"role":"Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":212,"ldap":"pwilliams","name":"Paul Williams","emailAddress":"PWilliams@scottlogic.com","office":"London","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":175,"ldap":"pshek","name":"Paulin Shek","emailAddress":"PShek@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":48,"ldap":"pmchugh","name":"Peter McHugh","emailAddress":"PMcHugh@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":5,"ldap":"ppounder","name":"Phil Pounder","emailAddress":"PPounder@scottlogic.com","office":"Newcastle","skills":[],"role":"Operations Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":179,"ldap":"ppinkowski","name":"Phillip Pinkowski","emailAddress":"PPinkowski@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":106,"ldap":"rwood","name":"Rebecca Wood","emailAddress":"RWood@scottlogic.com","office":"Newcastle","skills":[],"role":"HR Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":194,"ldap":"rschuller","name":"Ricardo Schuller","emailAddress":"RSchuller@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":153,"ldap":"rbeckett","name":"Richard Beckett","emailAddress":"RBeckett@scottlogic.com","office":"Newcastle","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":28,"ldap":"rnewsome","name":"Rob Newsome","emailAddress":"RNewsome@scottlogic.com","office":"Newcastle","skills":[],"role":"Head of Development - Newcastle","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":33,"ldap":"rwilliams","name":"Robat Williams","emailAddress":"RWilliams@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":95,"ldap":"rbone","name":"Robert Bone","emailAddress":"RBone@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":210,"ldap":"rcasson","name":"Robert Casson","emailAddress":"RCasson@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":131,"ldap":"rmcneill","name":"Robert McNeill","emailAddress":"RMcNeill@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":38,"ldap":"rpilling","name":"Robert Pilling","emailAddress":"RPilling@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":144,"ldap":"rsherwood","name":"Robert Sherwood","emailAddress":"RSherwood@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":132,"ldap":"rhamilton","name":"Rosie Hamilton","emailAddress":"RHamilton@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":75,"ldap":"rhendry","name":"Ross Hendry","emailAddress":"RHendry@scottlogic.com","office":"Edinburgh","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":12,"ldap":"rmcmahon","name":"Ross McMahon","emailAddress":"RMcMahon@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":105,"ldap":"rmarcalo","name":"Rui Marcalo","emailAddress":"RMarcalo@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":39,"ldap":"rgrey","name":"Ryan Grey","emailAddress":"RGrey@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":102,"ldap":"shogarth","name":"Sam Hogarth","emailAddress":"SHogarth@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":26,"ldap":"sperridge","name":"Sam Perridge","emailAddress":"SPerridge@scottlogic.com","office":"Newcastle","skills":[],"role":"Head of Development – London","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":89,"ldap":"sburnstone","name":"Samuel Burnstone","emailAddress":"SBurnstone@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":60,"ldap":"sievins","name":"Samuel Ievins","emailAddress":"sievins@scottlogic.com","office":"Bristol","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":86,"ldap":"sbulut","name":"Seda Bulut Sagener","emailAddress":"SBulut@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":42,"ldap":"smhall","name":"Simon Hall","emailAddress":"simonhall@scottlogic.com","office":"Bristol","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":3,"ldap":"skey","name":"Simon Key","emailAddress":"SKey@scottlogic.com","office":"Newcastle","skills":[],"role":"Systems Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":135,"ldap":"sladen","name":"Simon Laden","emailAddress":"SLaden@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":160,"ldap":"smartin","name":"Simon Martin","emailAddress":"SMartin@scottlogic.com","office":"Newcastle","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":77,"ldap":"swalder","name":"Simon Walder","emailAddress":"SWalder@scottlogic.com","office":"Newcastle","skills":[],"role":"Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":21,"ldap":"swatson","name":"Simon Watson","emailAddress":"SWatson@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":217,"ldap":"sbaker","name":"Sioned Baker","emailAddress":"SBaker@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":190,"ldap":"sdrake","name":"Sophie Drake","emailAddress":"SDrake@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":27,"ldap":"srutherford","name":"Stephen Rutherford","emailAddress":"SRutherford@scottlogic.com","office":"Edinburgh","skills":[],"role":"Client Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":167,"ldap":"stozer","name":"Stephen Tozer","emailAddress":"STozer@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":15,"ldap":"sblair","name":"Steve Blair","emailAddress":"SBlair@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":82,"ldap":"shillcox","name":"Steven Hillcox","emailAddress":"SHillcox@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":206,"ldap":"shunton","name":"Steven Hunton","emailAddress":"SHunton@scottlogic.com","office":"Newcastle","skills":[],"role":"Technical Project Manager","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":126,"ldap":"sjob","name":"Steven Job","emailAddress":"SJob@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":53,"ldap":"ssavery","name":"Steven Savery","emailAddress":"SSavery@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":23,"ldap":"sshiells","name":"Steven Shiells","emailAddress":"SShiells@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":66,"ldap":"sfrost","name":"Stuart Frost","emailAddress":"SFrost@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":22,"ldap":"sgrey","name":"Stuart Grey","emailAddress":"SGrey@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":19,"ldap":"sgundry","name":"Stuart Gundry","emailAddress":"SGundry@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":158,"ldap":"sroebuck","name":"Stuart Roebuck","emailAddress":"SRoebuck@scottlogic.com","office":"Edinburgh","skills":[],"role":"Technical Architect","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":164,"ldap":"suthomson","name":"Susan Thomson","emailAddress":"SThomson@scottlogic.com","office":"Bristol","skills":[],"role":"Graduate Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":111,"ldap":"tmakarem","name":"Tamara Chehayeb Makarem","emailAddress":"TChehayebMakarem@scottlogic.com","office":"London","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":119,"ldap":"thull","name":"Thomas Hull","emailAddress":"THull@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":49,"ldap":"tkelly","name":"Thomas Kelly","emailAddress":"tkelly@scottlogic.com","office":"Bristol","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":73,"ldap":"tsimmons","name":"Thomas Simmons","emailAddress":"TSimmons@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":146,"ldap":"tmartins","name":"Tiago Martins","emailAddress":"TMartins@scottlogic.com","office":"Edinburgh","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":108,"ldap":"vfoti","name":"Viktoria Foti","emailAddress":"VFoti@scottlogic.com","office":"Edinburgh","skills":[],"role":"Office Administrator","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":133,"ldap":"wferguson","name":"William Ferguson","emailAddress":"WFerguson@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":90,"ldap":"wloveland","name":"William Loveland","emailAddress":"WLoveland@scottlogic.com","office":"Edinburgh","skills":[],"role":"UX Designer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":51,"ldap":"wreilly","name":"William Reilly","emailAddress":"WReilly@scottlogic.com","office":"Edinburgh","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":148,"ldap":"wsmith","name":"William Smith","emailAddress":"WSmith@scottlogic.com","office":"Newcastle","skills":[],"role":"Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":182,"ldap":"wtrimble","name":"Wullie Trimble","emailAddress":"WTrimble@scottlogic.com","office":"Newcastle","skills":[],"role":"Lead Test Engineer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0},
                {"id":209,"ldap":"zwali","name":"Zinat Wali","emailAddress":"ZWali@scottlogic.com","office":"London","skills":[],"role":"Senior Developer","interviewCountShortTerm":0,"interviewCountLongTerm":0,"notes":[],"isActiveScreener":true,"assignedCVScreensCount":0}
            ],"interviewsWithConfirmedInterviewers":[],
            "interviewTypes":[
                {"name":"Undefined","id":1,"canDelete":false},{"name":"Slick rap battle","id":10,"canDelete":false},{"name":"single combat","id":11,"canDelete":false},{"name":"noughts and crosses","id":12,"canDelete":false}
            ],"scheduleSpan":{"startSlot":16,"slotCount":20}};

            const request = new Request("services/calendar/new", {
                method: "GET",
                credentials: "include"
            });
            return fetch(request).then(response => {
                console.log(response);
                return {json: () => mockCalendarNewApps};
            });

    }
    static getCalendarNewAvailability(){
        const mockAvailability = {
            "interviewerAvailability":[
                {"id":213,"availability":[{"start":1497855600000},{"start":1497857400000},{"start":1497859200000},{"start":1497862800000},{"start":1497864600000},{"start":1497866400000},{"start":1497868200000},{"start":1497870000000},{"start":1497871800000},{"start":1497873600000},{"start":1497875400000},
                    {"start":1497877200000},{"start":1497879000000},{"start":1497880800000},{"start":1497882600000},{"start":1497884400000},{"start":1497886200000},{"start":1497888000000},{"start":1497889800000}]},
                {"id":200,"availability":[{"start":1497855600000},{"start":1497857400000},{"start":1497859200000},{"start":1497866400000},{"start":1497868200000},{"start":1497870000000},{"start":1497871800000},{"start":1497873600000},{"start":1497875400000},{"start":1497877200000},{"start":1497879000000},
                    {"start":1497880800000},{"start":1497882600000},{"start":1497884400000},{"start":1497886200000},{"start":1497888000000},{"start":1497889800000}]},
                {"id":100,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":20,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":165,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":177,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":193,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":199,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":83,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":40,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":156,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":151,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":166,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":107,"availability":[]},
                {"id":149,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":110,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":61,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":152,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":120,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":109,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":41,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":69,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":11,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":70,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":192,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":118,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":175,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":194,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":60,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":42,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":190,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":167,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":82,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":164,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":119,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                    {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                {"id":49,"availability":[]}],
                "meetingRoomAvailability":[
                    {"id":1,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                        {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                    {"id":2,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                        {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]}
                ],
                "conferenceLineAvailability":[
                    {"id":1,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                        {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}]},
                    {"id":2,"availability":[{"start":1497682800000},{"start":1497684600000},{"start":1497686400000},{"start":1497688200000},{"start":1497690000000},{"start":1497691800000},{"start":1497693600000},{"start":1497695400000},{"start":1497697200000},{"start":1497699000000},{"start":1497700800000},
                        {"start":1497702600000},{"start":1497704400000},{"start":1497706200000},{"start":1497708000000},{"start":1497709800000},{"start":1497711600000},{"start":1497713400000},{"start":1497715200000},{"start":1497717000000}
            ]}]};
            const request = new Request(
                "services/calendar/new_availability?interviewers=213%2C200%2C100%2C20%2C165%2C177%2C193%2C199%2C83%2C40%2C156%2C151%2C166%2C107%2C149%2C110%2C61%2C152%2C120%2C109%2C41%2C69%2C11%2C70%2C192%2C118%2C175%2C194%2C60%2C42%2C190%2C167%2C82%2C164%2C119%2C49&meetingRooms=1%2C2&conferenceLines=1%2C2&date=Sat%2017%2F06%2F2017&start=08%3A00&duration=10h",
                {
                    method: "GET",
                    credentials: "include"
                });
            return fetch(request).then(response => {
                console.log(response);
                return {json: () => mockAvailability};
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
    static getCreateApplicationForm(){
        const responseJSON = {
            "applicationToEdit":null,"offices":[
                {"description":"Not specified","id":1},{"description":"Bristol","id":2},
                {"description":"Newcastle","id":3},{"description":"London","id":4},
                {"description":"Edinburgh","id":5}],"sources":[
                    {"id":1,"description":"Direct application","enabled":true},
                    {"id":5,"description":"Evolution","enabled":true},
                    {"id":11,"description":"Evolution","enabled":true},
                    {"id":3,"description":"i4 Recruitment","enabled":true},
                    {"id":9,"description":"i4 Recruitment","enabled":true},
                    {"id":6,"description":"Nixor","enabled":true},{"id":12,"description":"Nixor","enabled":true},
                    {"id":4,"description":"Quantum People","enabled":true},{"id":10,"description":"Quantum People","enabled":true},
                    {"id":2,"description":"Referral","enabled":true},{"id":8,"description":"Referral","enabled":true},
                    {"id":7,"description":"SEC Recruitment","enabled":true},
                    {"id":13,"description":"SEC Recruitment","enabled":true}],
                    "eligibilities":[
                        {"description":"Yes (UK/EU Citizen)","id":1},{"description":"Yes (Work Visa)","id":2}
                    ],"jobTitleGroups":[
                        {"id":3008,"description":"Administration","jobTitles":[
                            {"id":34,"description":"Office Admin Manager"},
                            {"id":35,"description":"Administrator"}
                        ]},{"id":3010,"description":"Application Support","jobTitles":[
                            {"id":40,"description":"Head of Support"},
                            {"id":41,"description":"Lead Application Support Consultant"},
                            {"id":42,"description":"Senior Application Support Consultant"},
                            {"id":43,"description":"Application Support Consultant"},
                            {"id":44,"description":"Graduate Application Support Consultant"}
                        ]},{"id":3004,"description":"Commercial Marketing","jobTitles":[
                            {"id":17,"description":"Head of Marketing"},{"id":18,"description":"Web Developer"},
                            {"id":19,"description":"Marketing Campaigns Manager"},{"id":20,"description":"Marketing Executive"},
                            {"id":21,"description":"Marketing Intern"}
                        ]},{"id":3003,"description":"Delivery","jobTitles":[
                            {"id":15,"description":"Client Manager"},{"id":16,"description":"Technical Project Manager"}
                        ]},{"id":3000,"description":"Development","jobTitles":[
                            {"id":1,"description":"Principal Consultant"},{"id":2,"description":"Technical Architect"},
                            {"id":3,"description":"Lead Developer"},{"id":4,"description":"Senior Developer"},
                            {"id":5,"description":"Developer"},{"id":6,"description":"Graduate Developer"},{"id":7,"description":"Intern"}
                        ]},{"id":3006,"description":"Finance","jobTitles":[
                            {"id":24,"description":"Finance Officer"},
                            {"id":25,"description":"Head of Internal Systems"},
                            {"id":26,"description":"System Administrator"}
                        ]},{"id":3009,"description":"HR","jobTitles":[
                            {"id":36,"description":"Recruitment Manager"},
                            {"id":37,"description":"HRBP"},
                            {"id":38,"description":"Recruitment Officer"},
                            {"id":39,"description":"Recruitment Admin"}
                        ]},{"id":3007,"description":"Products","jobTitles":[
                            {"id":27,"description":"Lead Developer"},{"id":28,"description":"Senior Developer"},
                            {"id":29,"description":"Developer"},{"id":30,"description":"Graduate Developer"},
                            {"id":31,"description":"Product Engineer"},{"id":32,"description":"Technical Evangelist"},
                            {"id":33,"description":"Product Sales Consultant"}
                        ]},{"id":3005,"description":"Sales","jobTitles":[
                            {"id":22,"description":"Business Development Manager"},
                            {"id":23,"description":"Sales Executive"}
                        ]},{"id":3011,"description":"Senior Management","jobTitles":[
                            {"id":45,"description":"Head of Development"},{"id":46,"description":"Commercial Director"},
                            {"id":47,"description":"Delivery Director"},{"id":48,"description":"Technical Director"},
                            {"id":49,"description":"HR Director"},{"id":50,"description":"Head of UX"},
                            {"id":51,"description":"Sales Director"},{"id":52,"description":"Finance Director"}
                        ]},{"id":3012,"description":"Solution Architecture","jobTitles":[
                            {"id":53,"description":"Technical Architect"}
                        ]},{"id":3001,"description":"Test Practice","jobTitles":[
                            {"id":8,"description":"Lead Test Engineer"},{"id":9,"description":"Senior Test Engineer"},
                            {"id":10,"description":"Test Engineer"},{"id":11,"description":"Graduate Test Engineer"}
                        ]},{"id":2000,"description":"Unassigned","jobTitles":[]},
                        {"id":3002,"description":"UX Practice","jobTitles":[
                            {"id":12,"description":"Senior UX Designer"},{"id":13,"description":"UX Designer"},
                            {"id":14,"description":"Graduate UX Designer"}
                        ]}
                    ],
                    "socialMediaLinkTypes":[]
                };
        const request = new Request("services/application/notCompleted", {
                        method: "GET",
                        credentials: "include"
        });
        return fetch(request).then(response => {
                        console.log(response);
                        return {json: () => responseJSON};
        });

    }
    static getNotCompletedApplicationDetail(id) {
        const application = {
            "candidate":{
                "first":"Nikolos","last":"Nikolaou","email":"nikolonikolaou@norealmail.com","phoneNumber":"09999999999","address":"00 Zero St","postcode":"BS1111"},
                "id":5,"jobTitleAsAdvertised":"Graduate Developer","office":{"description":"Bristol","id":2},"eligibility":{"description":"Yes (UK/EU Citizen)","id":1},
                "visaType":null,"visaExpiryDate":null,"applicationDate":"Sat 06/05/2017","applicationDuration":30,"stage":"New application","conclusion":null,"conclusionComments":null,
                "source":{"id":1,"description":"Direct application","enabled":true},"referralSource":"nikos","currentSalary":"1214124","salaryExpectation":"142342342",
                "interviews":[],"documents":[{"name":"Emergency_Plan_25_King_Street.docx","id":5}],"feedbackDocuments":[],"duplicates":[{"id":3,"name":"dikemou tikaneis","firstName":"dikemou","lastName":"tikaneis","email":"ADSDOI@sdnas.com",
                "jobTitle":"Graduate Developer","jobTitleInternal":"Graduate Developer","jobGroup":"Development","conclusion":null,"office":{"description":"Newcastle","id":3},"duration":33,
                "stage":"New application","filterStage":"New application","source":"Direct application","numberOfInterviews":0,"date":"Wed 03/05/2017 00:00","preferredInterviewType":null,"referralSource":"nikos",
                "reasonableAdjustments":"Yes","reasonableAdjustmentsDetails":"YES MORE","actionRequests":[]}],"notes":[],
                "appStatusPermissions":{
                    "allowedToInitialSift":true,"allowedToCvSift":false,
                    "allowedToProgressApp":false,"allowedToScheduleInterview":false,
                    "allowedToWithdrawApp":true,"allowedToRejectApp":false,
                    "allowedToMakeOffer":false,"allowedToEnterCandidateDecision":false,
                    "allowedToReopenApp":false
                }, "jobTitleGroups":[
                    {"id":3008,"description":"Administration","jobTitles":[{"id":34,"description":"Office Admin Manager"},{"id":35,"description":"Administrator"}]},
                    {"id":3010,"description":"Application Support","jobTitles":[{"id":40,"description":"Head of Support"},{"id":41,"description":"Lead Application Support Consultant"},{"id":42,"description":"Senior Application Support Consultant"},{"id":43,"description":"Application Support Consultant"},{"id":44,"description":"Graduate Application Support Consultant"}]},
                    {"id":3004,"description":"Commercial Marketing","jobTitles":[{"id":17,"description":"Head of Marketing"},{"id":18,"description":"Web Developer"},{"id":19,"description":"Marketing Campaigns Manager"},{"id":20,"description":"Marketing Executive"},{"id":21,"description":"Marketing Intern"}]},
                    {"id":3003,"description":"Delivery","jobTitles":[{"id":15,"description":"Client Manager"},{"id":16,"description":"Technical Project Manager"}]},
                    {"id":3000,"description":"Development","jobTitles":[{"id":1,"description":"Principal Consultant"},{"id":2,"description":"Technical Architect"},{"id":3,"description":"Lead Developer"},{"id":4,"description":"Senior Developer"},{"id":5,"description":"Developer"},{"id":6,"description":"Graduate Developer"},{"id":7,"description":"Intern"}]},
                    {"id":3006,"description":"Finance","jobTitles":[{"id":24,"description":"Finance Officer"},{"id":25,"description":"Head of Internal Systems"},{"id":26,"description":"System Administrator"}]},
                    {"id":3009,"description":"HR","jobTitles":[{"id":36,"description":"Recruitment Manager"},{"id":37,"description":"HRBP"},{"id":38,"description":"Recruitment Officer"},{"id":39,"description":"Recruitment Admin"}]},
                    {"id":3007,"description":"Products","jobTitles":[{"id":27,"description":"Lead Developer"},{"id":28,"description":"Senior Developer"},{"id":29,"description":"Developer"},{"id":30,"description":"Graduate Developer"},{"id":31,"description":"Product Engineer"},{"id":32,"description":"Technical Evangelist"},{"id":33,"description":"Product Sales Consultant"}]},
                    {"id":3005,"description":"Sales","jobTitles":[{"id":22,"description":"Business Development Manager"},{"id":23,"description":"Sales Executive"}]},
                    {"id":3011,"description":"Senior Management","jobTitles":[{"id":45,"description":"Head of Development"},{"id":46,"description":"Commercial Director"},{"id":47,"description":"Delivery Director"},{"id":48,"description":"Technical Director"},{"id":49,"description":"HR Director"},{"id":50,"description":"Head of UX"},{"id":51,"description":"Sales Director"},{"id":52,"description":"Finance Director"}]},
                    {"id":3012,"description":"Solution Architecture","jobTitles":[{"id":53,"description":"Technical Architect"}]},
                    {"id":3001,"description":"Test Practice","jobTitles":[{"id":8,"description":"Lead Test Engineer"},{"id":9,"description":"Senior Test Engineer"},{"id":10,"description":"Test Engineer"},{"id":11,"description":"Graduate Test Engineer"}]},
                    {"id":3002,"description":"UX Practice","jobTitles":[{"id":12,"description":"Senior UX Designer"},{"id":13,"description":"UX Designer"},{"id":14,"description":"Graduate UX Designer"}]}],"jobTitleGroup":
                    {"id":3003,"description":"Delivery","jobTitles":null},"jobTitle":{"id":16,"description":"Technical Project Manager"},
                    "hired":false,"allowedToAddOrEditScoresForOthers":true,"allowedToAddScoresToMyInterviews":false,"allowedToViewSensitiveApplicationDetails":true,"allowedToViewApplicationHistory":true,
                    "applicationHistory":[{"dateTimeString":"Mon 05/06/2017 09:08","user":"hruser","action":"Created application","stage":"New application"}],"socialMediaLinks":[],"actionRequests":[],"reasonableAdjustments":true,"reasonableAdjustmentsDetails":"12432942u3"
                };

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
