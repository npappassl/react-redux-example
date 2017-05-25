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
class ApplicationList extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        // this.filtered = this.filtered.bind(this);
        // console.log("from ApplicationList component",props.applicationList);
    }
    filtered(item){
        const {activeFilters,searchFilter} = this.props;
        console.log("filtered",activeFilters);
        const filterSmartItem = {
            filters:[],
            originalItem: item
        }
        let totalIndex = 0;
        if(searchFilter!=="" &&
            (!(item.firstName.match(searchFilter)||item.lastName.match(searchFilter)))){
            filterSmartItem.filters.push(false);
            totalIndex = 1;
        }
        for(let filter of Object.keys(activeFilters)){
            totalIndex++;
            console.log("filter",filter);
            if(activeFilters[filter].length===0){
                filterSmartItem.filters.push(true);
            } else {
                for(let filtervalue of activeFilters[filter]){
                    if(filter==="office"){
                        if(item[filter].description===filtervalue){
                            console.log(item[filter],filtervalue)
                            filterSmartItem.filters.push(true);
                        }
                    }
                    if(item[filter]===filtervalue){
                        console.log(item[filter],filtervalue)
                        filterSmartItem.filters.push(true);
                    }
                }
                if(filterSmartItem.filters.length < totalIndex){
                    filterSmartItem.filters.push(false);
                }
            }
        }
        console.log(filterSmartItem.filters);
        if(filterSmartItem.filters.reduce((a,b)=>{
            return a && b;
        },true)===true){
            return (
                <ApplicationListItem key={item.id} item={item} />
            );
        }
    }
    render() {
        const { applicationList, activeFilters } = this.props;
        if(applicationList.applications && activeFilters){
            return (
                <ListWrapperDiv>
                    <h2>ApplicationList</h2>
                    <Table>
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
                            {applicationList.applications.map((item) => {
                                return this.filtered(item);
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
                        <li>test 1</li>
                    </ul>

                </ListWrapperDiv>
            )
        }
    }
}

export default ApplicationList;
