import React from 'react'
import moment from 'moment'

import { StrictDayInput } from 'react-day-input'

class DayInput extends React.Component {
  render() {
    return (
      <div className="qbo-day-input">
        <StrictDayInput
          weekdayFormat={(day) => {
            return moment(day, 'x').format('ddd')[0]
          }}
          inputClassName="qbo-text"
          {...this.props}
        />
      </div>
    )
  }
}

export default DayInput
