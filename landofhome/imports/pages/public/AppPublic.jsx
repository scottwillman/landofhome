import React from 'react';
import { IndexLink, Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

import NavLink from '../../ui/components/nav/NavLink.jsx';
import AccountsNavbar from '../../ui/components/accounts/AccountsNavbar.jsx';


export default class extends React.Component {
	render() {
		return (
			<div>

				<div id="loh-public-top-header" className="container clearfix">
					<div className="pull-lg-left">
						<IndexLink to="/" className="navbar-brand">LAND of HOME</IndexLink>
					</div>
					<div className="pull-lg-right">
						<AccountsNavbar />
					</div>
				</div>

				<nav id="loh-navbar-main" className="navbar navbar-full navbar-light">
					<div className="container">
						<ul className="nav navbar-nav">
							<NavLink to="/">Home</NavLink>
							<NavLink to="/tag/kitchens">Kitchens</NavLink>
							<NavLink to="/tag/bedrooms">Bedrooms</NavLink>
							<NavLink to="/tag/beach">Beach</NavLink>
							<NavLink to="/tag/summer">Summer</NavLink>
							<NavLink to="/collection/1">Special</NavLink>
						</ul>
					</div>
				</nav>

				<div id="loh-public-primary-content-container">
					{this.props.children}
				</div>

				<div id="loh-footer" className="container">
					<Col md={3}>About Us</Col>
					<Col md={3}>Terms of Service</Col>
					<Col md={3}>Privacy</Col>
					<Col md={3}>Help</Col>
				</div>
			</div>
		);
	}
}

// <MyList listName={this.getList()} tasks={this.getTasks()} onTaskClick={this.onTaskClick.bind(this)} />
