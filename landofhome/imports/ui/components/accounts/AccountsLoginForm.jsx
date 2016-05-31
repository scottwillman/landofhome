import React from 'react';
import { Button, Checkbox, Radio, FormGroup, FormControl } from 'react-bootstrap';
// import { Link } from 'react-router';

export default class AccountsLoginForm extends React.Component {
	render() {
		return(
			<form className="cmptAccountsLoginForm">
				<FormGroup controlId="formControlsEmail">
					<FormControl type="text" placeholder="Email" />
				</FormGroup>
				<FormGroup controlId="formControlsPassword">
					<FormControl type="password" placeholder="Password"/>
				</FormGroup>
				<FormGroup controlId="formControlsRemember">
					<Checkbox> Remember Me</Checkbox>
				</FormGroup>
				<FormGroup controlId="formControlsSubmit" style={{marginBottom: 0}}>
					<Button bsStyle="default" type="submit" block>Log In</Button>
				</FormGroup>
			</form>
		);
	}
}
