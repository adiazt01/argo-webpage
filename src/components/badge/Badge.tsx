interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  color: "rose" | "green" | "yellow" | "orange";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, color, ...rest }) => {
  const colorClasses = {
    rose: "border-rose-400/50 bg-rose-600",
    green: "border-green-400/50 bg-green-600",
    yellow: "border-yellow-400/50 bg-yellow-600",
    orange: "border-orange-400/50 bg-orange-600",
  };

  const styles = `inline-block flex flex-row flex-nowrap items-center gap-2 rounded-2xl ${colorClasses[color]} px-3 py-0.5 text-xs text-neutral-100 border-2 font-medium shadow`;

  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  );
};
