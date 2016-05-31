import React from 'react'
import { Link } from 'react-router'

export default class NavLink extends React.Component {
  	render() {
		let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "nav-item active" : "nav-item";

		return (
			<li className={className}>
				<Link {...this.props} className="nav-link" />
			</li>
		)
	}
}
NavLink.contextTypes = {
	router: React.PropTypes.object.isRequired
}
