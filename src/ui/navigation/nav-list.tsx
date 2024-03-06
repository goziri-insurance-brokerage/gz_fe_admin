"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ICONS, NavItem } from "..";

interface NavListProps {
  className?: string;
  closeNav?: () => void;
  isCollasped: boolean;
  navigations: {
    title: string;
    url: string;
    icon: ICONS;
  }[];
}

export default function NavList({
  className,
  closeNav,
  isCollasped,
  navigations,
}: NavListProps) {
  const path = usePathname();

  return (
    <nav className={`grid ${className}`}>
      {navigations.map((item, i) => {
        return (
          <Link
            key={i}
            href={item.url}
            onClick={() => {
              closeNav?.();
            }}
          >
            <NavItem
              icon={item.icon}
              title={item.title}
              active={path.includes(item.url)}
              isCollasped={isCollasped}
            />
          </Link>
        );
      })}
    </nav>
  );
}
