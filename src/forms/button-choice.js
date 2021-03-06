import React from 'react'

import Button from './button.js'

class ChoiceButton extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.value)
  }
  render() {
    return (
      <Button
        styleType={this.props.active ? 'primary' : 'secondary'}
        onClick={this.handleClick}
        disabled={this.props.disabled}
      >
        {this.props.label}
      </Button>
    )
  }
}

class ButtonChoice extends React.Component {
  handleChoiceClick = (value) => {
    if (!this.props.disabled && typeof this.props.onChange === 'function') {
      this.props.onChange(value)
    }
  }
  render() {
    let choices = []
    this.props.options.map((option, optionIndex) => {
      choices.push(<ChoiceButton
        key={`choice-${option.value}`}
        label={option.label}
        value={option.value}
        active={option.value === this.props.value}
        onClick={this.handleChoiceClick}
        disabled={this.props.disabled}
      />)
      if (optionIndex < this.props.options.length - 1) {
        choices.push(' ')
      }
    })
    return (
      <div>{choices}</div>
    )
  }
}

export default ButtonChoice
