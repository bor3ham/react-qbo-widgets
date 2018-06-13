import React from 'react'
import classNames from 'classnames'

class ProcessMap extends React.Component {
  render() {
    let children = this.props.children
    if (!Array.isArray(children)) {
      children = [children]
    }
    let hitActive = false
    return (
      <div className="qbo-process-map">
        {this.props.children.map((child, childIndex) => {
          if (child.props.active) {
            hitActive = true
          }
          return React.cloneElement(child, {
            key: `item-${childIndex}`,
            index: childIndex + 1,
            previous: (!child.props.active && !hitActive),
          })
        })}
      </div>
    )
  }
}

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

export { ProcessMap, ProcessItem }
