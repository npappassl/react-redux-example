import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    list-style: none;
`;
const Li = styled.li`
    height: 40px;
`;
export default class ActionRequests extends React.Component{
    constructor(props){
        super(props);
        console.log(props.request);
    }
    render(){
        if(this.props.requests){
            return(
                <Ul>
                    { this.props.requests.map((request) => {
                        return (<Li key={request.id}>{request.subject}</Li>);
                    })}
                </Ul>
            );
        } else {
            return (<li key="-1"></li>)
        }
    }
}
