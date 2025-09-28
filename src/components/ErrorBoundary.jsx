import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    // Update state to indicate an error occurred
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // You can log errors here or send to error tracking service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      // Fallback UI when error is encountered
      return <h1>Something went wrong.</h1>;
    }
    // Render child components normally if no error
    return this.props.children; 
  }
}
