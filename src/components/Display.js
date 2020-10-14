import React from 'react'
import PropTypes from 'prop-types';

export class Display extends React.Component {
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
