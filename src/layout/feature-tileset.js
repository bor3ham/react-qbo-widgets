import React from 'react'
import classNames from 'classnames'

class FeatureTileset extends React.Component {
  render() {
    return (
      <div className={classNames('qbo-feature-tileset', this.props.className)}>
        {this.props.children}
      </div>
    )
  }
}
FeatureTileset.defaultProps = {
  className: [],
}

class FeatureTile extends React.Component {
  render() {
    return (
      <div className="qbo-feature-tile">
        {this.props.image && (
          <div className="qbo-feature-tile-icon">
            <img src={this.props.image} />
          </div>
        )}
        <div className="qbo-feature-tile-content">
          {this.props.title && (
            <h3>{this.props.title}</h3>
          )}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export {
  FeatureTileset,
  FeatureTile,
}
