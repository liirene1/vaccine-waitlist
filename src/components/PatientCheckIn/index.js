import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { addPatient} from "../../actions";

const WELCOME_MESSAGE = "Welcome to Vaccine Site #123. Please enter your appointment confirmation number and phone number below";
const SUCCESS_MESSAGE = "Thank You. You are currently # on the wait list. We will text you to return to the waiting room when you are in top 10.";
const ERROR_MESSAGE = "We apologize. There was an error submitting. Please try again or contact the front desk assistant.";
const INVALID_CONFIRMATION_INPUT = "Confirmation Number must be 7 characters long";
const INVALID_PHONE_INPUT = "Please enter valid phone number";

export class PatientCheckIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmationNumber: undefined,
      phoneNumber: undefined,
      errors: {}
    };
  }

  handleChange(field, value) {
    console.log("change", field, value);
    this.setState({ [field]: value });
  }

  validateInput(field, value) {
    const { confirmationNumber, phoneNumber, errors } = this.state;
    if (field === 'confirmationNumber' && confirmationNumber && confirmationNumber.length !== 7) {
      this.setState({errors: {...errors, confirmationNumber: INVALID_CONFIRMATION_INPUT }})
    }

    // TODO: check on regex
    // const PHONE_REGEX = '^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$';
    // if (field === 'phoneNumber' && phoneNumber && !phoneNumber.match(PHONE_REGEX)) {
    //   this.setState({errors: {...errors, phoneNumber: INVALID_PHONE_INPUT }})
    // }
  }

  handleSubmit() {
    //add disable button
    //if no errors
    console.log("submit");
    const {confirmationNumber, phoneNumber } = this.state;
    this.props.addPatient({ confirmationNumber, phoneNumber });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <h2> {WELCOME_MESSAGE} </h2>
        <label> Appointment Confirmation Number </label>
        <input
          type="text"
          onChange={e => this.handleChange('confirmationNumber', e.target.value)}
          onBlur={() => this.validateInput('confirmationNumber')}
        />
        {errors.confirmationNumber && <p> {errors.confirmationNumber} </p> }

        <label> Patient Phone Number </label>
        <input
          type="tel"
          onChange={e => this.handleChange('phoneNumber', e.target.value)}
          onBlur={() => this.validateInput('phoneNumber')}
        />
        {errors.phoneNumber && <p> {errors.phoneNumber} </p> }

        <div onClick={() => this.handleSubmit()}> Submit </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ addPatient }, dispatch)
);

export default connect(
  null,
  mapDispatchToProps
)(PatientCheckIn);
