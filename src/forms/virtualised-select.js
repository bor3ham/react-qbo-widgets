import React from 'react'
import Virtualised from 'react-virtualized-select'
import classNames from 'classnames'

class VirtualisedSelect extends React.Component {
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
        <Virtualised
          ref="select"
          {...this.props}
          className={classNames('qbo-text', this.props.className)}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}
VirtualisedSelect.defaultProps = {
  className: [],
}

export default VirtualisedSelect
