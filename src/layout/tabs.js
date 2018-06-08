import React from 'react'
import classNames from 'classnames'

import Anchor from '../dom/anchor.js'

class Tab extends React.Component {
  render() {
    let clickable = (typeof this.props.onClick === 'function')
    return (
      <Anchor
        className={classNames('qbo-tab', this.props.className, {
          active: this.props.active,
          clickable: clickable,
        })}
        tabIndex={clickable ? "0" : undefined}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Anchor>
    )
  }
}
Tab.defaultProps = {
  active: false,
  className: [],
}

class TabBar extends React.Component {
  render() {
    return (
      <ul className="qbo-tab-bar">
        {this.props.children.map((child, childIndex) => {
          return <li key={`tab-${childIndex}`}>{child}</li>
        })}
      </ul>
    )
  }
}

class TabList extends React.Component {
  render() {
    return (
      <ul className={classNames('qbo-tab-list', this.props.className)}>
        {this.props.children.map((child, childIndex) => {
          return <li key={`tab-${childIndex}`}>{child}</li>
        })}
      </ul>
    )
  }
}
TabList.defaultProps = {
  className: [],
}

export {
  Tab,
  TabBar,
  TabList,
}
