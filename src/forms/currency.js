import React from 'react'

import Text from './text.js'
import { parseCurrency, formatCurrency } from '../utilities'

class Currency extends React.Component {
  handleBlur = (event) => {
    let parsed = parseCurrency(this.props.value, this.props.sign)
    if (!isNaN(parsed)) {
      let changed = (formatCurrency(parsed, this.props.sign, this.props.decimals) != this.props.value)
      if (changed) {
        this.props.onChange(formatCurrency(parsed, this.props.sign, this.props.decimals))
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
Currency.defaultProps = {
  sign: '$',
  decimals: 0,
}

export default Currency
