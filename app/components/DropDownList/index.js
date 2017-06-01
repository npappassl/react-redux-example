import React from 'react';
import styled from 'styled-components';

export default class DropDownList extends React.PureComponent{
    render(){
        return (
            <select>
                {this.props.options.map((option) => {
                    return(
                        <option key={option.id} value={option.id}>{option.name}</option>
                    );
                })}
            </select>
        );
    }
}
