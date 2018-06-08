import React from 'react'

class StepHeader extends React.Component {
  render() {
    return (
      <div className="qbo-step-header">
        <div className="bar pre" />
        <h2>
          {this.props.number && (
            <span className="number">{this.props.number}</span>
          )}{this.props.children}
        </h2>
        <div className="bar post" />
      </div>
    )
  }
}

export default StepHeader
