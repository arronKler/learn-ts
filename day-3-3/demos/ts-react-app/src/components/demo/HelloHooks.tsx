import React, { useEffect, useState } from "react";

interface Greeting {
  name: string;
  firstName: string;
  lastName: string;
}

const HelloHooks = (props: Greeting) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    if (count > 5) {
      setText("have a rest");
    }
  }, [count]);
  return (
    <>
      <p>
        you clicked {count}times {text}
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Hello {props.name}
      </button>
    </>
  );
};

HelloHooks.defaultProps = {
  firstName: "",
  lastName: ""
};

export default HelloHooks;
