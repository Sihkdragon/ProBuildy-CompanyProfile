import AdvantageCard from "../molecules/AdvantageCard";
const AdvantageCardList = () => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-3 gap-44 sm:gap-48 md:gap-48 lg:gap-24 xl:gap-36 2xl:gap-48  justify-items-center h-fit">
      <AdvantageCard />
    </div>
  );
};

export default AdvantageCardList;
