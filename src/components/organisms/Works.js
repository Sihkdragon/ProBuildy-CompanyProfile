import React from "react";
import GalleryWorks from "../molecules/GalleryWorks";
import BaseContainer from "../atoms/BaseContainer";
import Heading from "../atoms/Heading";
const Works = () => {
  return (
    <BaseContainer>
      <Heading>Work's</Heading>
      <GalleryWorks />
      <blockquote className="text-center italic mt-8">
        “We do better than every single other constructor, we do different, we
        do the best.”
      </blockquote>
      <h4 className="text-center font-bold mt-4">ProBuildy Corp.</h4>
    </BaseContainer>
  );
};

export default Works;
