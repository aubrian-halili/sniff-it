import React, { Component } from 'react';

const style = {
  padding: '.75rem 1.25rem',
  marginBottom: '1rem',
  border: '1px solid transparent',
  borderRadius: '.25rem',
  color: '#721c24',
  backgroundColor: '#f8d7da',
  borderColor: '#f5c6cb',
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={style}>
          We are sorry, but something sent wrong.
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
