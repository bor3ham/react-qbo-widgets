import React from 'react'

class Text extends React.Component {
  handleChange = (event) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(this.refs.text.value)
    }
  }
  focus() {
    this.refs.text.focus()
  }
  render() {
    return (
      <input
        className="qbo-text"
        ref="text"
        type="text"
        value={this.props.value || ''}
        {...this.props}
        onChange={this.handleChange}
      />
    )
  }
}

export default Text
