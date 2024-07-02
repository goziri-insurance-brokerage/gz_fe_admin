"use client";

import React from "react";
import { Loader } from "../loaders/_index";
import { Loaders } from "../loaders/@types";

interface LogoutButtonProps {
  loading: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export function LogoutButton({
  children,
  loading,
  onClick,
}: LogoutButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`py-3 px-5 grid grid-flow-col ${
        !loading && "justify-start"
      } gap-3 text-left items-center bg-red-light rounded-md text-red-normal transition-all hover:bg-red-light_hover`}
    >
      {loading ? (
        <span className="block w-max mx-auto">
          <Loader type={Loaders.RotatingLines} size={20} color="#EF0627" />
        </span>
      ) : (
        children
      )}
    </button>
  );
}
