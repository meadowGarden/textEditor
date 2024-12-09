import { useMemo, useState } from "react";
import { InitialItems } from "./testUtilities/TestUtilities";
import "./testStyles/styles01.css";

const TestPage03 = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(InitialItems);
  const classNameRed = "red";
  const classNameBlue = "blue";

  // const selectedItem = items.find((item) => item.isSelected);
  const selectedItem = useMemo(
    () => items.find((item) => item.isSelected),
    [items]
  );

  return (
    <div>
      <h1 className={classNameBlue}>count:{count}</h1>
      <h1>selected item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};

export default TestPage03;
