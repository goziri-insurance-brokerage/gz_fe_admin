import React from "react";
import { LoaderProps, Loaders } from "./@types";
import PageLoader from "./page-loader";
import RotatingLines from "./rotating-lines";

export function Loader({ type, size, color }: { type: Loaders } & LoaderProps) {
  switch (type) {
    case Loaders.PageLoader:
      return <PageLoader size={size} color={color} />;

    case Loaders.RotatingLines:
      return <RotatingLines size={size} color={color} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
