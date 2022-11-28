import React, { useState } from "react";
import CgMenu from "@meronex/icons/cg/CgMenu";
import NavMobileMenu from "./NavMobileMenu";

export default function Nav({ props: { navItems } }) {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <nav class="flex fixed bg-white w-full justify-between shadow-lg shadow-black px-5 md:px-10 lg:px-16 py-5 items-center z-10">
      <img src="/tertiaLogo_green.png" alt="Tertia Logo" class="w-[150px]" />
      <ul className="hidden uppercase items-center md:flex">
        {navItems.map((navItem, key) => (
          <li
            key={key}
            class="cursor-pointer text-xs lg:text-sm font-medium ml-10 lg:ml-12 last:text-green hover:text-green transition-colors duration-200 hover:last:bg-green hover:last:text-white hover:last:border-green last:border last:py-3 last:px-7"
          >
            {navItem.copy}
          </li>
        ))}
      </ul>
      <CgMenu onClick={showMenu} class="md:hidden" size="3em" />
      <NavMobileMenu navItems={navItems} showMenu={showMenu} active={active} />
    </nav>
  );
}
