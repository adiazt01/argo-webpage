export const LayoutSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex my-24 min-h-screen flex-col justify-start px-12 gap-12 max-w-6xl mx-auto">
      {children}
    </section>
  );
};
