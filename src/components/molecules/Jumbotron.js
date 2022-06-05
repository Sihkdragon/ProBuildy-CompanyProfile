import jumbotronimage from "../../assets/img/jumbotron.jpg";
import Button from "../atoms/Button";

const Jumbotron = () => {
  return (
    <div className="w-full bg-dark h-[480px] relative -z-0">
      <img
        src={jumbotronimage}
        alt="jumbotron"
        className="w-full h-full object-cover -z-10 absolute"
      />
      <div className="flex flex-col h-full text-center justify-center items-center bg-dark bg-opacity-50">
        <h1 className="text-5xl text-white font-extrabold block mb-8 shadow-dark">
          Professionalism is our tradition.
        </h1>
        <Button color="rose" />
      </div>
    </div>
  );
};

export default Jumbotron;
