export const LayoutFullSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className="mx-auto my-24 flex min-h-screen max-w-6xl flex-col justify-start gap-12 px-12">
      {children}
    </section>
  );
};
