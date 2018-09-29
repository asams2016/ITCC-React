import React, { Component } from 'react';
import {connect} from 'react-redux';
import ScrollUpButton from "react-scroll-up-button";
import changePage from '../../redux/actions/changePage';

// Import components
import NavigationBar from "../NavigationBar/NavigationBar";
import BannerTitle from "../BannerTitle/BannerTitle";
import DataOnboardingPage from "../DataOnboardingPage/DataOnboardingPage";
import HomePage from "../HomePage/HomePage";
import AboutSplunkPage from "../AboutSplunkPage/AboutSplunkPage";
import ServiceMappingPage from "../ServiceMappingPage/ServiceMappingPage";
import NewsPage from "../NewsPage/NewsPage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import TeamPage from "../TeamPage/TeamPage";
import ContactPage from "../ContactPage/ContactPage";

class App extends Component {
  renderContent(page) {
	switch(this.props.page){
		case "home":
			return <HomePage />;
		case "aboutSplunk":
			return <AboutSplunkPage />;
		case "dataOnboarding":
			return <DataOnboardingPage />;
		case "serviceMapping":
			return <ServiceMappingPage />;
		case "news":
			return <NewsPage />;
		case "projects":
			return <ProjectsPage />;
		case "team":
			return <TeamPage />;
		case "contact":
			return <ContactPage />
		default: 
			return <HomePage />;
	}
  }

  render() {
    return (
    	<div className="App" store={this.props.store}>
      		<NavigationBar />
		<BannerTitle />
		{this.renderContent(this.props.page)}
		<ScrollUpButton />
      	</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		page: state.page
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changePage: (newPage) => {
			dispatch(changePage(newPage))
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
