import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const ListWrapperDiv = styled.div`

`;

class ApplicationList extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <ListWrapperDiv>
                <h2></h2>
                <ul>
                    <li>test 1</li>
                </ul>
            </ListWrapperDiv>
        );
    }
}

export default ApplicationList;
