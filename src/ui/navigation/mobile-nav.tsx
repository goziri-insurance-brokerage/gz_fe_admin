"use client";

import React from "react";
import NavList from "./nav-list";
import { ICONS, Icon, Logo } from "..";

interface MobileNavProps {
  showNav: boolean;
  closeNav: () => void;
  navigations: {
    title: string;
    url: string;
    icon: ICONS;
  }[];
}

export default function MobileNav({
  showNav,
  closeNav,
  navigations,
}: MobileNavProps) {
  return (
    <div
      className={`overflow-hidden bg-white z-50 p-5 fixed top-0 -left-[100vw] h-screen w-screen max-w-[300px] transition-all ${
        showNav && "left-[0vw]"
      }`}
    >
      <div className="flex justify-between items-center">
        <Logo size={40} patternId={"mobile-nav-logo"} />
        <button
          onClick={() => {
            closeNav();
          }}
          className="cursor-pointer"
        >
          <Icon type={ICONS.Close} color={"#242424"} size={24} />
        </button>
      </div>
      <NavList
        className="mt-14"
        isCollasped={false}
        closeNav={closeNav}
        navigations={navigations}
      />
    </div>
  );
}
