import React from 'react';
import BCorpLogo from '../assets/bcorp-logo.png';
//import MyComponent from './GoogleSheet.jsx'
import '../scss/styles.scss';

class BCorp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			moreBtnText: '> more'
		}
		this.onMoreClick = this.onMoreClick.bind(this);
	}

	onMoreClick(button) {
		this.setState({ moreBtnText: '< less' })
	}

	render() {
		return (
			<div>
				<div className="bcorp-container">
					<div className="bcorp-width">
							<img className="bcorp-logo" src={BCorpLogo} alt="Logo" />
							<div className="bcorp-vertical-line"></div>
							<div className="bcorp-info">
								<div className="bcorp-top-content"><h3> We're deeply committed to the nonprofit sector. <br /> In fact, we're undergoing the rigorous standards to earn B Corporation certification.</h3></div>
								<div><button className="more-btn" onClick={this.onMoreClick.bind(this)}> {this.state.moreBtnText} </button></div>
								<div className="bcorp-more-content"><h4> CohenTaylor is being certified by nonprofit B Lab as a B Corporation. Because we believe that successful business is more than profit margins, our values of sustainability, honesty, and transparancy lead our day-to day work and have allowed us to apply for this certification. We are a force for good, and our B Corp status reinforces that founding principle. Click on the logo to the left to learn more. </h4></div>
							</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BCorp;