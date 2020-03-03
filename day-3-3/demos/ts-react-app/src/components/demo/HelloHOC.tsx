import React, { Component } from "react";
import HelloClass from "./HelloClass";
import Hello from "./Hello";

interface Loading {
  loading: boolean;
}

function HelloHOC<P>(WrappedComopnent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? (
        <div>Loading...</div>
      ) : (
        <WrappedComopnent {...(props as P)}></WrappedComopnent>
      );
    }
  };
}

export default HelloHOC(Hello);
