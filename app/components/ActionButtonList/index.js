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
    'allowedToCvSift': "Pass CV Sift",
    'allowedToEnterCandidateDecision': "Enter Candidate Decision",
    'allowedToInitialSift': "Pass Initial Sift",
    'allowedToMakeOffer': "Make Offer",
    'allowedToProgressApp': "Progress Application",
    'allowedToRejectApp': "Reject Candidate",
    'allowedToReopenApp': "Reopen Application",
    'allowedToScheduleInterview': "Schedule Interview",
    'allowedToWithdrawApp': "Withdraw Candidate"
}
export default class ActionButtonList extends React.Component{
    render(){
        return(
            <Ul>
                {Object.keys(this.props.buttonListPermissions).map((key,index)=>{
                    if(this.props.buttonListPermissions[key]===true){
                        return (<Li><Button value={mapPermissionsActions[key]}/></Li>)
                    }
                })}
            </Ul>
        )
    }
}
