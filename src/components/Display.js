import React from 'react'
import PropTypes from 'prop-types';

class Display extends React.Component {
  constructor(props) { }
  render() {
    return <div>
      <h1>{this.props.result}</h1>
    </div>
  }
}

Display.defaultProps = {
  result: '0',
}

Display.propTypes = {
  result: PropTypes.string
}

export default Display
