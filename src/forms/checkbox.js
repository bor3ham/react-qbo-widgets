import React from 'react'
import classNames from 'classnames'

class Checkbox extends React.Component {
  handleChange = () => {
    if (typeof this.props.onChange === 'function' && !this.props.disabled) {
      this.props.onChange(this.refs.check.checked)
    }
  }
  render() {
    let toggleable = (typeof this.props.onChange === 'function')
    return (
      <label className={classNames('qbo-checkbox', {
        disabled: this.props.disabled,
        inline: this.props.inline,
        'not-inline': !this.props.inline,
        toggleable: toggleable,
      })}>
        <input
          tabIndex={toggleable ? '0' : '-1'}
          ref="check"
          type="checkbox"
          checked={this.props.value === true}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        /> <div className="children">{this.props.children}</div>
      </label>
    )
  }
}
Checkbox.defaultProps = {
  inline: true,
}

export default Checkbox
