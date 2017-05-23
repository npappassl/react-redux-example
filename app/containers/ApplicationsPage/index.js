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

// ===================================


// -==================================



import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ApplicationList from 'components/ApplicationList';
import APICalls from 'APIs/index';
import * as applicationActions  from './actions/index';

import messages from './messages';

class ApplicationsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        const self = this;
        self.props.actions.sendApplicationsRequest();
    }
    render() {
        if(this.props.applications){
            return (
                <div>
                    <h1>
                        <FormattedMessage {...messages.header} />
                    </h1>
                    <a href="#/createapplication"> + Create application</a>
                    <div>
                        <ApplicationList applicationList={this.props.applications}/>
                        {/* Mock ApplicationList  */}
                        {/* <ApplicationList applicationList={{applications:[
                            { id: 2, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Bristol"}},
                            { id: 3, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Newcastle"}}

                        ]}}/> */}

                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>
                        <FormattedMessage {...messages.header} />
                    </h1>
                    <a href="#/createapplication"> + Create application</a>
                </div>
            );
        }
    }
}
function mapStateToProps(state){
    // console.log("from mapStateToProps ApplicationsPage",state.get("applicationPageStore"),state.get("applicationPageStore").get("applicationList"));
    return {
        applications: state.get("applicationPageStore")
    };
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationsRequest: applicationActions.sendApplicationsRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ApplicationsPage);
