import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import DropDownList from 'components/DropDownList';

import * as applicationActions  from 'containers/ApplicationsPage/actions/index';

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
    componentWillMount(){
        const self = this;
        self.props.actions.sendApplicationsRequest();
    }
    render(){
        if(this.props.applicationList){
            return(
                <main>
                    <H2>Schedule Interview</H2>
                    <table>
                        <tbody>
                            <tr>
                                <Th>Applicant</Th>
                                <td>
                                    <DropDownList options={this.props.applicationList.applications} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Date</Th>
                                <td>
                                    <DropDownList options={this.props.applicationList.applications} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Time</Th>
                                <td>
                                    <DropDownList options={this.props.applicationList.applications} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Interview Type</Th>
                                <td>
                                    <DropDownList options={this.props.applicationList.applications} />
                                </td>
                            </tr>
                            <tr>
                                <Th>Participants</Th>
                                <td>
                                    <DropDownList options={this.props.applicationList.applications} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </main>
            );
        } else {
            return <span>Loading...</span>
        }
    }
}
function mapStateToProps(state){
    return{
        applicationList: state.get("applicationPageStore")
    }
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationsRequest: applicationActions.sendApplicationsRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ScheduleInterviewPage);
