function App() {
  return (
    <>
      <div className="flex">
        <div>
          <h3>Your Result</h3>
          <div>
            <span className="">76</span> of 100
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div>
          <h2>Summary</h2>
          <ul>
            <li>
              <span>Reaction</span> <span></span>80 / 100
            </li>
            <li>
              <span>Memory</span> <span>92 / 100</span>
            </li>
            <li>
              <span>Verbal</span> <span>61 / 100</span>
            </li>
            <li>
              <span>Visual</span> <span>72 / 100</span>
            </li>
          </ul>
          <button>Continue</button>
        </div>
      </div>
      {/* <div>
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Saeadyou">Mahdi Yousefi</a>.
      </div> */}
    </>
  );
}

export default App;
