import React from 'react';
import styled from 'styled-components';

import AvailableTd from '../commonStyleComponents/AvailableTd';
import BusyTd from '../commonStyleComponents/BusyTd';
import UndefinedTd from '../commonStyleComponents/UndefinedTd';
import Tr from '../commonStyleComponents/Tr';


export default class RowWithAvailability extends React.PureComponent{
    constructor(props){
        super(props);
        this.renderAvailability = this.renderAvailability.bind(this);
        this.convertedAvailability = [];
        console.log("this.props.availability    ",this.props.availability);
        if(this.props.availability){
            this.props.availability.availability.map((avail)=>{
                const curDate = new Date(avail.start);
                this.convertedAvailability.push(curDate.getHours()+":"+curDate.getMinutes());
            });
        }
        this.timetable = [
            "8:0","8:30","9:0","9:30","10:0","10:30","11:0","11:30","12:0","12:30",
            "13:0","13:30","14:0","14:30","15:0","15:30","16:0","16:30","17:0","17:30"
        ];
        console.log(this.convertedAvailability);
    }
    renderAvailability(time){
        if(this.convertedAvailability.indexOf(time)>=0){
            return(
                <AvailableTd/>
            )
        } else {
            return (
                <BusyTd/>
            );
        }
    }
    render(){
        const {inter,availability} = this.props;
        return (
            <Tr key={inter.id}>
                <td>{inter.name}</td>
                <td>{inter.role}</td>
                <td>{inter.interviewCountShortTerm}</td>
                <td>{inter.interviewCountLongTerm}</td>
                {this.timetable.map((time)=>{
                    return this.renderAvailability(time);
                })}
            </Tr>
        );
    }
}
