import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
    text-align: left;
`;

export default class ConfidentialFieldsTable extends React.Component{
    render(){
        return (
            <div>
                <h2>Confidential Fields</h2>
                <table>
                    <tbody>
                        <tr>
                            <Th>Current salary</Th>
                            <td>{this.props.item.currentSalary}</td>
                        </tr>
                        <tr>
                            <Th>Salary Expected</Th>
                            <td>{this.props.item.salaryExpectation}</td>
                        </tr>
                        <tr>
                            <Th>Visa Type</Th>
                            <td>{this.props.item.visaType}</td>
                        </tr>
                        <tr>
                            <Th>Visa Expiry Date</Th>
                            <td>{this.props.item.visaExpiryDate}</td>
                        </tr>
                        <tr>
                            <Th>Reasonable Adjustments</Th>
                            <td>{this.props.item.reasonableAdjustments}</td>
                        </tr>
                        <tr>
                            <Th>Adjustment Details</Th>
                            <td>{this.props.item.reasonableAdjustmentsDetails}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
