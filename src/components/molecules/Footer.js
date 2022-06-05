import Brand from "../atoms/Brand";
import FooterItems from "./FooterItems";
import { phone, email, instagram, web } from "../../assets/icon/";
import { works, services } from "../../lib";
import maps from "../../assets/img/maps.png";
const Footer = () => {
  return (
    <footer className="w-full h-64 bg-semidark">
      <div className="container text-white h-full flex items-center gap-x-48">
        <Brand />
        <FooterItems title="Work's" items={works} />
        <FooterItems title="Service's" items={services} />
        <div className="-mt-4 flex flex-col gap-y-4">
          <h1 className="text-xl text-rose font-semibold">Contact Us</h1>
          <ul className="">
            <li className="flex gap-x-2">
              <img src={phone} alt="icon" />
              +62 8123456323
            </li>
            <li className="flex gap-x-2">
              <img src={email} alt="icon" />
              contact@probuildy.com
            </li>
            <li className="flex gap-x-2">
              <img src={instagram} alt="icon" />
              @probuildy.engineering
            </li>
            <li className="flex gap-x-2">
              <img src={web} alt="icon" />
              www.probuildy.com
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-col gap-y-4">
          <h1 className="text-xl text-rose font-semibold">Address</h1>
          <img src={maps} alt="maps" />
          <h2>Jl. Bersama No. 123, Jakarta</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
