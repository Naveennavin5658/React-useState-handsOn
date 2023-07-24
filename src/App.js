import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const dat1 = new Date("June 21 2027");
  console.log(dat1);
  dat1.setDate(dat1.getDate() + count);

  function incrementCount() {
    setCount((c) => c + step);
  }
  function decrementCount() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span> Skip Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={decrementCount}>-</button>
        <span> Count: {count} </span>
        <button onClick={incrementCount}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{dat1.toDateString()}</span>
      </p>
    </>
  );
}
