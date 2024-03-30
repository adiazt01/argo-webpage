interface TypographyProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  children: React.ReactNode;
  className?: string;
}

const styles = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-medium text-blue-900",
  h3: "text-2xl font-bold",
  h4: "text-xl font-bold",
  h5: "text-lg font-bold",
  h6: "text-base font-bold",
  p: "text-base text-neutral-700",
  span: "text-sm",
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
}) => {
  const classStyle = `${styles[variant]} ${className}`;
  const Component = variant;
  return <Component className={classStyle}>{children}</Component>;
};
