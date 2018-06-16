import React from 'react'
import classNames from 'classnames'

import Button from './button.js'

class ChoiceIncrementer extends React.Component {
  render() {
    let prevChoice = null
    let nextChoice = null
    let currentChoice = null
    let lastIterChoice = null
    this.props.options.map((option) => {
      if (option.value === this.props.value) {
        prevChoice = lastIterChoice
        currentChoice = option
      }
      else {
        if (currentChoice && !nextChoice) {
          nextChoice = option
        }
      }
      lastIterChoice = option
    })

    let renderedCurrentChoice = '-'
    if (currentChoice) {
      renderedCurrentChoice = currentChoice.label
    }

    return (
      <div
        style={this.props.style}
        className={classNames('qbo-choice-incrementer', {
          disabled: this.props.disabled,
        })}
      >
        <Button
          styleType="secondary"
          onClick={() => {
            this.props.onChange(prevChoice ? prevChoice.value : null)
          }}
          disabled={prevChoice === null || this.props.disabled}
        >−</Button>
        <div className="value-label">{renderedCurrentChoice}</div>
        <Button
          styleType="secondary"
          onClick={() => {
            this.props.onChange(nextChoice ? nextChoice.value : null)
          }}
          disabled={nextChoice === null || this.props.disabled}
        >+</Button>
      </div>
    )
  }
}
ChoiceIncrementer.defaultProps = {
  style: {},
}

export default ChoiceIncrementer
