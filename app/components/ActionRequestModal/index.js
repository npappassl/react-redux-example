import React from 'react';
import styled from 'styled-components';

import types from 'actions/types';

import NewActionRequestForm from './views/NewActionRequestForm';
import ActionRequestView from './views/ActionRequestView';
import ShowHistoryView from './views/ShowHistoryView';

const Modal = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    margin:0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.2);
    z-index: 2;
`;
export default class ActionRequestModal extends React.Component{
    constructor(props){
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }
    closeModal(){
        this.props.dispatch({
            type: types.CLOSE_MODAL
        });
    }
    render(){
        const {show, dispatch} = this.props;
        if(show.newRequest===true){
            return (
                <Modal>
                    <NewActionRequestForm
                        applicationId={this.props.applicationId} actionTargets={show.actionTargets}
                        dispatch={dispatch} closeModal={this.closeModal} />
                </Modal>
            );
        } else if (!!show.actionRequest) {
            return (
                <Modal>
                    <ActionRequestView
                        dispatch={dispatch} closeModal={this.closeModal}
                        actionRequest={show.actionRequest} />
                </Modal>
            );
        } else if (!!show.showHistory) {
            return (
                <Modal>
                    <ShowHistoryView
                        dispatch={dispatch} closeModal={this.closeModal}
                        application={show.showHistory} />
                </Modal>
            );
        } else {
            return (<div></div>)
        }
    }
}
