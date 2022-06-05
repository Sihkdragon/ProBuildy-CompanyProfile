import React from "react";
const FooterItems = ({ title, items }) => {
  return (
    <div className="-mt-10 flex flex-col gap-y-4 w-40">
      <h1 className="text-xl text-rose font-semibold">{title}</h1>
      <ul className="list-disc">
        {items.map((item, index) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterItems;
