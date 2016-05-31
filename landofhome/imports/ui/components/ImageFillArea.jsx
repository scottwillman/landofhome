import React from 'react';


export default class ImageFillArea extends React.Component {

	render() {

		const imageStyle = {
			backgroundImage: 'url('+this.props.imagePath+')',
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			height: this.props.imageHeight+"px",
			width: "100%",
			opacity: Math.random() * (1 - .4) + .4 // Just for visualization using the same gray image everywhere
		}

		return (
			<div style={imageStyle}></div>
		);
	}
}
ImageFillArea.propTypes = {
	imagePath: React.PropTypes.string.isRequired,
	imageHeight: React.PropTypes.number.isRequired
}
