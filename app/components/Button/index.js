import React from 'react';
import styled from 'styled-components';
const StyledButton = styled.button`
    background-color: #2bb3bb;
    width: 170px;
    height: 40px;
    color: white;
    font-weight: 600;
    font-size: 0.8em;
    text-transform: uppercase;
    margin-left: 1em;
    &:hover {
        background-color: #2284A1;
    }
`;

export default class Button extends React.Component{
    render(){
        return (
            <StyledButton id={this.props.id} onClick={this.props.onClick}>{this.props.value}</StyledButton>
        );
    }
}
