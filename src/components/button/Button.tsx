import React from "react";
import { BaseButtonProps } from "../../types/Button";

const styles = {
  primary:
    "flex gap-2 items-center text-white text-1xl font-medium rounded-md shadow bg-rose-600 hover:bg-rose-700 hover:shadow-3xl hover:scale-105 transition-all",
  secondary: "text-white bg-gray-500 hover:bg-gray-700",
  outline: "text-blue-500 bg-white border border-blue-500 hover:bg-blue-50",
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

export const Button = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  size = "medium",
  ...props
}: BaseButtonProps) => {
  const styleButton = `${styles[variant]} ${styles[size]}`;

  if (icon) {
    const Icon = React.cloneElement(icon, {
      className: "inline-block",
      style: {
        width: "0.8em",
        height: "0.8em",
        marginTop: "2px",
        stroke: "currentColor",
        strokeWidth: "3.5",
      },
    });

    return (
      <button className={styleButton} {...props}>
        {iconPosition === "left" && Icon} {children}{" "}
        {iconPosition === "right" && Icon}
      </button>
    );
  }

  return (
    <button className={styleButton} {...props}>
      {children}
    </button>
  );
};
