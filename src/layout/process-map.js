import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

class ProcessItem extends React.Component {
  render() {
    return (
      <div className={classNames('qbo-process-item', {
        active: this.props.active,
        previous: this.props.previous,
      })}>
        <span className="number">{this.props.previous ? '✔' : this.props.index}</span>
        <span className="title">{this.props.title}</span>
      </div>
    )
  }
}

class ProcessMap extends React.Component {
  render() {
    let children = this.props.children
    if (!Array.isArray(children)) {
      children = [children]
    }
    let hitActive = false
    let activeIndex = 0
    children = this.props.children.map((child, childIndex) => {
      if (child.props.active) {
        hitActive = true
        activeIndex = childIndex
      }
      return React.cloneElement(child, {
        key: `item-${childIndex}`,
        index: childIndex + 1,
        previous: (!child.props.active && !hitActive),
      })
    })
    return (
      <div className={classNames('qbo-process-map', this.props.mode)}>
        <div className="summary">Step {activeIndex + 1} of {children.length}</div>
        <div className="children">
          {children}
        </div>
      </div>
    )
  }
}
ProcessMap.defaultProps = {
  mode: 'chapters',
}
ProcessMap.propTypes = {
  mode: PropTypes.oneOf(['chapters', 'bar']),
}

export { ProcessMap, ProcessItem }
