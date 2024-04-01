import React, { ReactElement } from "react";
import { Link as LinkRouter, LinkProps } from "react-router-dom";

type IconPosition = "left" | "right";
type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "gray";

interface BaseButtonProps {
  icon?: ReactElement;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  appearance?: "button" | "link";
  variant?: ButtonVariant;
}

type ButtonLinkProps = LinkProps & BaseButtonProps;

const styles = {
  button: {
    primary:
      "flex gap-2 items-center text-white text-1xl font-medium rounded-md shadow bg-rose-600 hover:bg-rose-700 hover:shadow-3xl hover:scale-105 transition-all",
    secondary: "text-white bg-gray-500 hover:bg-gray-700",
    gray: "text-gray-500 bg-gray-200 hover:bg-gray-300",
  },
  link: {
    primary: "text-rose-600 hover:text-rose-700 transition-all",
    secondary: "text-gray-500 hover:text-gray-700",
    gray: "text-gray-500 hover:text-gray-700 transition-all",
  },
  size: {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  },
};

export const Link = ({
  children,
  icon,
  iconPosition = "left",
  size = "medium",
  appearance = "button",
  variant = "primary",
  ...props
}: ButtonLinkProps) => {
  const styleButton = `${styles[appearance][variant]} ${styles.size[size]}`;

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
      <LinkRouter className={styleButton} {...props}>
        {iconPosition === "left" && Icon} {children}{" "}
        {iconPosition === "right" && Icon}
      </LinkRouter>
    );
  }

  return (
    <LinkRouter className={styleButton} {...props}>
      {children}
    </LinkRouter>
  );
};
