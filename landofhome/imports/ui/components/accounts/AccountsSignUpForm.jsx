import React from 'react';
import { Button, FormGroup, FormControl, Radio } from 'react-bootstrap';

export default class AccountsSignUpForm extends React.Component {
	render() {
		return(
			<form className="cmptAccountsSignUpForm">
				<FormGroup controlId="formControlsEmail">
					<FormControl type="text" placeholder="Email address" />
				</FormGroup>
				<FormGroup controlId="formControlsPassword">
					<FormControl type="password" placeholder="Password"/>
				</FormGroup>
				<FormGroup>
					<Radio inline name="gender" value="female">Female</Radio>
					<Radio inline name="gender" value="male">Male</Radio>
				</FormGroup>
				<FormGroup controlId="formControlsBirthYear">
					<FormControl type="text" placeholder="Birth Date" />
				</FormGroup>
				<FormGroup controlId="formControlsSubmit" style={{marginBottom: 0}}>
					<Button bsStyle="default" type="submit" block>Sign Up</Button>
				</FormGroup>
			</form>
		);
	}
}
