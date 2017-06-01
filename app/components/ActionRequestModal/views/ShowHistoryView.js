import React from 'react';
import styled from 'styled-components';

import * as actions from '../actions';

import Button from 'components/Button';

import ActionFormWrapper from '../commonStyleComponents/ActionFormWrapper';
import ButtonDiv from '../commonStyleComponents/ButtonDiv';

export default class ShowHistoryView extends React.Component{
    render(){
        return (
            <ActionFormWrapper>
                <h2>Application History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>DATE/TIME</th>
                            <th>USER</th>
                            <th>ACTION</th>
                            <th>STAGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.application.applicationHistory.map((historyItem) => {
                            return (
                                <tr key={historyItem.dateTimeString}>
                                    <td>{historyItem.dateTimeString}</td>
                                    <td>{historyItem.user}</td>
                                    <td>{historyItem.action}</td>
                                    <td>{historyItem.stage}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <ButtonDiv>
                    <Button onClick={this.props.closeModal} value="OK" />
                </ButtonDiv>
            </ActionFormWrapper>
        );

    }
}
