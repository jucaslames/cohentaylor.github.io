import React from 'react';
import '../scss/styles.scss';
import MoreBtn from './MoreBtn.jsx';

class Values extends React.Component {
	render() {
		return (
			<div>
				<div className="values-container">
					<div className="section-intro"><h1>We find leaders who truly share your values.</h1></div>
					<div className="values-circles-container">
						<div className="value-circle">
							<h3 className="values-title">Purpose first</h3>
							<div><button className="more-btn"> > more </button></div>
						</div>
						<div className="value-circle">
							<h3 className="values-title">Purpose first</h3>
							<div><button className="more-btn"> > more </button></div>
						</div>
						<div className="value-circle">
							<h3 className="values-title">Purpose first</h3>
							<MoreBtn />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Values;