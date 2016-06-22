import React from 'react';
import { Link } from 'react-router'
import { Grid, Row, Col, Image } from 'react-bootstrap';

import { ProductGrid } from '/imports/ui/components/productGrid/ProductGrid.jsx';


export default class Collection extends React.Component {

	getProducts() {
		// this.props.collectionId
		return ([
			{_id:1, image: '/images/product_01.jpeg', name:'Moder Maria Teresa Grand', price: '$342.99'},
			{_id:2, image: '/images/product_02.jpeg', name:'Teresa Grand Chandelier', price: '$2.99'},
			{_id:3, image: '/images/product_03.jpeg', name:'James R. Moder Maria Teresa Grand Chandelier', price:'$1,218'},
			{_id:4, image: '/images/product_04.jpeg', name:'James R. Moder', price: '$99'},
			{_id:5, image: '/images/product_05.jpeg', name:'Moder Maria Teresa Grand Chandelier Moder Maria Teresa', price:'$1,218.01'},
			{_id:6, image: '/images/product_06.jpeg', name:'product 6'},
			{_id:7, image: '/images/product_07.jpeg', name:'product 7'},
			{_id:8, image: '/images/product_08.jpeg', name:'product 8'}
		]);
	}

	render() {

		const containerStyle = {
			paddingTop: '1rem',
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
		const productGridStyle = {
			paddingTop: '2rem'
		}

		return (
			<div>
				<div className="container" style={containerStyle}>
					<Col lg={6} sm={1} xs={1} style={{paddingLeft: 0}}>
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
				<div className="container" style={productGridStyle}>
					<ProductGrid products={this.getProducts()} rowSize='4' />
				</div>
			</div>
		);
	}
}
