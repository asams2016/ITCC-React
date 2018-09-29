import React, {Component} from 'react';

class TeamMemberEntry extends Component {
	render() {
		return(
			<div className="display-section">
				<div className="row">
					<div className="col-sm-6 col-md-3 col-lg-3 col-md-offset-3 col-lg-offset-3">
						<img src={this.props.image} />
					</div>
					<div className="col-sm-6 col-md-3 col-lg-3">
						<h3>{this.props.name}</h3>
						<p>{this.props.bio}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default TeamMemberEntry;
