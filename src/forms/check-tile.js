import React from 'react'
import classNames from 'classnames'

class CheckTileset extends React.Component {
  render() {
    return (
      <div className="qbo-check-tileset">
        {this.props.children}
      </div>
    )
  }
}

class CheckTile extends React.Component {
  handleChange = () => {
    if (typeof this.props.onChange === 'function' && !this.props.disabled) {
      this.props.onChange(this.refs.check.checked)
    }
  }
  handleKeyDown = (event) => {
    if (event.which == 32) {
      if (event.target === this.refs.label) {
        event.preventDefault()
        if (typeof this.props.onChange === 'function' && !this.props.disabled) {
          this.props.onChange(!this.props.value)
        }
      }
    }
  }
  handleLabelClick = (event) => {
    let foundUnclickable = false
    let parent = event.target
    while (parent && parent != this.refs.label) {
      if (parent.classList) {
        if (parent.classList.contains('qbo-tile-ignore-clicks')) {
          foundUnclickable = true
        }
      }
      else {
        if (new RegExp('(^| )qbo-tile-ignore-clicks( |$)', 'gi').test(parent.className)) {
          foundUnclickable = true
        }
      }
      parent = parent.parentElement
    }
    if (foundUnclickable) {
      // weird event stopping
      if (event.target.nodeName == 'A') {
        event.preventDefault()
      }
      else {
        event.stopPropagation()
      }
    }
  }
  render() {
    return (
      <label
        ref="label"
        tabIndex="0"
        className={classNames('qbo-check-tile', this.props.className, {
          checked: this.props.value,
          disabled: this.props.disabled,
        })}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleLabelClick}
      >
        <input
          className="qbo-check-tile-box"
          ref="check"
          type="checkbox"
          checked={this.props.value === true}
          onChange={this.handleChange}
          disabled={this.props.disabled}
        />
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${this.props.value ? this.props.checkedImage : this.props.image})`,
          }}
        />
        <span className="label-contents">
          {this.props.children}
        </span>
      </label>
    )
  }
}
CheckTile.defaultProps = {
  className: [],
  checkedImage: '/static/check.svg',
}

export { CheckTileset, CheckTile }
