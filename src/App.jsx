import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>
        Your Result 76 of 100 Great You scored higher than 65% of the people who
        have taken these tests. Summary Reaction 80 / 100 Memory 92 / 100 Verbal
        61 / 100 Visual 72 / 100 Continue
      </p>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Saeadyou">Mahdi Yousefi</a>.
      </div>
    </>
  );
}

export default App;
