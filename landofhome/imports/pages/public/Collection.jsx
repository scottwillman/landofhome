import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { ProductGrid } from '../../ui/components/productGrid/ProductGrid.jsx'

export default class Collection extends React.Component {

	getProducts() {
		// this.props.collectionId
		return ([
			{_id:1, name:'product 1'},
			{_id:2, name:'product 2'},
			{_id:3, name:'product 3'},
			{_id:4, name:'product 4'},
			{_id:5, name:'product 5'},
			{_id:6, name:'product 6'},
			{_id:7, name:'product 7'},
			{_id:8, name:'product 8'}
		]);
	}

	render() {

		const fluidContainerStyle = {
			backgroundColor: '#ebebeb',
		};
		const containerStyle = {
			padding: '0 0.9375rem',
		};
		const mainImageStyle = {
			float: 'right',
			maxHeight: 400
		}
		const mainSourceStyle = {
			padding: '1.45rem 1rem'
		}
		const imageSourceStyle = {
			marginTop: '.8rem'
		}

		return (
			<div>
				<div className="fluid-container" style={fluidContainerStyle}>
					<div className="container" style={containerStyle}>
						<Col lg={6} sm={1} xs={1}>
							<Image src="http://placehold.it/600x350" className="img-fluid" style={mainImageStyle} />
						</Col>
						<Col lg={6} sm={1} xs={1} style={mainSourceStyle} id="loh-collection-header">
							<h2>A Maritime Moment 1</h2>
							<p id="loh-collection-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus odio est, lacinia vel magna eget, consequat consectetur mauris. Sed dui purus, lobortis sit amet commodo quis, semper laoreet lorem. Quisque varius, ipsum eget malesuada vehicula, ante dolor vehicula lacus, et iaculis nisl erat vitae velit. Morbi vel neque sodales neque fermentum consequat quis et lectus. Integer eleifend mi non sapien egestas, vitae fringilla dui egestas. Ut condimentum mauris ac dolor dictum ultricies. </p>
							<div id="loh-collection-retailers">
								<div>Featured Retailers: <Link to="http://">Anthropologie</Link>, <Link to="http://">eFaucets</Link>, <Link to="http://">Lights Plus</Link>
								</div>
							</div>
							<div id="loh-collection-imagesource" style={imageSourceStyle}>
								<Link to="http://" target="_blank">Image Source</Link>
							</div>
						</Col>
					</div>
				</div>
				<div className="container">
					<ProductGrid products={this.getProducts()} />
				</div>
			</div>
		);
	}
}
