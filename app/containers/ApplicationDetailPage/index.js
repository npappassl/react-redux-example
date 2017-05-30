import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as applicationActions  from './actions/index';

import ActionButtonList from 'components/ActionButtonList/index';
import Button from 'components/Button/index';
import ActionRequests from 'components/ActionRequests/index';
import ActionRequestModal from 'components/ActionRequestModal/index';

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
const AppDetailButtonList = styled.ul`
`;
const AppDetailList = styled.div`
    flex-grow: 1;
`;
const Th = styled.th`
    text-align: left;
`;
class ApplicationDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        // this.setState({actionRequestModalActive: false});
        this.showActionRequestForm = this.showActionRequestForm.bind(this);
    }
    componentWillMount(){
        const self = this;
        self.props.actions.sendApplicationDetailRequest(self.props.routeParams.id);
    }
    showActionRequestForm(){
        console.log("showActionRequestForm",!this.props.actionRequestModalActive);
        // this.setState({actionRequestModalActive: !this.props.actionRequestModalActive});
    }
    render() {
        if(this.props.applicationDetail){
            return (
                <WraperDiv>
                    <LeftFlex>
                        <h1>
                            {this.props.applicationDetail.candidate.first + " " + this.props.applicationDetail.candidate.last}
                        </h1>
                        <AppDetailButtonList>
                            <span>Show History</span>
                            <span>Edit Application</span>
                            <span>Delete Application</span>
                        </AppDetailButtonList>
                        <section>
                            <h2>Action Requests</h2>
                            <hr/>
                            <ActionRequests requests={this.props.applicationDetail.actionRequests}/>
                            {/*  see how one writes dynamic text input updating state*/}
                            <ActionRequestModal show={false && this.props.actionRequestModalActive} />
                            <Button value="New Request"
                                onClick={this.showActionRequestForm} />
                        </section>
                        <section>
                            <h2>Interviews</h2>
                            <hr/>
                        </section>
                        <section>
                            <ActionButtonList buttonListPermissions={this.props.applicationDetail.appStatusPermissions}/>
                        </section>
                    </LeftFlex>
                    <AppDetailList>
                        <h2>Application Details</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <Th>Address</Th>
                                    <td>{this.props.applicationDetail.candidate.address}</td>
                                </tr>
                                <tr>
                                    <Th>Postcode</Th>
                                    <td>{this.props.applicationDetail.candidate.postcode}</td>
                                </tr>
                                <tr>
                                    <Th>Email</Th>
                                    <td>{this.props.applicationDetail.candidate.email}</td>
                                </tr>
                                <tr>
                                    <Th>Phone</Th>
                                    <td>{this.props.applicationDetail.candidate.phoneNumber}</td>
                                </tr>
                                <tr>
                                    <Th>Job title as advertised</Th>
                                    <td>{this.props.applicationDetail.jobTitleAsAdvertised}</td>
                                </tr>
                                <tr>
                                    <Th>Source</Th>
                                    <td>{this.props.applicationDetail.source.description}</td>
                                </tr>
                                <tr>
                                    <Th>Referral source</Th>
                                    <td>{this.props.applicationDetail.referalSource}</td>
                                </tr>
                                <tr>
                                    <Th>Application Date</Th>
                                    <td>{this.props.applicationDetail.applicationDate}</td>
                                </tr>
                            </tbody>
                        </table>
                        <hr/>
                        <h2>Confidential Fields</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <Th>Current salary</Th>
                                    <td>{this.props.applicationDetail.currentSalary}</td>
                                </tr>
                                <tr>
                                    <Th>Salary Expected</Th>
                                    <td>{this.props.applicationDetail.salaryExpectation}</td>
                                </tr>
                                <tr>
                                    <Th>Visa Type</Th>
                                    <td>{this.props.applicationDetail.visaType}</td>
                                </tr>
                                <tr>
                                    <Th>Visa Expiry Date</Th>
                                    <td>{this.props.applicationDetail.visaExpiryDate}</td>
                                </tr>
                                <tr>
                                    <Th>Reasonable Adjustments</Th>
                                    <td>{this.props.applicationDetail.reasonableAdjustments}</td>
                                </tr>
                                <tr>
                                    <Th>Adjustment Details</Th>
                                    <td>{this.props.applicationDetail.reasonableAdjustmentsDetails}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h2>Notes</h2>
                        <form>
                            <input></input>
                            <input type="submit" value="save note" />
                        </form>
                    </AppDetailList>
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
        actionRequestModalActive: state.get("actionRequestModalActive"),
    };
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationDetailRequest: applicationActions.sendApplicationDetailRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ApplicationDetailPage);
