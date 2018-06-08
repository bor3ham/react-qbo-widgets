import React from 'react'
import classNames from 'classnames'

class Button extends React.Component {
  handleClick = (event) => {
    if (typeof this.props.onClick === 'function') {
      if (event) {
        event.preventDefault()
      }
      if (!this.props.disabled) {
        this.props.onClick()
      }
    }
    else {
      // do nothing, let dom event fire
    }
  }
  render() {
    return (
      <button
        className={classNames('qbo-button', this.props.styleType)}
        type={this.props.type}
        onClick={this.handleClick}
        style={this.props.style}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
}
Button.defaultProps = {
  style: {},
  styleType: 'primary',
  type: 'button',
  disabled: false,
}

export default Button
