import { useState } from "react";

const CounterFn = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState("Counter Fn");
  const [counter, setCounter] = useState(0);

  const handleOnClick = () => {
    setCounter(counter + 1);
  };

  return (
    <section>
      <header>{title}</header>
      <p>{counter}</p>
      <button onClick={handleOnClick}>Add</button>
    </section>
  );
};

export default CounterFn;
