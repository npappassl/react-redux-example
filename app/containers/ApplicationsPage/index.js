
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
    }
    componentWillMount(){
        const self = this;
        // PRODUCTION
        self.props.actions.sendApplicationsRequest();
        // DEVELOPMENT TODO remove mock applications
        // self.props.actions.makeMockApplications();
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
                    <ApplicationList
                        applicationList={this.props.applications}
                        activeFilters={this.props.activeFilters}
                        searchFilter={this.props.searchFilter} />
                    <FilterSideBar />
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
        applications: state.get("applicationPageStore"),
        activeFilters: state.get("filterApplications"),
        searchFilter: state.get("searchFilter"),
    };
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendApplicationsRequest: applicationActions.sendApplicationsRequest,
        makeMockApplications: applicationActions.makeMockApplications
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ApplicationsPage);
