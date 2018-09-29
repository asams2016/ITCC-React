import React, {Component} from 'react';
import splunkLogo from "../../images/splunk-logo.svg";
import "./HomePage.css";

class SplunkTeaserDisplay extends Component {
	render() {
		return(
			<div className="display-section">
				<div className="row" style={{backgroundColor: "black", padding: "50px"}}>
					<div className="col-sm-4 col-md-4 col-lg-4">
						<img width="100%" height="auto" src={splunkLogo} />
					</div>
					<div className="col-sm-8 col-md-8 col-lg-8">
						<p style={{color: "white"}}>Do you have machine data, but no good way to process it?</p>
						<p style={{color: "white"}}>Would your team benefit from dashboards monitoring your data and
						using machine learning to alert on anomalies?</p>
						<p style={{color: "white"}}>FedEx now has Splunk functionality to ingest and analyze data.</p>
						<a href="./tools/splunk/about.html">
							<button style={{backgroundColor: "#35c433", color: "white"}} className="btn">
								Click here to learn more
							</button>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default SplunkTeaserDisplay;
