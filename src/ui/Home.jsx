import { HiOutlineBolt } from "react-icons/hi2";
import { LiaBrainSolid } from "react-icons/lia";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { TbEye } from "react-icons/tb";

function Home() {
  return (
    <div className="grid h-screen grid-rows-[45%_55%] sm:h-fit sm:w-[40rem] sm:grid-cols-2 sm:grid-rows-1 sm:rounded-3xl sm:shadow-2xl sm:shadow-blue-500/20">
      <div className="flex flex-col items-center justify-between gap-1 rounded-b-[2rem] bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue px-11 py-4 text-white sm:h-full sm:rounded-3xl sm:py-8">
        <h3 className="font-bold text-Light-lavender">Your Result</h3>
        <div className="flex flex-col items-center justify-center rounded-full bg-gradient-to-b from-Violet-blue to-Persian-blue p-10 p-7 sm:gap-1">
          <span className="my-[-1rem] text-[3rem] font-bold sm:my-0">76</span>
          <span className="text-[0.75rem] text-Light-lavender">of 100</span>
        </div>
        <h2 className="text-[1.6rem]">Great</h2>
        <p className="text-center text-Light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="flex h-full flex-col justify-between px-5 py-8 sm:px-11">
        <h3 className="font-bold">Summary</h3>
        <ul className="my-5 flex h-full flex-col justify-between font-bold sm:gap-2">
          <li className="bg-Light-red-transparent flex justify-between rounded-md px-3 py-2 text-[0.8rem]">
            <div className="flex items-center text-Light-red">
              <HiOutlineBolt />
              <span className="ml-2">Reaction</span>
            </div>
            <div>
              80 <span className="text-gray-500">/ 100</span>
            </div>
          </li>
          <li className="bg-Orangey-yellow-transparent flex justify-between rounded-md px-3 py-2 text-[0.8rem]">
            <div className="flex items-center text-Orangey-yellow">
              <LiaBrainSolid />
              <span className="ml-2">Memory</span>
            </div>
            <div>
              92 <span className="text-gray-500">/ 100</span>
            </div>
          </li>
          <li className="bg-Green-teal-transparent flex justify-between rounded-md px-3 py-2 text-[0.8rem]">
            <div className="flex items-center text-Green-teal">
              <BiMessageRoundedMinus />
              <span className="ml-2">Verbal</span>
            </div>{" "}
            <span>
              61 <span className="text-gray-500">/ 100</span>
            </span>
          </li>
          <li className="bg-Cobalt-blue-transparent flex justify-between rounded-md px-3 py-2 text-[0.8rem]">
            <div className="flex items-center text-Cobalt-blue">
              <TbEye />
              <span className="ml-2">Visual</span>
            </div>{" "}
            <div>
              72 <span className="text-gray-500">/ 100</span>
            </div>
          </li>
        </ul>
        <button className="mt-3 rounded-3xl bg-Dark-gray-blue p-3 text-[.75rem] text-white hover:bg-Light-royal-blue">
          Continue
        </button>
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
