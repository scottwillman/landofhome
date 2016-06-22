import React from 'react';
import { Image, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';



export class Product extends React.Component {

	randomImageSize() {
		return ({
			width: Math.round(Math.random()*100+100),
			// height: Math.round(Math.random()*100+100)
			height: 200
		});
	}

	render() {

		const containerStyle = {
			// textAlign: "center",
		}
		const imageStyle = {

		}

		return (
			<div style={containerStyle} className="cmptProductGridProduct">

				<div className="cmptProductGridProductImage">
					<Image src={this.props.product.image} />
				</div>


				<div className="cmptProductGridProductTitle">{ this.props.product.name }</div>

				<div className="clearfix cmptProductGridProductFooter">
					<div style={{float:'left'}}>
						{ this.props.product.price }
					</div>
					<div style={{float:'right'}}>
						<DropdownButton bsStyle='link' title='farts'>
							<MenuItem eventKey='1'>Test 1</MenuItem>
							<MenuItem eventKey='2'>Test 2</MenuItem>
						</DropdownButton>
					</div>
				</div>
			</div>
		);
	}
}
// ProductGrid.propTypes = {
// 	idx: React.PropTypes.string.isRequired,
// 	title: React.PropTypes.string.isRequired,
// }
