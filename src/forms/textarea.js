import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'

class Textarea extends React.Component {
  static defaultProps = {
    minRows: 1,
    maxRows: 10,
  }
  handleChange = (event) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event.target.value)
    }
  }
  focus() {
    this.textarea.focus()
  }
  render() {
    return (
      <TextareaAutosize
        className="qbo-textarea"
        ref="text"
        value={this.props.value || ''}
        {...this.props}
        onChange={this.handleChange}
        inputRef={tag => (this.textarea = tag)}
      />
    )
  }
}

export default Textarea
