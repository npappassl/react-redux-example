/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as applicationActions  from './actions/index';

import ApplicationForSiftList from 'components/ApplicationForSiftList/index';
import UpcomingInterviewList from 'components/UpcomingInterviewList/index';
import InterviewToScoreList from 'components/InterviewToScoreList/index';

import messages from './messages';
const H1 = styled.h1`
    margin-top: 60px;
`;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    componentWillMount(){
        const self = this;
        self.props.actions.sendApplicationsForSiftRequest();
        self.props.actions.sendUpcomingInterviewsRequest();
        self.props.actions.sendInterviewsToScoreRequest();
    }
    render() {
        return (
            <div>
                <H1>
                    <FormattedMessage {...messages.homePageTitle} />
                </H1>
                <ApplicationForSiftList applicationList={this.props.applicationsForSift}/>
                <UpcomingInterviewList applicationList={this.props.upcomingInterviews}/>
                <InterviewToScoreList applicationList={this.props.interviewsToScore} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        applicationsForSift: state.get("homePageAppsForSift"),
        upcomingInterviews: state.get("homePageUpcomingInterviews"),
        interviewsToScore: state.get("homePageInterviewsToScore"),
    }
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationsForSiftRequest: applicationActions.sendApplicationsForSiftRequest,
        sendUpcomingInterviewsRequest: applicationActions.sendUpcomingInterviewsRequest,
        sendInterviewsToScoreRequest: applicationActions.sendInterviewsToScoreRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
