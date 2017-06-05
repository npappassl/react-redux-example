import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import DropDownList from 'components/DropDownList';
import FormInput from 'components/FormInput';
import ParticipantsTable from './ParticipantsTable';

import * as applicationActions  from './actions';

const H2 = styled.h2`
    font-size: 25pt;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 60px;
`;
const Th = styled.th`
    text-align: left;
    font-size: 20pt;
    font-weight: 400;
`;
class ScheduleInterviewPage extends React.PureComponent{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        const self = this;
        self.props.actions.sendScheduleInterviewPageRequest();
    }
    render(){
        if(this.props.pageStore){
            return(
                <main>
                    <H2>Schedule Interview</H2>
                    <table>
                        <tbody>
                            <tr>
                                <Th>Applicant</Th>
                                <td>
                                    <DropDownList options={this.props.pageStore.applications} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Date</Th>
                                <td>
                                    <FormInput onChange={this.props.actions.sendAvailabilityRequest} type="date" />
                                </td>
                            </tr>
                            <tr>
                                <Th>Time</Th>
                                <td>
                                    <DropDownList options={[{name:"0.5h",id:1},{name:"1h",id:2},{name:"1.5h",id:3},{name:"2h",id:4}]} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Interview Type</Th>
                                <td>
                                    <DropDownList options={this.props.pageStore.interviewTypes} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Participants</Th>
                            </tr>
                        </tbody>
                    </table>
                    <ParticipantsTable interviewers={this.props.pageStore.interviewers} availability={this.props.interviewerAvailability}/>
                </main>
            );
        } else {
            return <span>Loading...</span>
        }
    }
}
function mapStateToProps(state){
    return{
        pageStore: state.get("scheduleInterviewPageStore"),
        interviewerAvailability: state.get("interviewerAvailability"),
    }
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendScheduleInterviewPageRequest: applicationActions.sendScheduleInterviewPageRequest,
        sendAvailabilityRequest: applicationActions.sendNewAvailabilityCalendarRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleInterviewPage);
