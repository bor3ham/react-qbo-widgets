import React from 'react'
import classNames from 'classnames'

class Toggle extends React.Component {
  handleChange = () => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.refs.checkbox.checked)
    }
  }
  handleKeyDown = (event) => {
    if (event.which == 32) {
      if (event.target === this.refs.label) {
        event.preventDefault()
        if (typeof this.props.onChange === 'function' && !this.props.disabled) {
          this.props.onChange(!this.props.value)
        }
      }
    }
  }
  render() {
    return (
      <label
        ref="label"
        className={classNames('qbo-toggle', {
          checked: this.props.value,
          disabled: this.props.disabled,
        })}
        tabIndex={this.props.disabled ? undefined : "0"}
        onKeyDown={this.handleKeyDown}
      >
        <input
          className="toggle-check"
          ref="checkbox"
          type="checkbox"
          checked={this.props.value == true}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        />
        <div className="toggle" />
        {this.props.children}
      </label>
    )
  }
}
Toggle.defaultProps = {
  disabled: false,
}

export default Toggle
