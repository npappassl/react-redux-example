import React from 'react';
import styled from 'styled-components';

import types from 'actions/types';

import NewActionRequestForm from './views/NewActionRequestForm';
import ActionRequestView from './views/ActionRequestView';
import ShowHistoryView from './views/ShowHistoryView';
import WithdrawCandidate from './views/WithdrawCandidate';
import PassInitialSiftView from './views/PassInitialSiftView';
import Modal from './commonStyleComponents/Modal';

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
                        applicationId={this.props.applicationDetail.id} actionTargets={show.actionTargets}
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
        } else if (!!show.withdrawCandidate) {
            return (
                <Modal>
                    <WithdrawCandidate
                        dispatch={dispatch} closeModal={this.closeModal}
                        action={show.withdrawCandidate}
                     />
                </Modal>
            );
        } else if(!!show.initialSift){
            return (
                <Modal>
                    <PassInitialSiftView dispatch={dispatch} closeModal={this.closeModal}
                        jobTitleGroups={this.props.applicationDetail.jobTitleGroups} show={show}
                        action={show.initialSift} applicationId={this.props.applicationDetail.id}/>
                </Modal>
            )
        } else {
            return (<div></div>)
        }
    }
}
