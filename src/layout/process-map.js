import React from 'react'
import classNames from 'classnames'

class ProcessMap extends React.Component {
  render() {
    let children = this.props.children
    if (!Array.isArray(children)) {
      children = [children]
    }
    return (
      <div className="qbo-process-map">
        {this.props.children.map((child, childIndex) => {
          return React.cloneElement(child, {
            key: `item-${childIndex}`,
            index: childIndex + 1,
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
      })}>
        <span className="number">{this.props.index}</span>
        <span className="title">{this.props.title}</span>
      </div>
    )
  }
}

export { ProcessMap, ProcessItem }
