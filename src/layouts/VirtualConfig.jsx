import React from 'react';
import Link from 'gatsby-link';
import BCorp from '../layouts/BCorp.jsx';
import Hero from '../layouts/Hero.jsx';
import 'react-flexbox-layout/lib/styles.css';

class VirtualConfig extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	headerContent: [],
	    	bcorpContent: [],
    }
    this.updateHeader = this.updateHeader.bind(this);
    this.updateBCorp = this.updateBCorp.bind(this);

    updateHead() {
    	this.setState({ headerContent: 'hey' })
  	}

  	updateBCorp() {
    	this.setState({ bcorpContent: 'yo' })
  	}

  	//add  agoogle doc so that everything is editable. can defs use tabletop

    render() {
    	return (

    	)
    }
}