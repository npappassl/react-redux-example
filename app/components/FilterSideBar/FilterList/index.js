import React from 'react';
import { connect } from 'react-redux';

class FilterList extends React.PureComponent{
    constructor(props){
        super(props);
        console.log("from FilterList", this.props.applicationList);
        this.generateFilterValues = generateFilterValues.bind(this);
        this.filterValues = [];

    }
    componentWillMount(){
        this.generateFilterValues();
    }
    renderDefaultList(){
        console.log("renderDefaultList");
        return (
            <ul>
                {this.filterValues.map((value) => {
                    return (<li key={value||"emptyFilter"+this.props.type}>{value}</li>);})}
            </ul>
        );
    }
    renderOffices(){
        console.log("renderOffices");
        return (
            <ul>
                {this.filterValues.map((value) => {
                    console.log(value);
                    return (<li key={value.id}>{value.description}</li>);})
                }
            </ul>
        );
    }
    render(){
        switch (this.props.type) {
            case "office":
                return this.renderOffices();
                break;
            default:
                return this.renderDefaultList();
        }
    }
}
function generateFilterValues(){
    console.log("this.props",this.props);
    const key = this.props.type;
    const appList = this.props.applicationList.applications;
    for (let app of appList){
        if(this.filterValues.indexOf(app[key])<0){
            this.filterValues.push(app[key]);
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
