export const JumbotronChild = ({
  children,
  image,
  color,
  altImage,
}: {
  children: React.ReactNode;
  image: string;
  altImage: string;
  color: "yellow" | "green";
}) => {
  const colorClasses = {
    yellow: "bg-gradient-to-b from-orange-600 to-orange-700",
    green: "bg-gradient-to-b from-emerald-600 to-green-700",
  };

  const fadeClasses = {
    yellow: "bg-gradient-to-b from-orange-700 from-5% via-15% via-transparent to-transparent to-90%",
    green:
      "bg-gradient-to-b from-green-700 from-5% via-15% via-transparent to-transparent to-90%",
  };

  const styles = `animation__fade-in--right flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl shadow-xl from-20% to-40% ${colorClasses[color]}`;

  const fadeStyles = `absolute top-0 left-0 w-full h-full ${fadeClasses[color]}`;

  return (
    <article className={styles}>
      <div className="flex flex-col items-start justify-between gap-2 p-5 pt-5 lg:w-full">
        {children}
      </div>
      <picture className="relative w-full">
        <div className={fadeStyles}></div>
        <img
          src={image}
          alt={altImage}
          className="max-h-50 h-full w-full object-cover object-center md:max-h-80"
        />
      </picture>
    </article>
  );
};
