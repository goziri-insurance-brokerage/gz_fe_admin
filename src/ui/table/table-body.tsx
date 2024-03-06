import React, { useContext } from "react";
import { TableContext } from "./table";
import { Loader } from "../loaders/_index";
import { Loaders } from "../loaders/@types";

interface Props {
  children: React.ReactNode;
}

export function TableBody({ children }: Props) {
  const { isLoading, noData } = useContext(TableContext);
  return (
    <tbody>
      {isLoading ? (
        <tr>
          <td colSpan={100}>
            <div className="grid content-center justify-items-center w-full h-full gap-3">
              <Loader type={Loaders.RotatingLines} size={60} />
              <p className="text-center text-lg">Loading ...</p>
            </div>
          </td>
        </tr>
      ) : noData.condition ? (
        <tr>
          <td colSpan={100}>{noData.component}</td>
        </tr>
      ) : (
        children
      )}
    </tbody>
  );
}
