import { Logo } from "@/ui";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid h-screen w-screen overflow-hidden lg:grid-cols-2">
      <div className="bg-[#ECF2FC] h-full p-8 hidden lg:grid">
        <div className="grid gap-11 grid-rows-[auto_1fr_auto] h-full content-">
          <div className="w-32">
            <Logo fill />
          </div>
          <div className="relative mx-auto w-[35vw] h-max self-center">
            <Image
              src={"/assets/auth-page-side-illustration.svg"}
              width={1000}
              height={1000}
              alt="Illustration"
              priority
            />
          </div>
          <div className="text-center grid gap-1">
            <h1 className="font-bold text-[#005AFF] text-4xl">HMO Dashboard</h1>
            <p className="text-xl">
              Manage and organize Goziri Insurance Portals
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
