import React from 'react'

class LoadingSpinner extends React.Component {
  render() {
    return (
      <svg
        className="qbo-loading-spinner"
        viewBox="25 25 50 50"
      >
        <circle
          className="track"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
        <circle
          className="path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="1.2"
          strokeMiterlimit="10"
        />
      </svg>
    )
  }
}

class FullscreenLoadingSpinner extends React.Component {
  render() {
    return (
      <div className="qbo-fullscreen-spinner">
        <LoadingSpinner />
      </div>
    )
  }
}

export {
  LoadingSpinner,
  FullscreenLoadingSpinner,
}
