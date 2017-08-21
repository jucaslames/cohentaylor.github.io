import React from 'react';
import Link from 'gatsby-link';
import BCorp from '../layouts/BCorp.jsx';
import Hero from '../layouts/Hero.jsx';
import 'react-flexbox-layout/lib/styles.css';
//import MyComponent from '../layouts/GoogleSpreadsheet.jsx';


const IndexPage = () => (
  	<div>
		<div className="hero">
			<Hero />
		</div>

		<div className="bcorp">
			<BCorp />
		</div>
  	</div>
)

export default IndexPage
//<Link to="/page-2/">Go to page 2</Link>