"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ToastProps } from "./@types";

const initialState: {
  toasts: ToastProps[];
  setToasts: Dispatch<SetStateAction<ToastProps[]>>;
} = {
  toasts: [],
  setToasts: () => {},
};

export const ToastContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}
export const ToastContextProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
};
