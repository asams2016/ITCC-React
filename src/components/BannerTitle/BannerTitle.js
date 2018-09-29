import React, {Component} from 'react';
import banner from '../../images/web-development-banner.jpg';
import './BannerTitle.css';

class BannerTitle extends Component {
	render() {
		return(
        		<div className="title text-center">
          			<img src={banner} alt="banner" className="banner-image" style={{width: "100%"}}/>
				<h1 className="centered-title">IT Command Center</h1>
        		</div>
		);
	}
}

export default BannerTitle;
