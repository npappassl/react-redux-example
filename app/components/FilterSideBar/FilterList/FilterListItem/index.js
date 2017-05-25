import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as allActions from '../actions/index';

const ActiveFilterLi = styled.li`
        font-weight: 900;
        color: #2bb3bb;
`;
const InactiveFilterLi = styled.li`
        font-weight: 100;
`;

class FilterListItem extends React.Component {
    constructor(props){
        super(props);
        this.sendAppendFilterAction = this.sendAppendFilterAction.bind(this);
    }
    sendAppendFilterAction(){
        this.props.actions.appendFilter(this.props.value, this.props.type);
    }
    renderActive(){
        return(
            <ActiveFilterLi onClick={this.sendAppendFilterAction} key={this.props.value||"emptyFilter"+this.props.type}>{this.props.value}</ActiveFilterLi>
        );
    }
    renderNormal(){
        return(
            <InactiveFilterLi onClick={this.sendAppendFilterAction} key={this.props.value||"emptyFilter"+this.props.type}>{this.props.value}</InactiveFilterLi>
        );
    }
    render(){
        if(this.props.activeFilters[this.props.type].indexOf(this.props.value)>=0){
            return this.renderActive();
        } else {
            return this.renderNormal();
        }
    }
}

function mapStateToProps(state) {
    return{
        activeFilters: state.get("filterApplications")
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(allActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterListItem);
