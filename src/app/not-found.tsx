import { Button } from "@/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="w-screen h-screen grid place-content-center place-items-center gap-5">
      <div className="relative w-96">
        <Image
          src={"/assets/404.svg"}
          width={1000}
          height={1000}
          alt="Page Not Found Illustration"
        />
      </div>

      <div className="grid gap-1">
        <p className="text-center font-semibold text-2xl">
          Oops! Page not found
        </p>
        <p className="text-[#8C8C8C] max-w-lg text-center">
          Uh-oh! Looks like we hit a dead end. This page seems to have vanished
          into thin air. Sorry about that!
        </p>
      </div>

      <Link href={"/"}>
        <Button color="primary" variant="contained" className="px-10">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
