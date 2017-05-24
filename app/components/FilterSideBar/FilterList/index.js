import React from 'react';

export default class FilterList extends React.PureComponent{
    constructor(props){
        super(props);
        console.log("from FilterList", this.props.applicationList);
        this.filterValues = [];
        this.generateFilterValues();

    }
    generateFilterValues(){
        if(!this.props.applicationList.applications){
            setTimeout(this.generateFilterValues,100);
            return;
        }
        for (let app of this.props.applicationList.applications){
            console.log(app);
        }
    }
    renderJobTitles(){
        console.log("renderJobTitles");
        return (
            <div>
                dikemou
            </div>
        );
    }
    render(){
        switch (this.props.type) {
            case "jobTitle":
                return this.renderJobTitles();
                break;
            default:
                return(<div></div>);
        }
    }
}
