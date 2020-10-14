import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return <div>
      <h1>{this.props.name}</h1>
    </div>
  }
}

Button.propTypes = {
  name: PropTypes.string
}
