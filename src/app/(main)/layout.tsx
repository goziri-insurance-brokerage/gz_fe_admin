import React from "react";
import { Navigation } from "@/ui/navigation";
import { NAVIGATIONS } from "@/constants/navigation.constant";
import Header from "@/components/main/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="grid h-screen overflow-hidden lg:grid-cols-[auto_1fr]">
      <div className="hidden overflow-hidden lg:block">
        <Navigation navigations={NAVIGATIONS} />
      </div>
      <div className="grid grid-rows-[auto_1fr] h-full overflow-hidden">
        <Header />
        {children}
      </div>
    </div>
  );
}
