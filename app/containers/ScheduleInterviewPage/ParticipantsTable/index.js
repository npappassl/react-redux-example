import React from 'react';
import styled from 'styled-components';

import RowWithoutAvailability from './RowWithoutAvailability';
import RowWithAvailability from './RowWithAvailability';

const AvailabilityCell = styled.th`
    font-size: 0.8em;
    font-weight: 100;
    padding: 4px 5px;
`;
export default class ParticipantsTable extends React.PureComponent{
    constructor(props){
        super(props);
        this.renderTRow = this.renderTRow.bind(this);
    }
    renderTRow(inter){
        if(this.props.availability){
            const availability = this.props.availability.interviewerAvailability.filter((avail)=>{
                return avail.id === inter.id;
            });
            return (
                <RowWithAvailability inter={inter} availability={availability[0]}/>
            );
        }else{
            return(
                <RowWithoutAvailability inter={inter}/>
            );
        }
    }
    render(){
        const timetable = [
            "08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30",
            "13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"
        ];
        return (
                <table>
                    <thead>
                        <tr>
                            <th key="name">Name</th>
                            <th key="role">Role</th>
                            <th key="interviews" colSpan="2">#Interviews</th>
                            {timetable.map((time)=>{
                                return (<AvailabilityCell key={time}>{time}</AvailabilityCell>)
                            })}
                        </tr>
                        <tr>
                            <th colSpan="2"></th>
                            <th>1M</th>
                            <th>12M</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.interviewers.map((inter)=>{
                            return this.renderTRow(inter);
                        })}
                    </tbody>
                </table>
        );
    }
}
