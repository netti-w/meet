import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.class = 'alert'
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: '14px',
    };
  }

  getClass = () => {
    return this.class;
  }

  render() {
    return (
      <div className={`alert ${this.getClass()}`}>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#154b87';
    this.class = 'info-alert'
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ffa500';
    this.class = 'warning-alert'
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ba160c';
    this.class = 'error-alert'
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };