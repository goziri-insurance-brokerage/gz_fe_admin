"use client";

import React, { useEffect, useState } from "react";
import { ICONS, Icon } from "../../ui";
import { ToastProps } from "./@types";

interface ToastItemProps extends ToastProps {}

const ToastItem = ({ message, title, type }: ToastItemProps) => {
  const [showToast, setShowToast] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const closeToast = () => {
    setShowToast(false);

    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    setShowToast(true);
    setIsVisible(true);

    const timeoutId = setTimeout(() => {
      closeToast();
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`grid-cols-[auto_1fr_auto] gap-2 border  rounded-lg p-2 relative transition-all duration-1000 ${
        type === "success"
          ? "border-[#029836] bg-[#E6FAED]"
          : type === "info"
          ? "border-[#005AFF] bg-[#E6EFFF]"
          : type === "error"
          ? "border-[#B3051D] bg-[#FDE6E9]"
          : type === "warning" && "border-[#FF5F15] bg-[#FFEFE8]"
      } ${showToast ? "right-0" : "right-[-105%]"} ${
        isVisible ? "grid" : "hidden"
      }`}
    >
      <Icon
        type={
          type === "success"
            ? ICONS.TickSquareFilled
            : type === "info"
            ? ICONS.InfoSquare
            : type === "error"
            ? ICONS.CloseSquareFilled
            : ICONS.Warning
        }
        size={24}
        color={
          type === "success"
            ? "#029836"
            : type === "info"
            ? "#005AFF"
            : type === "error"
            ? "#B3051D"
            : type === "warning"
            ? "#FF5F15"
            : ""
        }
      />

      <div className="toast-content">
        <p
          className={`font-bold ${
            type === "success"
              ? "text-[#029836]"
              : type === "info"
              ? "text-[#005AFF]"
              : type === "error"
              ? "text-[#B3051D]"
              : type === "warning" && "text-[#FF5F15]"
          }`}
        >
          {title}
        </p>
        <p className="text-sm">{message}</p>
      </div>

      <button className="h-max" onClick={closeToast}>
        <Icon type={ICONS.Close} size={20} color="#242424" />
      </button>
    </div>
  );
};

export default ToastItem;
