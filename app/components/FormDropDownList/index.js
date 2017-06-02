import React from 'react'
import styled from 'styled-components';

const Select = styled.select`
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

export default class FormDropDownList extends React.PureComponent {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <InputModule>
                <Label>{this.props.displayName+":"}</Label>
                <Select className={this.props.className}
                    name={this.props.name}
                    onChange={this.props.onChange||null}
                >
                    {this.props.options.map((option)=>{
                        return (
                            <option value={option.id}>{option.description}</option>
                        );
                    })}
                </Select>
            </InputModule>
        )
    }
}
