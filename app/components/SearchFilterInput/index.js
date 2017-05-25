import React from 'react';
import { connect }from 'react-redux';
import styled from 'styled-components';

import types from "actions/types";

const SearchApplicationsInput = styled.input`
    background-color: white;
    color:black;
    width: 175px;
    height: 30px;
    font-size: 14px;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    vertical-align: middle;
    line-height: 20px;
    padding: 4px 6px;
    margin-bottom: 0;
    margin-right: 10px;
`;


class SearchFilterInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: "", typeahead: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

    }
    handleChange(event){
        if (event.target.value === "") {
            this.setState({value: event.target.value, typeahead:false});
        } else {
            this.setState({value: event.target.value, typeahead:true});
        }
        this.props.dispatch(this.propagateChange(event.target.value));
    }
    handleBlur(event){
        console.log(event.target);
    }
    handleEnter(event){
        console.log(event.key);
        if(event.key === "Enter"){
            window.location.href="#/applications";
        }
    }
    propagateChange(value){
        return {
            type: types.SEARCH_FILTER_CHANGED,
            payload: value
        };
    }
    render(){
        return(
            <SearchApplicationsInput
                ref={(input) => { this.textInput = input; }}
                type='search'
                value={this.state.value} onChange={this.handleChange}
                onBlur={this.handleBlur}
                onKeyUp={this.handleEnter}
                placeholder={this.props.placeholder} />
        );
    }

}
function mapStateToProps(state){
    return{
        searchFilter: state.get("searchFilter")
    }
}
export default connect(mapStateToProps)(SearchFilterInput);
