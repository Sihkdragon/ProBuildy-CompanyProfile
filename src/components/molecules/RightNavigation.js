import React from "react";
import { menu } from "../../lib";
const RightNavigation = () => {
  return (
    <ul className="flex text-xl capitalize text-white gap-x-4">
      {menu.map((menu) => {
        return (
          <li className="" key={menu.id}>
            <a href={`/${menu.link}`}>{menu.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default RightNavigation;
