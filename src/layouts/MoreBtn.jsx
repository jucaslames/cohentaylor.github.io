import React from 'react';
import '../components/components.scss';
var FontAwesome = require('react-fontawesome');

class MoreBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  //var down-arrow = <FontAwesome name='fa-angle-right' />
  //<FontAwesome name='fa-angle-right' />
  //<FontAwesome name='fa-angle-down' />

  render() {
    return (
      <div>
        <div className="more-btn" onClick={this.handleClick}>
          {this.state.isToggleOn ? '> more' : '^ less'}
        </div>
      </div>
    );
  }
}

export default MoreBtn;