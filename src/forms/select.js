import React from 'react'
import ReactSelect from 'react-select'
import classNames from 'classnames'

class Select extends React.Component {
  handleChange = (newValue) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(newValue ? newValue.value : null)
    }
  }
  focus() {
    this.refs.select.focus()
  }
  render() {
    return (
      <div className="qbo-select">
        <ReactSelect
          ref="select"
          {...this.props}
          className={classNames('qbo-text', this.props.className)}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
Select.defaultProps = {
  className: [],
}

export default Select
