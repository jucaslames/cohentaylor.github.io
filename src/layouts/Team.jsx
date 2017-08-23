import React from 'react';
import '../components/components.scss';
import ChrisCohen from '../assets/team/chris-cohen.jpg';
import DonTaylor from '../assets/team/don-taylor.jpg';
import JoelBergstrom from '../assets/team/joel-bergstrom.jpg';
import KatieErickson from '../assets/team/katie-erickson.jpg';
import TeamMember from './TeamMember.jsx';

const photos = [ChrisCohen, DonTaylor, JoelBergstrom, KatieErickson];

class WholeTeam extends React.Component {
	makeTeamMember() {
		for (var photo in photos) {
			
		}
	}

	render() {
		return (
			<div>
				<div className="section-intro"><h1>Our team</h1></div>
				<div className="team-container">

				</div>
			</div>
		)
	}
}

export default WholeTeam;