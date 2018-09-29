import React, {Component} from 'react';
import newsPicture from "../../images/news4.jpg";
import "./HomePage.css";

class NewsDisplay extends Component {
	render() {
		return(
			<div className="display-section">
				<h2 className="content-header">Latest News</h2>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={newsPicture} />
						<p className="figure-label">News title 1</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={newsPicture} />
						<p className="figure-label">News title 2</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={newsPicture} />
						<p className="figure-label">News title 3</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={newsPicture} />
						<p className="figure-label">News title 4</p>
					</div>
				</div>
			</div>
		);
	}
}

export default NewsDisplay;
