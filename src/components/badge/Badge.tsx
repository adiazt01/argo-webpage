interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: "rose" | "pink" | "blue" | "green" | "yellow";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, color, ...rest }) => {
  const styles = `mb-auto w-auto flex flex-row items-center gap-2 rounded-2xl border-2 border-rose-300 bg-gradient-to-br from-transparent to-${color}-300/50 px-3 py-0.5 text-xs text-neutral-100`;
  return (
    <div  {...rest} className={styles}>
    {children}
  </div>
  );
};
