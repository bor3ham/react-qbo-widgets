import React from 'react'
import { Async } from 'react-select'
import classNames from 'classnames'

class AsyncSelect extends React.Component {
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
        <Async
          ref="select"
          {...this.props}
          className={classNames('qbo-text', this.props.className)}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
AsyncSelect.defaultProps = {
  className: [],
}

export default AsyncSelect
