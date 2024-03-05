import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="border border-red-A400_7f h-10 border-solid flex flex-row items-center justify-start mt-8 rounded-[20px] w-[88%] md:w-[50%] p-0">
      <button
        className=" md:block ml-7 text-3xl font-bold  text-black-900"
        onClick={decrement}
      >
        -
      </button>
      <span className=" font-bold min-w-[54px] ml-[21px] flex items-center justify-center text-base text-center bg-red-A400_1e h-full ">
        {count}
      </span>
      <button
        className="md:block ml-[19px] text-lg font-bold text-black-900 text-center"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
