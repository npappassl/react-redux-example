import React from 'react';
import styled from 'styled-components';

import types from 'actions/types';

const Ul = styled.ul`
    list-style: none;
`;
const Li = styled.li`
    height: 40px;
    color: #0088cc;
    &:hover{
        color: #005580;
        text-decoration: underline;
    }
`;
export default class ActionRequests extends React.Component{
    constructor(props){
        super(props);
        this.openActionRequestModal = this.openActionRequestModal.bind(this);
    }
    openActionRequestModal(event){
        console.log(event.target);
        const payload = this.props.requests.filter((req) => {
            console.log(req.id,event.target.id);
            return (req.id+"") === event.target.id;
        })[0];
        this.props.dispatch({
            type: types.OPEN_MODAL_ACTION_REQUEST,
            payload: payload
        });
        debugger;
    }
    render(){
        if(this.props.requests){
            return(
                <Ul>
                    { this.props.requests.map((request) => {
                        return (
                            <Li
                                onClick={this.openActionRequestModal}
                                key={request.id} id={request.id}>{request.subject}</Li>
                        );
                    })}
                </Ul>
            );
        } else {
            return (<li key="-1"></li>)
        }
    }
}
