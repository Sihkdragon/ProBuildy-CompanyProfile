import React from "react";
import BaseContainer from "../atoms/BaseContainer";
import Heading from "../atoms/Heading";
import ServiceCard from "../molecules/ServiceCard";
const Services = () => {
  return (
    <BaseContainer>
      <Heading>Our Service's</Heading>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 -z-10">
        <ServiceCard />
      </div>
      <a
        href="#/"
        className="text-semidark text-2xl  text-right hover:underline block mt-8 hover:text-semirose"
      >
        View All Service's...
      </a>
    </BaseContainer>
  );
};

export default Services;
