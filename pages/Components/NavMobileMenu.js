import React from "react";
import CgClose from "@meronex/icons/cg/CgClose";

function NavMobileMenu({ navItems, showMenu, active }) {
  return (
    <div
      className={
        active
          ? "flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden"
          : "hidden"
      }
    >
      <CgClose onClick={showMenu} className="cursor-pointer" size="2em" />
      <ul>
        <li>Item</li>
        {console.log(navItems)}
      </ul>
    </div>
  );
}

export default NavMobileMenu;
