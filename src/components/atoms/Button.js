import React from "react";

const Button = ({ color }) => {
  return (
    <button
      className={`z-20 bg-${color} w-fit px-4 py-1 text-lg text-white rounded-md hover:bg-semi${color} duration-200`}
    >
      Book Now
    </button>
  );
};

export default Button;
