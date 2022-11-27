import React from "react";
import CgClose from "@meronex/icons/cg/CgClose";
import Link from "next/link";

function NavMobileMenu({ navItems, showMenu, active }) {
  return (
    <div
      class={
        active
          ? "flex-col flex items-center fixed inset-0 uppercase bg-black backdrop-blur-lg gap-8 justify-center p-8  md:hidden"
          : "hidden"
      }
    >
      <div>
        <CgClose
          onClick={showMenu}
          class="cursor-pointer absolute top-6 right-4"
          size="3em"
        />
        <ul>
          {navItems.map((navItem, _key) => (
            <Link href={navItem.path} key={navItem._key}>
              <li class="cursor-pointer font-bold text-3xl my-3">
                {navItem.copy}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavMobileMenu;
