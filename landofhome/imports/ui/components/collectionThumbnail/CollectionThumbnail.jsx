import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'

import ImageFillArea from '../ImageFillArea.jsx'


export default class CollectionThumbnail extends React.Component {

	// handleClick(e) {
	// 	e.preventDefault();
	// 	this.history.pushState(null, '/collection/'+this.props.idx);
	// }

	render() {

		const containerStyle = {
			backgroundColor: '#FFFFFF',
			padding: 6,
			cursor: 'pointer',
			display: 'block'
		};
		const titleContainerStyle = {
			paddingTop: 12,
			paddingBottom: 4,
			paddingLeft: 4
		};
		const colRemovePadding = {
			paddingLeft: 0,
			paddingRight: 0
		};
		const colSmallPadding = {
			paddingLeft: 3,
			paddingRight: 0
		};
		const secondaryImageHeight = this.props.primaryImageHeight / 3;


		return (
			<Link style={containerStyle} className="cmptCollectionThumbnail" to={'/collection/'+this.props.idx}>
				<div className="clearfix">
					<Col md={7} style={colRemovePadding}>
						<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={this.props.primaryImageHeight} />
					</Col>
					<Col md={5} style={colSmallPadding}>
						<div>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
						</div>
						<div>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
						</div>
						<div>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
							<Col md={4} style={colRemovePadding}>
								<ImageFillArea imagePath="/images/thumbnail.png" imageHeight={secondaryImageHeight} />
							</Col>
						</div>
					</Col>
				</div>
				<div style={titleContainerStyle}>
					<h2>{this.props.title}</h2>
					<p>We've found 38 product ideas</p>
				</div>
			</Link>
		);
	}
}
CollectionThumbnail.propTypes = {
	idx: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired,
	primaryImagePath: React.PropTypes.string.isRequired,
	primaryImageHeight: React.PropTypes.number.isRequired
}
