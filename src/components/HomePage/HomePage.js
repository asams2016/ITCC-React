import React, {Component} from 'react';
import "./HomePage.css";
import NewsDisplay from "./NewsDisplay";
import ProjectsDisplay from "./ProjectsDisplay";
import SplunkTeaserDisplay from "./SplunkTeaserDisplay";

class HomePage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<NewsDisplay />
				<ProjectsDisplay />
				<SplunkTeaserDisplay />
			</div>
		);
	}
}

export default HomePage;
