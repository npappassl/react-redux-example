import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as applicationActions  from './actions/index';
import types from 'actions/types';
import ActionButtonList from 'components/ActionButtonList';
import Button from 'components/Button';
import ActionRequests from 'components/ActionRequests';
import ActionRequestModal from 'components/ActionRequestModal';
import ApplicationDetailsTable from "./ApplicationDetailsTable";
import ConfidentialFieldsTable from "./ConfidentialFieldsTable";
import AppDetailButtonList from "./AppDetailButtonList";
import NotesWidget from './NotesWidget';
import document_icon from "./images/document_icon.svg";

const WraperDiv = styled.div`
    display: flex;
`;
const LeftFlex = styled.div`
    flex-grow: 3;
    overflow-y: scroll;
    height: 90vh;
`;
const ResultCountSpan = styled.span`
    margin-left: 1em;
    font-weight: 400;
`;
const CreateApplicationA = styled.a`
    float: right;
    display: inline-block;
    line-height: 2em;

    span{
        font-weight: 900;
        font-size: 2em;
        vertical-align: middle;
    }
`;
const AppDetailList = styled.div`
    flex-grow: 1;
`;
const H1 = styled.h1`
    font-size: 35pt;
    text-transform: uppercase;
    font-weight: 500;

`;
const H2 = styled.h2`
    font-size: 25pt;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 0;
`;
const H4 = styled.h4`
    font-size: 20pt;
    color: #222;
    margin-top: 15px;
    font-weight: 200;
`;
const Img = styled.img`
    height: 40px;
    display:block;
    margin: 0 auto;
`;
const DocIconUl = styled.ul`
    list-style: none;
`;
const DocIconLi = styled.li`
    text-align: center;
    width: 100px;
`;
class ApplicationDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        this.showActionRequestForm = this.showActionRequestForm.bind(this);
    }
    componentWillMount(){
        const self = this;
        self.props.actions.sendApplicationDetailRequest(self.props.routeParams.id);
    }
    showActionRequestForm(){
        this.props.dispatch({
            type: types.OPEN_MODAL_NEW_REQUEST,
        });
    }
    render() {
        const {applicationDetail, dispatch} = this.props;
        if(this.props.applicationDetail){
            return (
                <WraperDiv>
                    <LeftFlex>
                        <AppDetailButtonList dispatch={dispatch} application={applicationDetail}/>
                        <H1>
                            {applicationDetail.candidate.first + " " + this.props.applicationDetail.candidate.last}
                        </H1>
                        <H2>
                            {applicationDetail.office.description + ", " + applicationDetail.jobTitle.description + "("+ applicationDetail.jobTitleGroup.description +")"}
                        </H2>
                        <H4>
                            {applicationDetail.stage}
                        </H4>
                        <DocIconUl>
                            {applicationDetail.documents.map((doc) => {
                                return (
                                    <DocIconLi key={doc.id}>
                                        <Img src={document_icon} />
                                        <span>{doc.name}</span>
                                    </DocIconLi>
                                );
                            })}
                        </DocIconUl>
                        <section>
                            <h2>Action Requests</h2>
                            <hr/>
                            <ActionRequests dispatch={this.props.dispatch} requests={applicationDetail.actionRequests}/>
                            <Button value="New Request"
                                onClick={this.showActionRequestForm} />
                        </section>
                        <section>
                            <h2>Interviews</h2>
                            <hr/>
                        </section>
                        <section>
                            <ActionButtonList
                                buttonListPermissions={applicationDetail.appStatusPermissions}
                                dispatch={dispatch} />
                        </section>
                    </LeftFlex>
                    <AppDetailList>
                        <ApplicationDetailsTable item={applicationDetail} />
                        <ConfidentialFieldsTable item={applicationDetail} />
                        <hr/>
                        <NotesWidget notes={applicationDetail.notes}/>
                    </AppDetailList>
                    {/*  see how one writes dynamic text input updating state*/}
                    <ActionRequestModal dispatch={this.props.dispatch} show={this.props.modal} applicationId={applicationDetail.id}/>
                </WraperDiv>
            )
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }
}
function mapStateToProps(state){
    return {
        applicationDetail: state.get("applicationDetail"),
        modal: state.get("modal"),
    };
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationDetailRequest: applicationActions.sendApplicationDetailRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch),
        dispatch: dispatch
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ApplicationDetailPage);
