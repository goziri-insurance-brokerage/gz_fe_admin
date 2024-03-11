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
      className={`w-screen h-screen fixed top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)] transition-all [backdrop-filter:_blur(1px)] ${
        showNav ? "visible" : "invisible"
      }`}
    >
      <div
        className={`overflow-hidden bg-white z-50 p-5 relative top-0 -left-[100vw] h-screen w-screen max-w-[300px] transition-all delay-150 ${
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
    </div>
  );
}
