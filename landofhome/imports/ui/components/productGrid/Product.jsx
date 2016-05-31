import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router'

// import ImageFillArea from './ImageFillArea.jsx'


export class Product extends React.Component {

	render() {

		const containerStyle = {
			textAlign: "center",
		}

		return (
			<div style={containerStyle} className="cmptProductGridProduct">
				<Link to="#" className="thumbnail">
					<Image src="/images/thumbnail.png" responsive />
					<p>{ this.props.product.name }</p>
				</Link>
			</div>
		);
	}
}
// ProductGrid.propTypes = {
// 	idx: React.PropTypes.string.isRequired,
// 	title: React.PropTypes.string.isRequired,
// }
