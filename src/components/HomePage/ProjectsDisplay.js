import React, {Component} from 'react';
import projectPicture from "../../images/project1.png";
import "./HomePage.css";

class ProjectsDisplay extends Component {
	render() {
		return(
			<div className="display-section">
				<h2 className="content-header">Latest News</h2>
				<div className="row">
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} />
						<p className="figure-label">Project 1</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} />
						<p className="figure-label">Project 2</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} />
						<p className="figure-label">Project 3</p>
					</div>
					<div className="col-sm-3 col-md-3 col-lg-3">
						<img src={projectPicture} />
						<p className="figure-label">Project 4</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectsDisplay;
