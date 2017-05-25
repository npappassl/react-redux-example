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
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import APICalls from 'APIs/index';
import * as applicationActions  from './actions/index';

import ApplicationsForSiftList from 'components/ApplicationsForSiftList/index';

import messages from './messages';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        const self = this;
        // window.getApps = APICalls.getNotCompletedApplications;
        // APICalls.getApplications().then(response => console.log(response));
// =======================================================================================
        // console.log(self.props.actions.getApplications);
        // self.props.actions.getApplications();
    }
    componentWillMount(){
        const self = this;
        // PRODUCTION
        self.props.actions.sendApplicationsForSiftRequest();
        // DEVELOPMENT TODO remove mock applications
        // self.props.actions.makeMockApplicationsForSift();
    }

  render() {
      return (
          <div>
              <h1>
                  <FormattedMessage {...messages.pendingCVScreenTitle} />
              </h1>
              <ApplicationsForSiftList applicationList={this.props.applicationsForSift}/>
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
        makeMockApplicationsForSift: applicationActions.makeMockApplicationsForSift
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
