import React from 'react';

class Button extends React.Component {
  constructor(props) { }
  render() {
    return <div>
      <h1>{this.props.name}</h1>
    </div>
  }
}

Button.propTypes = {
  name: PropTypes.string
}