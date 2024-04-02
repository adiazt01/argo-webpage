export const LayoutSection = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section id={id} data-testid={id} className="mx-auto my-24 flex min-h-screen max-w-6xl flex-col justify-start gap-12 px-12">
      {children}
    </section>
  );
};
