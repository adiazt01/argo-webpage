import { womenEnterprise } from "../../assets";
import { Typography } from "../../components/Typography";
import { Badge } from "../../components/badge/Badge";
import { Newspaper } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <main className="mx-auto my-24 flex max-w-6xl flex-col justify-start gap-12 border border-red-500 px-4">
        <header className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex min-h-56 flex-col items-center justify-center gap-2 rounded-md bg-gradient-to-br from-blue-900 to-blue-700 p-6 text-center text-white shadow md:items-start md:justify-start md:text-left">
            <Badge color="blue">
              <Newspaper
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  stroke: "currentColor",
                  strokeWidth: "2",
                }}
              />
              <span>Crecimiento sostenible</span>
            </Badge>

            <Typography variant="h1">Nuestro blog</Typography>
            <Typography variant="p">
              Entérate de las últimas noticias y tendencias en el mundo de la
              tecnología y los negocios.
            </Typography>
          </div>
          <picture className="flex max-h-64 flex-col shadow ">
            <img
              src={womenEnterprise}
              className="h-full w-full rounded-md object-cover"
            />
          </picture>
        </header>
      </main>
    </>
  );
};
