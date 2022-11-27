import React, { useState } from "react";
import CgMenu from "@meronex/icons/cg/CgMenu";
import NavMobileMenu from "./NavMobileMenu";

export default function Nav({ props: { navItems } }) {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <nav class="flex w-full justify-between px-5 py-5 items-center shadow-[0_0_5px_2px_rgba(26,26,26,.3)]">
      <img src="/tertiaLogo_green.png" alt="Tertia Logo" class="w-[150px]" />
      <ul className="hidden md:flex">
        {navItems.map((item, key) => (
          <li key={key}>{item.copy}</li>
        ))}
      </ul>
      <CgMenu onClick={showMenu} class="md:hidden" size="3em" />
      <NavMobileMenu navItems={navItems} showMenu={showMenu} active={active} />
    </nav>
  );
}
