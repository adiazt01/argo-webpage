export const JumbotronHeader = ({
  children,
  image,
  altImage,
}: {
  children: React.ReactNode;
  image: string;
  altImage: string;
}) => {
  return (
    <article className="animation__fade-in relative flex min-h-48 flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-t from-rose-800 from-70% to-pink-700 shadow-xl md:flex-row md:bg-gradient-to-l">
      <div className="flex flex-col items-start gap-2 p-5 pt-5 lg:w-full">
        {children}
      </div>
      <picture className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-800 from-5% via-transparent via-20% to-transparent to-90% md:bg-gradient-to-r"></div>
        <img
          src={image}
          alt={altImage}
          className="max-h-50 h-full w-full object-cover object-center md:max-h-80"
        />
      </picture>
    </article>
  );
};
