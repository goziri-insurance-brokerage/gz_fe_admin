"use client";

import React, { useState } from "react";
import { Button, ICONS, Icon, Logo } from "..";
import NavList from "./nav-list";

interface NavigationProps {
  navigations: {
    title: string;
    url: string;
    icon: ICONS;
  }[];
}

export function Navigation({ navigations }: NavigationProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`h-full overflow-hidden p-4 pr-0 grid gap-10 grid-rows-[auto_1fr] items-start content-start transition-all ${
        isCollapsed ? "min-w-[50px]" : "min-w-[210px]"
      }`}
    >
      <div className="grid grid-flow-col items-center justify-between">
        {!isCollapsed && <Logo size={0} />}

        <Button
          color="primary"
          onClick={handleCollapse}
          className="p-3 grid place-content-center"
          variant="contained"
        >
          <Icon type={ICONS.DoubleArrowLeft} color="white" size={20} />
        </Button>
      </div>

      <NavList
        isCollasped={isCollapsed}
        className="overflow-y-auto page-scroll-bar pr-3 h-full content-start"
        navigations={navigations}
      />
    </div>
  );
}
