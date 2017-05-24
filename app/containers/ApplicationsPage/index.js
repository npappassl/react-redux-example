
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import ApplicationList from 'components/ApplicationList';
import FilterSideBar from 'components/FilterSideBar';

import APICalls from 'APIs/index';
import * as applicationActions  from './actions/index';

import messages from './messages';

const WraperDiv = styled.div`
    width: 75vh;
    display: inline-table;
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
class ApplicationsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        const self = this;
        self.props.actions.sendApplicationsRequest();
    }
    render() {
        if(this.props.applications){
            return (
                <WraperDiv>
                    <h1>
                        <FormattedMessage {...messages.header} />
                        <ResultCountSpan>({this.props.applications.applications?this.props.applications.applications.length:0} results)</ResultCountSpan>
                    </h1>
                    <CreateApplicationA href="#/createapplication"> <span>+</span> Create application</CreateApplicationA>
                    {/* Mock ApplicationList  */}
                    {/* <ApplicationList applicationList={{applications:[
                        { id: 2, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Bristol"}},
                        { id: 3, name: "Nikolaos Papadopoulos", firstName: "Nikolaos", lastName: "Papadopoulos", email: "npappas@scottlogic.co.uk", jobTitle: "Leed Developer", jobTitleInternal: "Lead Developer", jobGroup: "Development", conclusion: null, office:{description:"Newcastle"}}

                    ]}}/> */}
                    <ApplicationList applicationList={this.props.applications} />
                    <FilterSideBar applicationList={this.props.applications} />
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
    // console.log("from mapStateToProps ApplicationsPage",state.get("applicationPageStore"),state.get("applicationPageStore").get("applicationList"));
    return {
        applications: state.get("applicationPageStore"),
        filterApplications: state.get("filterApplications")
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
