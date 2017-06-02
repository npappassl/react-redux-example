import React from 'react';

import types from 'actions/types';

import styled from 'styled-components';
import Button from 'components/Button/index';

const Ul = styled.ul`
    list-style: none;
    text-transform: uppercase;
`;
const Li = styled.li`
    display: inline-block;
    margin-right: 1em;
`;
const mapPermissionsActions = {
    'allowedToCvSift': {name: "Pass CV Screen", modalType:types.OPEN_MODAL_P_CV_SIFT, url:"services/application/status/appCvSift"},
    'allowedToEnterCandidateDecision': {name:"Enter Candidate Decision", modalType:types.OPEN_MODAL_CANDIDATE_DECISION, url:"services/application/status/appCandidateDecision"},
    'allowedToInitialSift': {name: "Pass Initial Sift", modalType:types.OPEN_MODAL_P_INITIAL_SIFT, url: "services/application/status/appInitialSift" },
    'allowedToMakeOffer': {name:"Make Offer", modalType:types.OPEN_MODAL_MAKE_OFFER, url:"services/application/status/appMakeOffer"},
    'allowedToProgressApp': {name:"Progress Application", modalType:types.OPEN_MODAL_PROGRESS_APP, url:"services/application/status/appProgression"},
    'allowedToRejectApp': {name:"Close", modalType:types.OPEN_MODAL_REJECT_APP, url:"services/application/status/appReject"},
    'allowedToReopenApp': {name:"Reopen Application", modalType:types.OPEN_MODAL_REOPEN_APP, url:"services/application/status/appReopen"},
    'allowedToScheduleInterview': {name:"Schedule Interview", modalType:types.OPEN_MODAL_SCHEDULE_INTERVIEW, url:"services/calendar/new"},
    'allowedToWithdrawApp': {name:"Withdraw Candidate", modalType:types.OPEN_MODAL_WITHDRAW_CANDIDATE, url:"services/application/status/appWithdraw"}
}
export default class ActionButtonList extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
    }
    openModal(type){
        console.log(mapPermissionsActions[type]);
        this.props.dispatch({
            type: mapPermissionsActions[type].modalType,
            payload: {
                handler:this.handleRequest,
                baseUrl : mapPermissionsActions[type].url
            }
        });
    }
    handleClick(event){
        this.openModal(event.target.id);
    }
    handleRequest(url,callback,body){
        const request = new Request(url,{
            method: "POST",
            credentials: "include",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body||{})
        });
        fetch(request).then((response) => {
            console.log(response);
        }).catch((err)=>{ });
        if(callback){
            return callback();
        }
    }
    render(){
        return(
            <Ul>
                {Object.keys(this.props.buttonListPermissions).map((key,index)=>{
                    if(this.props.buttonListPermissions[key]===true){
                        return (
                            <Li key={key} >
                                <Button id={key}
                                    onClick={this.handleClick}
                                    value={mapPermissionsActions[key].name} />
                            </Li>
                        )
                    }
                })}
            </Ul>
        )
    }
}
