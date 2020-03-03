import React from "react";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const Hello = (props: Greeting) => <button>Hello {props.name}</button>;

Hello.defaultProps = {
  firstName: "",
  lastName: ""
};

export default Hello;
