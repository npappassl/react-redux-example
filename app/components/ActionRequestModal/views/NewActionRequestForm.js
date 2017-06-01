import React from 'react';
import styled from 'styled-components';

import * as actions from '../actions';

import Button from 'components/Button';

import ActionFormWrapper from '../commonStyleComponents/ActionFormWrapper';
import ButtonDiv from '../commonStyleComponents/ButtonDiv';


const Input = styled.input`
    box-shadow: 0 0 1px 1px #333;
`;
const Textarea = styled.textarea`
    box-shadow: 0 0 1px 1px #333;
`;
const Select = styled.select`
    box-shadow: 0 0 1px 1px #333;
`;

export default class NewActionRequestForm extends React.Component{
    constructor(props){
        super(props);
        this.sendNewActionRequest = this.sendNewActionRequest.bind(this);
    }
    componentWillMount(){
        actions.sendTargetsRequest()(this.props.dispatch);
    }
    sendNewActionRequest(event){
        event.preventDefault();
        const tableRows = event.target.parentElement.parentElement.children[0].children[0].children;
        const inputs = [];
        for (let row of tableRows){
            inputs.push(row.children[1].children[0]);
        }
        const form = document.getElementById("newActionRequestForm");
        const actionTargetSelect = document.getElementById("actionTargetSelect");
        const body  = document.getElementById("actionRequestBody")
        let targetObj;
        this.props.actionTargets.map((target) =>{
            console.log(target.id , inputs[1].value);
            if((target.id+"") === inputs[1].value){
                targetObj = target;
            }
        });
        let requestPayload = {
            entries: [
                {
                    id: "-1",
                    comment: inputs[2].value+"",
                    target: targetObj,
                }
            ],
            id: "-1",
            subject: inputs[0].value,
            applicationId: this.props.applicationId,
            status: "NEW",
        }
        this.props.closeModal();
        const request = new Request("services/actionRequest/actionRequest",{
            method: "POST",
            credentials: "include",
            body: JSON.stringify(requestPayload),
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            }
        });
        return fetch(request).then((reaposne) =>{
            console.log(response);
        }).catch((error)=>{});
    }
    renderSelectActionTartget(){
        if(this.props.actionTargets){
            return (
                <Select id="actionTargetSelect">
                    {this.props.actionTargets.map((target) => {
                        return (<option value={target.id}>{target.target}</option>);
                    })}
                </Select>
            );
        } else {
            return (<span>Loading...</span>);
        }
    }
    render(){
        return (
            <ActionFormWrapper>
                <h3>Add New Request</h3>
                <form id="newActionRequestForm" onSubmit={this.sendNewActionRequest}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                    <h3>Request Title</h3>
                                </th>
                                <td>
                                    <Input name="requestTitle"></Input>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h3>Assign To</h3>
                                </th>
                                <td>
                                    {this.renderSelectActionTartget()}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <h3>Body</h3>
                                </th>
                                <td>
                                    <Textarea id="actionRequestBody" rows="4" cols="60"></Textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <ButtonDiv>
                        <Button onClick={this.sendNewActionRequest} value="Save" />
                        <Button onClick={this.props.closeModal} value="Cancel" />
                    </ButtonDiv>
                </form>
            </ActionFormWrapper>
        );
    }
}
