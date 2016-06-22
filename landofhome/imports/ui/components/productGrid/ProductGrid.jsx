import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router'

// import ImageFillArea from './ImageFillArea.jsx'
import { Product } from './Product.jsx'


export class ProductGrid extends React.Component {

	render() {

		const rowStyle = {
			paddingTop: 12,
			paddingBottom: 12
		}
		const colStyle = {
			paddingTop: 12,
			paddingBottom: 12
		}

		return (
			<div className="row clearfix cmptProductGrid" style={rowStyle}>
				{this.props.products.map((product) => (
					<Col lg={15} sm={4} xs={6} style={colStyle} key={product._id}>

						<Product product={product} />

					</Col>
				))}
			</div>
		);
	}
}
// ProductGrid.propTypes = {
// 	idx: React.PropTypes.string.isRequired,
// 	title: React.PropTypes.string.isRequired,
// }
