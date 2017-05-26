import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
`;
const Td = styled.td`
    padding: 10px;
`;
const BlockSpan = styled.span`
    display: block;
`;
export default class ApplicationListItem extends React.PureComponent{
    constructor(props){
        super(props);

    }
    renderApplicationsListItem(item){
        return (
            <Tr key={item.id}>
                <Td>{item.firstName+" "+item.lastName}</Td>
                <Td>{!!item.requests}</Td>
                <Td>{item.date}</Td>
                <Td>{item.jobTitleInternal}</Td>
                <Td>{item.office.description}</Td>
                <Td>{item.duration}</Td>
                <Td>{item.stage}</Td>
                <Td>{item.referralSource}</Td>
            </Tr>
        );
    }
    renderForSiftApplicationListItem(item){
        return (
            <Tr key={item.id}>
                <Td>{item.firstName+" "+item.lastName}</Td>
                <Td>{item.date}</Td>
                <Td>{item.jobTitleInternal}</Td>
                <Td>{item.office.description}</Td>
                <Td>{item.referralSource}</Td>
            </Tr>
        );
    }
    renderUpcomingInterviewsListItem(item){
        return (
            <Tr key={item.id}>
                <Td>{item.application.firstName+" "+item.application.lastName}</Td>
                <Td>{item.date}</Td>
                <Td>{item.timeRange}</Td>
                <Td>{item.interviewers.map((interviewer) =>{
                    return (<BlockSpan>{interviewer.name}</BlockSpan>);
                })}</Td>
                <Td>{item.interviewType.name}</Td>
            </Tr>
        );
    }
    render(){
        const { item,type } = this.props;
        if(!type){
            return this.renderApplicationsListItem(item);
        } else if(type==="forSift"){
            return this.renderForSiftApplicationListItem(item);
        } else if(type==="upcomingInterviews" || type==="toScore"){
            return this.renderUpcomingInterviewsListItem(item);
        } else {
            return (<li></li>)
        }
    }
}
