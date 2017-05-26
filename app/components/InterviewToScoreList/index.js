import React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import ApplicationListItem from 'components/ApplicationListItem';

const ListWrapperDiv = styled.div`
    width:70vw;
`;
const TBody = styled.tbody`
    :nth-child(even) td{
        background-color: #cacaca;
    }
    :nth-child(odd) td{
        background-color: #f3f3f7;
    }
`;
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;
const Tr = styled.tr`
`;
const Th = styled.th`
    text-transform: uppercase;
    border-bottom: solid black;
    box-sizing: border-box;
    display: run-in;
    margin-left: 5px;
    &::after{
        content: "⬪";
    }
`;
class InterviewToScoreList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
    }
    render() {
        const { applicationList } = this.props;
        console.log(applicationList);
        if(applicationList){
            return (
                <ListWrapperDiv>
                    <h2>Interviews to Score</h2>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Candidate</Th>
                                <Th>Date</Th>
                                <Th>Time</Th>
                                <Th>Participants</Th>
                                <Th>Interview Type</Th>
                            </tr>
                        </thead>
                        <TBody>
                            {applicationList.map((item) => {
                                console.log(item);
                                return (
                                    <ApplicationListItem key={item.id} type="toScore" item={item} />
                                );
                            })}
                        </TBody>
                    </Table>

                </ListWrapperDiv>
            );
        } else {
            return (
                <ListWrapperDiv>
                    <h2>ApplicationList</h2>
                    <ul>
                        <li>Loading...</li>
                    </ul>

                </ListWrapperDiv>
            )
        }
    }
}

export default InterviewToScoreList;
