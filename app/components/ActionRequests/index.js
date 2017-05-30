import React from 'react';
import styled from 'styled-components';

export default class ActionRequests extends React.Component{
    constructor(props){
        super(props);
        console.log(props.request);
    }
    render(){
        if(this.props.requests){
            return(
                <ul>
                    { this.props.requests.map((request) => {
                        return (<li>{request.subject}</li>);
                    })}
                </ul>
            );
        } else {
            return (<li></li>)
        }
    }
}
