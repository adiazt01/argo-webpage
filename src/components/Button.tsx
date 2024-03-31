import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";

type ButtonType = "button" | "link";
type ButtonVariant = "outline" | "primary" | "secondary";
type IconPosition = "left" | "right";
type ButtonSize = "small" | "medium" | "large";

interface BaseButtonProps {
  children: ReactNode;
  buttonType?: ButtonType;
  variant?: ButtonVariant;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  size?: ButtonSize;
}

interface ButtonLinkProps extends Omit<LinkProps, "children">, BaseButtonProps {
  to: string;
}

interface ButtonButtonProps
  extends Omit<
      ButtonHTMLAttributes<HTMLButtonElement> & { buttonType?: string },
      "children" | "buttonType"
    >,
    BaseButtonProps {}

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

const styles = {
  primary:
    "flex gap-2 items-center text-white text-1xl font-medium rounded-md shadow bg-rose-600 hover:bg-rose-700 hover:shadow-3xl hover:scale-105 transition-all",
  secondary: "text-white bg-gray-500 hover:bg-gray-700",
  outline: "text-blue-500 bg-white border border-blue-500 hover:bg-blue-50",
  small: "py-1 px-3 text-sm",
  medium: "py-2 px-4 text-base",
  large: "py-3 px-6 text-lg",
};

const ButtonLink = ({
  children,
  to,
  variant = "primary",
  icon,
  iconPosition = "left",
  size = "medium",
  className = "",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  buttonType,
  ...props
}: ButtonLinkProps) => {
  if (!to) {
    throw new Error('The "to" prop is required for ButtonLink');
  }

  const styleLink = `${styles[variant]} ${styles[size]} ${className}`; // Update this

  return (
    <Link to={to} className={`flex items-center ${styleLink}`} {...props}>
      {iconPosition === "left" && icon}
      <span>{children}</span>
      {iconPosition === "right" && icon}
    </Link>
  );
};

const ButtonButton = ({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  size = "medium",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  buttonType,
  ...props
}: ButtonButtonProps) => {
  const styleButton = `${styles[variant]} ${styles[size]}`; // Update this

  if (icon) {
    const Icon = React.cloneElement(icon, {
      className: "inline-block",
      style: {
        width: "1em",
        height: "1em",
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

export const Button: React.FC<ButtonProps> = (props) => {
  const { buttonType = "button", children } = props;

  if (buttonType === "link") {
    const { to, icon, iconPosition, ...linkProps } = props as ButtonLinkProps;
    if (to) {
      return (
        <ButtonLink
          to={to}
          icon={icon}
          iconPosition={iconPosition}
          {...linkProps}
        >
          {children}
        </ButtonLink>
      );
    } else {
      throw new Error('The "to" prop is required for ButtonLink');
    }
  }

  const { icon, iconPosition, ...buttonProps } = props as ButtonButtonProps;
  return (
    <ButtonButton icon={icon} iconPosition={iconPosition} {...buttonProps}>
      {children}
    </ButtonButton>
  );
};
