"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { Logo } from "../../logo/logo";
import { LoaderProps } from "../@types";

export default function PageLoader({ size }: LoaderProps) {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 grid place-content-center z-50 bg-white">
      <span className={`w-max block animate-pulse`}>
        <Logo size={size} />
      </span>
    </div>
  );
}
