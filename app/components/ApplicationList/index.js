import React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ApplicationListItem from 'components/ApplicationListItem';

const ListWrapperDiv = styled.div`

`;
const TBody = styled.tbody`
    :nth-child(even) td{
        background-color: #cacaca;
    }
    :nth-child(odd) td{
        background-color: #ddf;
    }
`;
const Table = styled.table`
`;
const Tr = styled.tr`
`;
const Th = styled.th`
    text-transform: uppercase;
    border-bottom: solid black;
    box-sizing: border-box;
    &::after{
        content: "⬪";
    }
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
                    <table>
                        <thead>
                            <tr>
                                <Th>Name</Th>
                                <Th>Requests</Th>
                                <Th>Date</Th>
                                <Th>Job Title</Th>
                                <Th>Office</Th>
                                <Th>Duration</Th>
                                <Th>Stage</Th>
                                <Th>Source</Th>
                            </tr>
                        </thead>
                        <TBody>
                            {applicationList.applications.map((item) => {return (
                                <ApplicationListItem key={item.id} item={item} />
                            )})}
                        </TBody>
                    </table>

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
