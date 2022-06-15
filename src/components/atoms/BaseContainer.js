import React from "react";

const BaseContainer = ({ children }) => {
  return (
    <div className="bg-white container min-h-screen shadow-xl rounded-md px-8 sm:px-16 md:px-28 lg:px-40 py-10 mb-28">
      {children}
    </div>
  );
};

export default BaseContainer;
