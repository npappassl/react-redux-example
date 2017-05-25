import React from 'react';

import styled from 'styled-components';
import FilterList from './FilterList';

const FilterSideBarWraperDiv = styled.div`
    color: white;
    background-color: #333;
    width: 25vw;
    height: 100vh;
    position: absolute;
    top:40px;
    right: 0;
    padding: 20px;
    padding-top:40px;
`;
const Select = styled.select`
    display: block;
    width: 60px;
`;
const Ul = styled.ul`
    list-style: none;
`;
const H2 = styled.h2`
    font-weight: 400;
`;
export default class FilterSideBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render(){
        return(
            <FilterSideBarWraperDiv>
                <H2>FILTERS</H2>
                <Ul>
                    <li key="jobTitle">
                        Job Titles
                        <FilterList type="jobTitle" />
                    </li>
                    <li key="office">
                        Offices
                        <FilterList type="office" />
                    </li>
                    <li key="filterStage">
                        Stages
                        <FilterList type="filterStage" />
                    </li>
                    <li key="source">
                        Sources
                        <FilterList type="source" />
                    </li>

                </Ul>
            </FilterSideBarWraperDiv>
        );
    }
}
