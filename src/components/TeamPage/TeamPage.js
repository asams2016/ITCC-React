import React, {Component} from 'react';
import TeamMemberEntry from './TeamMemberEntry';

// Get images
import image1 from '../../images/johndoe.jpg';
import image2 from '../../images/johndoe.jpg';
import image3 from '../../images/johndoe.jpg';
import image4 from '../../images/johndoe.jpg';

// Set props to send
const name = ['John Doe', 'John Doe', 'John Doe', 'John Doe'];
const bio = [
	'Info about John Doe.',
	'Info about John Doe.',
	'Info about John Doe.',
	'Info about John Doe.'
];

class TeamPage extends Component {
	render() {
		return(
			<div className="container-fluid">
				<h2>IT Command Center Team</h2>
				<TeamMemberEntry image={image1} name={name[0]} bio={bio[0]} />
				<TeamMemberEntry image={image2} name={name[1]} bio={bio[1]} />
				<TeamMemberEntry image={image3} name={name[2]} bio={bio[2]} />
				<TeamMemberEntry image={image4} name={name[3]} bio={bio[3]} />
			</div>
		);
	}
}

export default TeamPage;
