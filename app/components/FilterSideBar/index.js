import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import FilterList from './FilterList';

const FilterSideBarWraperDiv = styled.div`
    color: white;
    background-color: #333;
    width: 25vw;
    ${''/* float: right; */}
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

class FilterSideBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        console.log("from ApplicationList component",props.applicationList);
    }
    appendJobTitleFilter(){

    }
    render(){
        return(
            <FilterSideBarWraperDiv>
                <h2>FILTERS</h2>
                <Ul>
                    <li>
                        Job Titles
                        <Ul>
                            <FilterList type="jobTitle" applicationList={this.props.applicationList} />
                        </Ul>
                    </li>
                    <li>
                        Offices
                        <select type="select"/>
                    </li>
                    <li>
                        Stages
                        <select type="select"/>
                    </li>
                    <li>
                        Sources
                        <select type="select"/>
                    </li>

                </Ul>
            </FilterSideBarWraperDiv>
        );
    }
}

export default connect()(FilterSideBar)
