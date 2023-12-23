import React from "react";
import NavLink from "./Navlink";

const MenuOverlay = ({
  links,
}: {
  links: Array<{ url: string; label: string }>;
}) => {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink url={link.url} label={link.label} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
