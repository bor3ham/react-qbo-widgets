import React from 'react'
import classNames from 'classnames'

class Anchor extends React.Component {
  handleClick = (event) => {
    if (typeof this.props.onClick === 'function') {
      if (event) {
        event.preventDefault
      }
      this.props.onClick()
    }
    else {
      // let the dom do its thing
    }
  }
  render() {
    return (
      <a
        {...this.props}
        className={classNames('qbo-anchor', this.props.className)}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    )
  }
}
Anchor.defaultProps = {
  style: {},
  className: [],
}

export default Anchor
