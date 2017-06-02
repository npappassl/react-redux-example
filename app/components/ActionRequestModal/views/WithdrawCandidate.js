import React from 'react';
import styled from 'styled-components';

import * as actions from '../actions';

import Button from 'components/Button';

import ActionFormWrapper from '../commonStyleComponents/ActionFormWrapper';
import ButtonDiv from '../commonStyleComponents/ButtonDiv';

const Textarea = styled.textarea`
    display: block;
    box-shadow: 2px 2px 10px 3px grey;
    margin: 1em auto;
`;

export default class ActionRequestView extends React.Component{
    constructor(props){
        super(props);
        this.handleRequest = this.handleRequest.bind(this);
    }
    handleRequest(){
        const {action, closeModal} = this.props;
        action.handler(action.baseUrl,closeModal,{applicationId:2,conclusionComments:"sdasdas"});
    }
    render(){
        return (
            <ActionFormWrapper>
                <h2>Withdraw Candidate</h2>
                <span><b>
                    Please confirm that the candidate has withdrawn from the application process.
                </b></span>
                <span>(Required)</span>
                <Textarea rows="10" cols="70" />
                {/* TODO put text and edit forms */}
                <ButtonDiv>
                    <Button onClick={this.handleRequest} value="Confirm" />
                    <Button onClick={this.props.closeModal} value="Cancel" />
                </ButtonDiv>
            </ActionFormWrapper>
        );

    }
}
