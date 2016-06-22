import React from 'react';
import ReactDOM from 'react-dom';

import { OverlayTrigger, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

import AccountsSignUpForm from './AccountsSignUpForm.jsx';
import AccountsLoginForm from './AccountsLoginForm.jsx';

export default class AccountsNavbar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	signUpHide(e) {
		e.preventDefault();
		this.refs.signUpTrigger.setState({isOverlayShown: false});
	}
	loginHide(e) {
		e.preventDefault();
		this.refs.loginTrigger.setState({isOverlayShown: false});
	}

	render() {

		const containerStyle = {
	      position: 'absolute',
	      backgroundColor: '#EEE',
	      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
	      border: '1px solid #CCC',
	      marginTop: 5,
	      padding: 10,
		  width: 300,
		  zIndex: 2000,
		//   marginLeft: (width/4+padding*-1
	    };

		const cancelStyle = {
			fontSize: 12,
			marginTop: 10,
			paddingLeft: 2
		};


		return(
			<ButtonToolbar>
				<OverlayTrigger
					onClick={this.loginHide.bind(this)}
					ref="signUpTrigger"
					trigger="click"
					placement="bottom"
					overlay={
						<div className="cmptAccountsPopoverContainer">
							<AccountsSignUpForm />
							<div style={cancelStyle}><a href="#" onClick={this.signUpHide.bind(this)}>No, thanks</a></div>
						</div>
					}
				>
					<Link to="">sign up</Link>
				</OverlayTrigger>
				<OverlayTrigger
					onClick={this.signUpHide.bind(this)}
					ref="loginTrigger"
					trigger="click"
					placement="bottom"
					overlay={
						<div className="cmptAccountsPopoverContainer">
							<AccountsLoginForm />
						</div>
					}
				>
					<Link to="">log in</Link>
				</OverlayTrigger>
			</ButtonToolbar>
		);
	}
}
// Register.propTypes = {
// 	linkText: React.PropTypes.string.isRequired,
	// tasks: React.PropTypes.array.isRequired,
	// onTaskClick: React.PropTypes.func.isRequired
// }
