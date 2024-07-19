import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-[#134efe]  z-50">
      <div className="relative w-10 h-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white w-[0.1875em] h-[0.75em] rounded-full origin-[50%_-100%] animate-spin-blink"
            style={{ transform: `rotate(${i * 30}deg)`, animationDelay: `${i * 0.083}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
