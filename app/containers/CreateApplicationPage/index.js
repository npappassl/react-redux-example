import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FormInput from '../../components/FormInput';
import APICalls from '../../APIs/index'

import styled from 'styled-components';
const FancyForm = styled.form`

`;

export class CreateApplicationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    sendCheckDubplicate(event){
        let sendObject = {};
        event.preventDefault();
        const form = document.getElementById("newApplicationForm");
        let formChildren = form.getElementsByClassName("textInput");
        formChildren = Array.prototype.slice.call(formChildren);
        formChildren.map((childNode) => {
            sendObject[childNode.name] = childNode.value;
        });
        APICalls.askIfDuplicate(formChildren).then(response => {
            if(response.length===0){
                APICalls.saveCreateApplication(sendObject);
            }
        })
    }
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage {...messages.header} />
                </h1>
                <form id="newApplicationForm" action="services/application/form/saveCreateApplication" method="POST" encType="multipart/form-data">
                    <h3><FormattedMessage {...messages.basicInfoTitle} /></h3>
                    <FormInput className="textInput" type="text" name="firstName" displayName="First Name" />
                    <FormInput className="textInput" type="text" name="lastName" displayName="Last Name" />
                    <FormInput className="textInput" type="text" name="email" displayName="Email" />
                    <FormInput className="textInput" type="text" name="phone" displayName="Phone" />
                    <FormInput className="textInput" type="text" name="address" displayName="Address" />
                    <FormInput className="textInput" type="text" name="postcode" displayName="Postcode" />
                    <FormInput className="dateInput" type="date" name="applicationDate" displayName="Application Date" />
                    <FormInput className="textInput" type="text" name="officeId" displayName="Office" />
                    <FormInput className="textInput" type="text" name="jobTitleAsAdvertised" displayName="Job Title As Advertised" />
                    <FormInput className="textInput" type="text" name="jobTitleGroupId" displayName="Job Title Group Id" />
                    <FormInput className="textInput" type="text" name="jobTitleId" displayName="Job Title Id" />

                    <FormInput className="textInput" type="text" name="sourceId" displayName="Source" />

                    <FormInput className="textInput" type="text" name="referralSource" displayName="Referral Source" />
                    <FormInput className="textInput" type="text" name="eligibilityId" displayName="Eligibility" />
                    <FormInput className="textInput" type="text" name="visaType" displayName="Visa Type" />
                    <FormInput className="textInput" type="text" name="visaExpiryDate" displayName="Visa Expiry Date" />
                    <FormInput className="textInput" type="text" name="reasonableAdjustments" displayName="Reasonable Adjustments" />
                    <FormInput className="textInput" type="text" name="reasonableAdjustmentsDetails" displayName="Reasonable Adjustments" />

                    <FormInput className="textInput" type="text" name="currentSalary" displayName="Current Salary" />
                    <FormInput className="textInput" type="text" name="salaryExpectation" displayName="Salary Expectation" />
                    <input type="file" accept=".doc, .pdf, .docx, .txt, .rtf, .odt" name="newFile-0"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}


export default CreateApplicationPage;
