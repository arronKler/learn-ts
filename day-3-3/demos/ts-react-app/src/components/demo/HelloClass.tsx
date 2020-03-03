import React, { Component } from "react";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

interface State {
  count: number;
}
class HelloClass extends Component<Greeting, State> {
  state: State = {
    count: 0
  };

  static defaultProps = {
    firstName: "",
    lastName: ""
  };

  render() {
    return (
      <>
        <p>you clicked {this.state.count}times</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Hello {this.props.name}
        </button>
      </>
    );
  }
}

export default HelloClass;
