import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div className="qbo-modal-header">
        {this.props.children}
      </div>
    )
  }
}
class Body extends React.Component {
  render() {
    return (
      <div className="qbo-modal-body" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}
Body.defaultProps = {
  style: {},
}
class Footer extends React.Component {
  render() {
    return (
      <div className="qbo-modal-footer">
        {this.props.children}
      </div>
    )
  }
}

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.handlePageClick)
    document.addEventListener('keydown', this.handlePageKeydown)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handlePageClick)
    document.removeEventListener('keydown', this.handlePageKeydown)
  }
  handlePageClick = (event) => {
    if (event.target) {
      let contained = (this.refs.modal === event.target || this.refs.modal.contains(event.target))
      // if a user clicked on an element that no longer exists, assume it was contained
      if (!document.body.contains(event.target)) {
        contained = true
      }
      if (!contained && typeof this.props.onClose === 'function') {
        this.props.onClose()
      }
    }
  }
  handlePageKeydown = (event) => {
    if (event.which === 27 && typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }
  render() {
    return (
      <div className="qbo-modal-backdrop">
        <div className="qbo-modal-container" style={this.props.containerStyle}>
          <div ref="modal" className="qbo-modal" style={this.props.style}>
            {typeof this.props.onClose === 'function' && (
              <span className="closer" onClick={this.props.onClose}>×</span>
            )}
            {this.props.header && (
              <Header>{this.props.header}</Header>
            )}
            <Body style={this.props.bodyStyle}>{this.props.children}</Body>
            {this.props.footer && (
              <Footer>{this.props.footer}</Footer>
            )}
          </div>
        </div>
      </div>
    )
  }
}
Modal.defaultProps = {
  header: null,
  footer: null,
  containerStyle: {},
  style: {},
  bodyStyle: {},
}

export default Modal
