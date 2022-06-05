import React from "react";

const Heading = ({ children }) => {
  return (
    <h1 className="text-5xl text-dark font-extrabold mt-10 mb-20">
      {children}
    </h1>
  );
};

export default Heading;
