import React from 'react';
import styled from 'styled-components';

const Th = styled.th`
    text-align: left;
`;

export default class ApplicationDetailsTable extends React.Component{
    render(){
        return (
            <div>
                <h2>Application Details</h2>
                <table>
                    <tbody>
                        <tr key="Address">
                            <Th>Address</Th>
                            <td>{this.props.item.candidate.address}</td>
                        </tr>
                        <tr key="Postcode">
                            <Th>Postcode</Th>
                            <td>{this.props.item.candidate.postcode}</td>
                        </tr>
                        <tr key="Email">
                            <Th>Email</Th>
                            <td>{this.props.item.candidate.email}</td>
                        </tr>
                        <tr key="Phone">
                            <Th>Phone</Th>
                            <td>{this.props.item.candidate.phoneNumber}</td>
                        </tr>
                        <tr key="asAdvertised">
                            <Th>Job title as advertised</Th>
                            <td>{this.props.item.jobTitleAsAdvertised}</td>
                        </tr>
                        <tr key="Source">
                            <Th>Source</Th>
                            <td>{this.props.item.source.description}</td>
                        </tr>
                        <tr key="Referral">
                            <Th>Referral source</Th>
                            <td>{this.props.item.referalSource}</td>
                        </tr>
                        <tr key="Application Date">
                            <Th>Application Date</Th>
                            <td>{this.props.item.applicationDate}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
