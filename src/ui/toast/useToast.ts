// useToast.ts
import { useContext } from "react";
import { ToastContext } from "./toast-context-provider";
import { ToastProps, ToastTypes } from "./@types";

export function useToast() {
  const { setToasts, toasts } = useContext(ToastContext);

  const callToast = (type: ToastTypes, title: string, message: string) => {
    setToasts((prevToasts: ToastProps[]) => [
      ...prevToasts,
      { title, message, type },
    ]);
  };

  return {
    callToast,
  };
}
