import React from "react";
import { Loader, Loaders } from "..";

interface Props {
  children: React.ReactNode;
  className?: string;
  color: "primary" | "secondary";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  variant?: "contained" | "outlined";
}

export function Button({
  children,
  className,
  color,
  disabled,
  isLoading,
  onClick,
  type,
  variant,
}: Props) {
  // Button Type
  const buttonType = type ? type : "button";

  // Default Class
  const defaultClass =
    "py-3 px-3 text-sm rounded-[4px] capitalize text-nowrap font-semibold transition-all";

  // Hover Effects Class
  const hoverEffectsClass =
    !isLoading && color === "primary"
      ? "hover:bg-blue-dark_hover hover:text-white"
      : color === "secondary" && "hover:bg-red-light_hover ";

  // Variant Class
  const variantClass =
    !isLoading &&
    (variant === "contained"
      ? color === "primary"
        ? "border border-blue-normal bg-blue-normal text-white"
        : color === "secondary" &&
          "border border-red-normal bg-red-normal text-white"
      : variant === "outlined"
      ? color === "primary"
        ? "bg-blue-light border border-blue-normal text-blue-normal"
        : color === "secondary" && "bg-red-light border text-red-normal"
      : color === "primary"
      ? "text-blue-normal"
      : color === "secondary" && "text-red-normal");

  // Disabled Class
  const disabledClass =
    disabled && !isLoading && "bg-grey-light text-[#9C9C9C]";

  // isLoading Class
  const isLoadingClass =
    isLoading && "border-none bg-blue-light text-blue-normal";

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`${className} ${defaultClass} ${variantClass} ${disabledClass} ${isLoadingClass} ${hoverEffectsClass}`}
      disabled={disabled}
    >
      <span
        className={`grid grid-flow-col w-max gap-3 items-center mx-auto ${
          isLoading && "pr-5"
        }`}
      >
        {isLoading && <Loader type={Loaders.RotatingLines} size={20} />}
        {children}
      </span>
    </button>
  );
}
