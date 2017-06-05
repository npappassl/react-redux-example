import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import FormInput from '../../components/FormInput';
import FormDropDownList from '../../components/FormDropDownList';

import APICalls from '../../APIs/index'

import * as unboundActions from './actions';

import styled from 'styled-components';
const FancyForm = styled.form`
    height: 100%;
    width: 100%;
    overflow: auto;
`;
const Column = styled.div`
    width:45%;
    display: inline-block;
`

export class CreateApplicationPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    constructor(props){
        super(props);
        this.renderJobTitleDropDown = this.renderJobTitleDropDown.bind(this);
        this.handleJobGroupChange = this.handleJobGroupChange.bind(this);
        this.handleEligibilityChange = this.handleEligibilityChange.bind(this);

    }
    componentWillMount(){
        this.props.actions.sendCreateAppFormRequest();
    }
    sendCheckDubplicate(event){
        let sendObject = {};
        event.preventDefault();
        const form = document.getElementById("newApplicationForm");
        let formChildren = form.getElementsByClassName("textInput");
        formChildren = Array.prototype.slice.call(formChildren);
        formChildren.map((childNode) => {
            sendObject[childNode.name] = childNode.value;
        });
        debugger;
        APICalls.askIfDuplicate(formChildren).then(response => {
            if(response.length===0){
                APICalls.saveCreateApplication(sendObject);
            }
        })
    }
    handleJobGroupChange(event){
        console.log(event.target);
        this.setState({currentJobGroupId:event.target.selectedOptions[0].value});
    }
    handleEligibilityChange(event){
        console.log(event.target);
        this.setState({eligibilityId:event.target.selectedOptions[0].value});
    }
    renderVisaTypes(){
        if(this.state && (~~this.state.eligibilityId === 2)){
            return (
                <div>
                    <FormInput className="textInput" type="text" name="visaType" displayName="Visa Type" />
                    <FormInput className="dateInput" type="date" name="visaExpiryDate" displayName="Visa Expiry Date" />
                </div>
            );
        } else {
            return (<span></span>);
        }
    }
    updateHiddenDateInput(event){
        const hiddenInput = document.getElementById("hiddenDateInput");
        const dateObject = new Date(event.target.value);
        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        hiddenInput.value = days[dateObject.getDay().toString()]+" "+dateObject.getDate()+"/"+(dateObject.getMonth()+1)+"/"+dateObject.getFullYear();
        console.log(days[dateObject.getDay().toString()],dateObject.getDate(),(dateObject.getMonth()+1),dateObject.getFullYear())
        // debugger;
    }
    renderJobTitleDropDown(){
        if(this.state && this.state.currentJobGroupId){
            const curOptions = this.props.formParams.jobTitleGroups.filter((jobTitleGroup)=>{
                return jobTitleGroup.id === (~~this.state.currentJobGroupId);
            })[0];
            return (
                <FormDropDownList className="textInput" name="jobTitleId" displayName="Job Title" options={curOptions.jobTitles} />
            );
        } else {
            return (
                <FormDropDownList className="textInput" name="jobTitleId" displayName="Job Title" options={[{description:"Please select Job Title Group first.",id:-1}]} />
            );
        }
    }
    render(){
        if(this.props.formParams){
            return (
                <div>
                    <h1>
                        <FormattedMessage {...messages.header} />
                    </h1>
                    <FancyForm id="newApplicationForm" action="services/application/form/saveCreateApplication" method="POST" encType="multipart/form-data">
                    <Column>
                        <h3><FormattedMessage {...messages.basicInfoTitle} /></h3>
                        <FormInput className="textInput" type="text" name="firstName" displayName="First Name" />
                        <FormInput className="textInput" type="text" name="lastName" displayName="Last Name" />
                        <FormInput className="textInput" type="text" name="email" displayName="Email" />
                        <FormInput className="textInput" type="text" name="phone" displayName="Phone" />
                        <FormInput className="textInput" type="text" name="address" displayName="Address" />
                        <FormInput className="textInput" type="text" name="postcode" displayName="Postcode" />
                        <FormDropDownList className="dropDownList" name="officeId" displayName="Office" options={this.props.formParams.offices}/>
                        <FormInput onChange={this.updateHiddenDateInput} className="dateInput" type="date" name="applicationDateHTML5" displayName="Application Date" />
                         <input id="hiddenDateInput" style={{display:"none"}}  type="text" name="applicationDate"/>
                        <FormInput className="textInput" type="text" name="jobTitleAsAdvertised" displayName="Job Title As Advertised" />
                        <FormDropDownList onChange={this.handleJobGroupChange} className="dropDownList" name="jobTitleGroupId" displayName="Job Title Group" options={this.props.formParams.jobTitleGroups} />
                        {this.renderJobTitleDropDown()}
                    </Column>
                    <Column>
                        <FormInput className="textInput" type="text" name="sourceId" displayName="Source" />

                        <FormInput className="textInput" type="text" name="referralSource" displayName="Referral Source" />
                        <FormDropDownList className="dropDownList" name="eligibilityId"
                            options={this.props.formParams.eligibilities} onChange={this.handleEligibilityChange}
                            displayName="Eligibility" />
                        {this.renderVisaTypes()}
                        <FormInput className="textInput" type="text" name="reasonableAdjustments" displayName="Reasonable Adjustments" />
                        <FormInput className="textInput" type="text" name="reasonableAdjustmentsDetails" displayName="Reasonable Adjustments" />

                        <FormInput className="textInput" type="text" name="currentSalary" displayName="Current Salary" />
                        <FormInput className="textInput" type="text" name="salaryExpectation" displayName="Salary Expectation" />
                        <input type="file" accept=".doc, .pdf, .docx, .txt, .rtf, .odt" name="newFile-0"/>
                        <button type="submit">Submit</button>
                    </Column>
                </FancyForm>
            </div>
        );
    } else{
        return (<span>Loading...</span>);
    }
    }
}

function mapStateToProps(state){
    return{
        formParams: state.get("createApplicationPageStore")
    }
}
function mapDispatchToProps(dispatch){
    const allActions = {
        sendCreateAppFormRequest: unboundActions.sendCreateAppFormRequest,
    };
    return {
        actions: bindActionCreators(allActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateApplicationPage);
