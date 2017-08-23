import React from 'react';
//import Flexbox from 'flexbox-react';
//import { HLayout, HLayoutItem, VLayout, VLayoutItem } from 'react-flexbox-layout';
import { Grid, Row, Col } from 'react-flexbox-grid';
import colorLine from '../components/assets/color-line.jpg';
import CTLogo from '../components/assets/rectlogo-exec.jpg';
import '../components/components.scss';

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