import React from 'react';

import AvailableTd from '../commonStyleComponents/AvailableTd';
import BusyTd from '../commonStyleComponents/BusyTd';
import UndefinedTd from '../commonStyleComponents/UndefinedTd';
import Tr from '../commonStyleComponents/Tr';


export default class RowWithoutAvailability extends React.PureComponent{
    constructor(props){
        super(props);
        this.timetable = [
            "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
            "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"
        ];

    }
    render(){
        const {inter} = this.props;
        return (
            <Tr key={inter.id}>
                <td>{inter.name}</td>
                <td>{inter.role}</td>
                <td>{inter.interviewCountShortTerm}</td>
                <td>{inter.interviewCountLongTerm}</td>
                {this.timetable.map((time)=>{
                    return (
                        <UndefinedTd/>
                    );
                })}
            </Tr>
        );
    }
}
