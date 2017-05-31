import React from 'react';
import styled from 'styled-components';

import delete_app_icon from '../images/delete_application.svg';
import edit_app_icon from '../images/edit_application.svg';
import app_history_icon from '../images/application_history.svg';

const IconImg = styled.img`
    display: inline-block;
    height: 1em;
    vertical-align: middle;
    margin-right: .3em;
    margin-left: .7em;
`;
const Span = styled.span`
    vertical-align: middle;
`;
const WraperDiv = styled.div`
    float:right;
`;
export default class AppDetailButtonList extends React.Component{
    render(){
        return (
            <WraperDiv>
                <span><IconImg src={app_history_icon} /><Span>Show History</Span></span>
                <span><IconImg src={edit_app_icon} /><Span>Edit Application</Span></span>
                <span><IconImg src={delete_app_icon} /><Span>Delete Application</Span></span>
            </WraperDiv>
        );
    }
}
