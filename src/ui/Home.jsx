function Home() {
  return (
    <div className="grid w-[40rem] grid-cols-2 rounded-3xl shadow-2xl shadow-blue-500/20">
      <div className="flex flex-col items-center gap-1 rounded-3xl bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue px-11 py-8 text-white">
        <h3 className="font-bold text-Light-lavender">Your Result</h3>
        <div className="my-5 flex h-[9rem] w-[9rem] flex-col items-center justify-center rounded-full bg-gradient-to-b from-Violet-blue to-Persian-blue">
          <span className="my-[-1rem] text-[3rem] font-bold">76</span>
          <span className="text-[0.75rem] text-Light-lavender">of 100</span>
        </div>
        <h2 className="text-[1.6rem]">Great</h2>
        <p className="text-center text-Light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className=" p-4">
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
    </div>
  );
}

export default Home;
