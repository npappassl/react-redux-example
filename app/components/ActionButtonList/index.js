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
    'allowedToProgressApp': {name:"Progress Application", url:""},
    'allowedToRejectApp': {name:"Reject Candidate", url:""},
    'allowedToReopenApp': {name:"Reopen Application", url:""},
    'allowedToScheduleInterview': {name:"Schedule Interview", url:""},
    'allowedToWithdrawApp': {name:"Withdraw Candidate", url:""}
}
export default class ActionButtonList extends React.Component{
    render(){
        return(
            <Ul>
                {Object.keys(this.props.buttonListPermissions).map((key,index)=>{
                    if(this.props.buttonListPermissions[key]===true){
                        return (<Li key={key} ><Button value={mapPermissionsActions[key].name}/></Li>)
                    }
                })}
            </Ul>
        )
    }
}
