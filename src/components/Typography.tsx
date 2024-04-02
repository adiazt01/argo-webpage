import React, { ReactElement } from "react";

interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
}

const styles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-medium text-blue-900",
  h3: "text-2xl font-medium",
  h4: "text-xl font-medium leading-tight",
  h5: "text-lg font-medium",
  h6: "text-base font-bold",
  p: "text-base",
  span: "text-sm",
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  icon,
  iconPosition = "left",
  className = "",
}) => {
  const classStyle = `${styles[variant]} ${className}`;
  const Component = variant;

  if (icon) {
    const Icon = React.cloneElement(icon, {
      className: "inline-block",
      style: {
        width: "1em",
        height: "1em",
        margin: `0 ${iconPosition === "left" ? "0.5em 0 0 0" : "0 0 0.5em 0"}`,
        stroke: "currentColor",
        strokeWidth: "3.5",
      },
    });

    console.log(Icon);

    return (
      <Component className={classStyle}>
        {iconPosition === "left" && Icon} {children}{" "}
        {iconPosition === "right" && Icon}
      </Component>
    );
  }

  return <Component className={classStyle}>{children}</Component>;
};
