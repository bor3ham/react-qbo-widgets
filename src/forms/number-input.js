import React from 'react'

import Text from './text.js'
import { parseNumber, formatNumber } from '../utilities'

class NumberInput extends React.Component {
  handleBlur = (event) => {
    let parsed = parseNumber(this.props.value)
    if (!isNaN(parsed)) {
      let changed = (formatNumber(parsed, this.props.decimals) != this.props.value)
      if (changed) {
        this.props.onChange(formatNumber(parsed, this.props.decimals))
      }
    }
  }
  render() {
    return (
      <Text
        {...this.props}
        onBlur={this.handleBlur}
      />
    )
  }
}
NumberInput.defaultProps = {
  decimals: 0,
}

export default NumberInput
