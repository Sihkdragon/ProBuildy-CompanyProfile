import React from "react";
import { menu } from "../../lib";
import { menuIcon } from "../../assets/icon";
const RightNavigation = () => {
  return (
    <ul className="flex text-xl capitalize text-white gap-x-4">
      <button className="w-fit lg:hidden mr-4">
        <img src={menuIcon} alt="menuIcon" />
      </button>
      {menu.map((menu) => {
        return (
          <li className="hidden lg:block" key={menu.id}>
            <a href={`/${menu.link}`}>{menu.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default RightNavigation;
