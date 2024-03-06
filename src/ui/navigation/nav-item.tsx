"use client";

import React, { useState } from "react";
import { Icon } from "../icons/_index";
import { ICONS } from "../icons/@type";

interface Props {
  icon: ICONS;
  title: string;
  active: boolean;
  isCollasped: boolean;
}

export function NavItem({ icon, title, active, isCollasped }: Props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
      className={`grid  text-lg items-center gap-3 p-3 cursor-pointer transition-all rounded-md active:bg-blue-normal_active hover:text-white hover:bg-blue-normal_hover lg:text-base ${
        active ? "text-white bg-blue-normal" : "text-grey-normal"
      } ${isCollasped ? "place-content-center" : "grid-cols-[auto_1fr]"}`}
    >
      <Icon
        type={icon}
        size={20}
        color={isMouseOver ? "white" : active ? "white" : "grey"}
      />
      {!isCollasped && <span>{title}</span>}
    </div>
  );
}
