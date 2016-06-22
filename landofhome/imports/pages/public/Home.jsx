import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import CollectionThumbnail from '/imports/ui/components/collectionThumbnail/CollectionThumbnail.jsx';


export default class Home extends React.Component {

	getCollections() {
		return ([
			{_id: 1, title: "A Maritime Moment 1"},
			{_id: 2, title: "A Maritime Moment 2"},
			{_id: 3, title: "A Maritime Moment 3"},
			{_id: 4, title: "A Maritime Moment 4"},
		]);
	}

	render() {

		const fluidContainerStyle = {
			// backgroundColor: '#ebebeb',
			backgroundColor: '#fff',
		};
		const containerStyle = {
			// padding: '12px 0.9375rem',
		};
		const secondaryRowStyle = {
			marginTop: "1.875rem"
		};
		const thumbnailStyle = {
			paddingTop: 12,
			paddingBottom: 12
		}
		const primaryImageHeight = 180;

		const colWidthLg = 6;

		return (
			<div className="fluid-container" style={fluidContainerStyle}>
				<div className="container" style={containerStyle}>
					<Row>
						{this.getCollections().map((collection) => (
							<Col lg={colWidthLg} style={thumbnailStyle}>
								<CollectionThumbnail
									key={collection._id}
									idx={collection._id}
									title={collection.title}
									primaryImagePath="/images/thumbnail.png"
									primaryImageHeight={primaryImageHeight}
								/>
							</Col>
						))}
					</Row>
				</div>
			</div>
		);
	}
}
