import { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment: {count}</button>
      <button onClick={decrement}>Decrement: {count}</button>
    </div>
  );
};
