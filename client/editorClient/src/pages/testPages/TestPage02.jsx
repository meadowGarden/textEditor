import { useEffect, useState } from "react";

const TestPage02 = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    console.log("the count is", counter);
  }, [counter]);

  return (
    <>
      <div>{counter}</div>
      <button onClick={incrementCounter}>increment</button>
      <button onClick={decrementCounter}>decrement</button>
    </>
  );
};

export default TestPage02;
