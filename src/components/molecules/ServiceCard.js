import React from "react";
import { services } from "../../lib";
import BaseCard from "../atoms/BaseCard";
const ServiceCard = () => {
  return (
    <>
      {services.map((service, index) => {
        return (
          <BaseCard
            className={
              "h-fit w-96 z-10  flex flex-col gap-y-6 border-rose overflow-hidden"
            }
          >
            <img
              src={require(`../../assets/img/services/service${service.id}.jpg`)}
              alt="icon"
              className="w-full mx-auto max-h-64"
            />
            <div className="px-4">
              <h1 className="text-2xl font-semibold">{service.name}</h1>
              <p className="text-lg mt-2 text-semidark">{service.text}</p>
            </div>
            <button
              className={` z-20 bg-rose w-full px-4 py-1 text-lg text-white hover:bg-semirose duration-200`}
            >
              Check Spesification
            </button>
          </BaseCard>
        );
      })}
    </>
  );
};

export default ServiceCard;
