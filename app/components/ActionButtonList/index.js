import React from 'react';

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
    'allowedToCvSift': {name: "Pass CV Screen", url:""},
    'allowedToEnterCandidateDecision': {name:"Enter Candidate Decision", url:""},
    'allowedToInitialSift': {name: "Pass Initial Sift", url: "applications/appInitialSift" },
    'allowedToMakeOffer': {name:"Make Offer", url:""},
    'allowedToProgressApp': {name:"Progress Application", url:"application/status/appProgression"},
    'allowedToRejectApp': {name:"Reject Candidate", url:""},
    'allowedToReopenApp': {name:"Reopen Application", url:""},
    'allowedToScheduleInterview': {name:"Schedule Interview", url:""},
    'allowedToWithdrawApp': {name:"Withdraw Candidate", url:""}
}
export default class ActionButtonList extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        const request = new Request(mapPermissionsActions[event.target.id].url,{
            method: "POST",
            credentials: "include"
        })
        fetch(request).then((response) => {
            console.log(response);
        }).catch((err)=>{ });
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
