import React from 'react';
import styled from 'styled-components';

import * as actions from '../actions';

import Button from 'components/Button';

import ActionFormWrapper from '../commonStyleComponents/ActionFormWrapper';
import ButtonDiv from '../commonStyleComponents/ButtonDiv';

// This is the actiion request view/edit,
//  for NewActionRequestView see NewActionRequestForm
export default class ActionRequestView extends React.Component{
    render(){
        return (
            <ActionFormWrapper>
                <h2>{this.props.actionRequest.subject} assigned to {this.props.actionRequest.entries[0].target.target}</h2>
                {/* TODO put text and edit forms */}
                <ButtonDiv>
                    {/* Button save does nothing at the moment */}
                    <Button onClick={this.sendNewActionRequest} value="Save" />
                    <Button onClick={this.props.closeModal} value="Cancel" />
                </ButtonDiv>
            </ActionFormWrapper>
        );

    }
}
