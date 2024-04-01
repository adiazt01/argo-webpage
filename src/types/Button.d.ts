import { ReactElement } from "react";

type ButtonVariant = "outline" | "primary" | "secondary";
type IconPosition = "left" | "right";
type ButtonSize = "small" | "medium" | "large";

export interface BaseButtonProps {
  variant?: ButtonVariant;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  size?: ButtonSize;
  children: React.ReactNode;
}