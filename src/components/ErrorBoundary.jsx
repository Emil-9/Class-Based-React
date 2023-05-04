import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  // this is one of the reasons to use class based components -> is to create error boundaries
  //   it's a method from react for throughing an error
//   the error will be shown in development environment 
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
        return (<p>something is wrong</p>)
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
