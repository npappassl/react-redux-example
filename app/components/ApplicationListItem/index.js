import React from 'react';
import styled from 'styled-components';

const Tr = styled.tr`
`;
const Td = styled.td`
    padding: 10px;
`;
export default class ApplicationListItem extends React.PureComponent{
    // constructor(pro)
    render(){
        const { item } = this.props;
        console.log(item);
        return(
            <Tr key={item.id}>
                <Td>{item.firstName+" "+item.lastName}</Td>
                <Td>{!!item.requests}</Td>
                <Td>{item.date}</Td>
                <Td>{item.jobTitleInternal}</Td>
                <Td>{item.office.description}</Td>
                <Td>{item.stage}</Td>
                <Td>{item.referralSource}</Td>
            </Tr>
        );
    }
}
