import React from 'react';
import colorLine from '../assets/color-line.jpg';
import CTLogo from '../assets/rectlogo-exec.jpg';
import '../scss/styles.scss';

class Hero extends React.Component {
	render() {
		return (
			<div>
				<div className="hero-container">
				    <img className="color-line" src={colorLine} alt="CohenTaylor colors" />
				    <img className="ct-logo" src={CTLogo} alt="CohenTaylor logo" />
				    <div className="cover">
				    	<h1 className="slogan">Purpose. Process. People.</h1>
	    			</div>
				</div>
			</div>
		)
	}
}

export default Hero;