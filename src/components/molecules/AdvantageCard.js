import React from "react";
import BaseCard from "../atoms/BaseCard";
import { advantages } from "../../lib";
const AdvantageCard = () => {
  return (
    <>
      {advantages.map((advantage, index) => {
        return (
          <BaseCard
            className={
              "h-fit w-96 md:w-full   -m-20 z-10 p-4 flex flex-col gap-y-6"
            }
          >
            <h1 className="font-bold text-xl">{advantage.name}</h1>
            <img
              src={require(`../../assets/icon/cardIcon${advantage.id}.png`)}
              alt="icon"
              className="w-20 mx-auto"
            />
            <p className="text-lg">{advantage.text}</p>
            <button
              className={` z-20 bg-semiamber w-fit px-4 py-1 text-lg text-white rounded-md:64 hover:bg-lightamber duration-200`}
            >
              Detail
            </button>
          </BaseCard>
        );
      })}
    </>
  );
};

export default AdvantageCard;
