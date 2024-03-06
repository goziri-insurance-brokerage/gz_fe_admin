import React from "react";
import { LoaderProps, Loaders } from "./@types";
import PageLoader from "./page-loader";
import RotatingLines from "./rotating-lines";

export function Loader({ type, size }: { type: Loaders } & LoaderProps) {
  switch (type) {
    case Loaders.PageLoader:
      return <PageLoader size={size} />;

    case Loaders.RotatingLines:
      return <RotatingLines size={size} />;

    default:
      return <p>Pick an Icon</p>;
  }
}
