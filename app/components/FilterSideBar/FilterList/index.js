import React from 'react';
import { connect } from 'react-redux';

import FilterListItem from './FilterListItem/index';

class FilterList extends React.PureComponent{
    constructor(props){
        super(props);
        this.generateFilterValues = generateFilterValues.bind(this);
        this.filterValues = [];

    }
    componentWillMount(){
        this.generateFilterValues();
    }
    render(){
        return (
            <ul>
                {this.filterValues.map((value) => {
                    return <FilterListItem value={value} type={this.props.type} />
                })}
            </ul>
        );
    }
}
function generateFilterValues(){
    const key = this.props.type;
    const appList = this.props.applicationList.applications;
    if(key.match("office")){
        for (let app of appList){
            if(this.filterValues.indexOf(app[key])<0){
                this.filterValues.push(app[key].description);
            }
        }
    }else{
        for (let app of appList){
            if(this.filterValues.indexOf(app[key])<0){
                this.filterValues.push(app[key]);
            }
        }
    }
}
function mapStateToProps(state){
    return {
        applicationList: state.get("applicationPageStore"),
        activeFilters: state.get("filterApplications")
    };
}
export default connect(mapStateToProps)(FilterList)
