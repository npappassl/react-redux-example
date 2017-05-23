import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const ListWrapperDiv = styled.div`

`;

class ApplicationList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        console.log("from ApplicationList component",props.applicationList);
    }
    render() {
        const { applicationList } = this.props;
        console.log(applicationList);
        if(applicationList.applications){
            return (
                <ListWrapperDiv>
                    <h2>ApplicationList</h2>
                    <ul>
                        {applicationList.applications.map((item) => {return (
                            <li>{item.fisrtName}</li>
                        )})}
                    </ul>

                </ListWrapperDiv>
            );
        } else {
            return (
                <ListWrapperDiv>
                    <h2>ApplicationList</h2>
                    <ul>
                        <li>test 1</li>
                    </ul>

                </ListWrapperDiv>
            )
        }
    }
}

export default ApplicationList;
