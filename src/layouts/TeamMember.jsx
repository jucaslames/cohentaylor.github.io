import React from 'react';
import '../scss/styles.scss';
import MoreBtn from './MoreBtn.jsx';

class TeamMember extends React.Component {
	render() {
		return (
			<div className="team-member-container">
				<img className="team-member-headshot" src={this.props.teamMemberPhoto} />
				<h3 className="team-member-name">{this.props.teamMemberName}</h3>
				<p className="team-member-top-bio">{this.props.teamMemberTopBio}</p>
				<MoreBtn />
				<p className="team-member-bottom-bio">{this.props.teamMemberBottomBio}</p>
			</div>
		)
	}
}

export default TeamMember;