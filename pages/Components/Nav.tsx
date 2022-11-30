import React, { useState } from "react";
import CgMenu from "@meronex/icons/cg/CgMenu";
import NavMobileMenu from "./NavMobileMenu";
import Link from "next/link";
import { NavItemProps } from "../../types/NavItemProps";
import { urlFor } from "../../utils/client";

export default function Nav({ navItems, logo }: NavItemProps) {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <header className="flex fixed bg-white w-full justify-between shadow-lg shadow-black px-5 md:px-10 lg:px-16 py-5 items-center z-10">
      <img
        src={urlFor(logo).width(250).url()}
        alt="Tertia Logo"
        className="w-[150px]"
      />
      <nav>
        <ul className="hidden uppercase items-center md:flex">
          {navItems.map(({ _key, copy, path }) => (
            <Link
              href={path}
              key={_key}
              className="cursor-pointer text-xs lg:text-sm font-medium ml-10 lg:ml-12 last:text-green hover:text-green transition-colors duration-200 hover:last:bg-green hover:last:text-white hover:last:border-green last:border last:py-3 last:px-7"
            >
              <li>{copy}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <CgMenu onClick={showMenu} className="md:hidden" size="3em" />
      <NavMobileMenu navItems={navItems} showMenu={showMenu} active={active} />
    </header>
  );
}
