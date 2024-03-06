import React from "react";

interface Props {
  children: React.ReactNode;
  color: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "submit" | "reset" | "button";
  variant?: "contained" | "outlined";
}

export function Button({
  children,
  disabled,
  onClick,
  type,
  className,
  variant,
  color,
}: Props) {
  // Button Type
  const buttonType = type ? type : "button";

  // Default Class
  const defaultClass = ` grid grid-flow-col py-3 px-3 gap-10 items-center text-sm rounded-[4px] capitalize text-nowrap font-semibold border transition-all active:bg-blue-darker ${
    color === "primary"
      ? "hover:bg-blue-dark_hover hover:text-white"
      : color === "secondary" && "hover:bg-red-dark_hover hover:text-white"
  }`;

  // Variant Class
  const variantClass =
    variant === "contained"
      ? color === "primary"
        ? "border-blue-normal bg-blue-normal text-white"
        : color === "secondary" && "border-red-normal bg-red-normal text-white"
      : variant === "outlined"
      ? color === "primary"
        ? "bg-blue-light border-blue-normal text-blue-normal"
        : color === "secondary" &&
          "bg-red-light border-red-normal text-red-normal"
      : color === "primary"
      ? "text-blue-normal"
      : color === "secondary" && "text-red-normal";

  // DisabledClass
  const disabledClass = disabled && "bg-grey-light text-[#9C9C9C]";

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`${className} ${defaultClass} ${variantClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
}
