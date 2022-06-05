import logo from "../../assets/logo/logo.svg";
const Brand = () => {
  return (
    <a href="/#" className="flex items-center">
      <img src={logo} alt="logo" className="w-12 stroke-semiamber" />
      <h1 className="font-main font-extrabold text-3xl text-white">roBuildy</h1>
    </a>
  );
};

export default Brand;
