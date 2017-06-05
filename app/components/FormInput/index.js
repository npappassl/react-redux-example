import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    box-shadow:0 0 1px 1px rgba(33,24,26,.8);
    line-height: 2.3em;
`;
const Label = styled.label`
    min-width: 150px;
    display: inline-block;
    font-weight: 400;
`;
const InputModule = styled.div`
    display: block;
    margin: 40px;
`;

export default class FormInput extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.displayName){
            return (
                <InputModule>
                    <Label>{this.props.displayName+":"}</Label>
                    <Input onChange={this.props.onChange} className={this.props.className} type={this.props.type} name={this.props.name}/>
                </InputModule>
            )
        } else {
            return (
                <InputModule>
                    <Input onChange={this.props.onChange} className={this.props.className} type={this.props.type} name={this.props.name}/>
                </InputModule>
            )

        }
    }
}
