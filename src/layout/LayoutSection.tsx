import React from "react";

export const LayoutSection = React.forwardRef(
  (
    {
      children,
      id,
    }: {
      children: React.ReactNode;
      id: string;
    },
    ref: React.Ref<HTMLElement>,
  ) => {
    return (
      <section
        id={id}
        data-testid={id}
        className="mx-auto my-24 flex min-h-screen max-w-6xl flex-col justify-start gap-12 px-12"
        ref={ref}
        style={{
          scrollMarginTop: "10rem",
        }}
      >
        {children}
      </section>
    );
  },
);
