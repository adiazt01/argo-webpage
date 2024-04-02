import { Link, Star } from "lucide-react";
import { Typography } from "../components/Typography";
import { LayoutSection } from "../layout/LayoutSection";

export const AboutUsSection = () => {
  return (
    <LayoutSection id="about-us-section">
      <header className="flex w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
          {/* TODO Add text */}
          <Typography className="text-left" variant="h2">
            ¿Qué hacemos?
          </Typography>
          <Typography className="text-left" variant="p">
            Ofrecemos formación empresarial, vinculación a mercados y acceso a
            financiamiento a emprendedores y pequeñas empresas en crecimiento en
            su camino hacia la sostenibilidad económica, social y ambiental.
          </Typography>
        </div>
        <div className="flex w-full flex-row justify-end">
          {/* FIXME add respctiv link to the page */}
          <a href="/login" className="">
            Conocer mas sobre nuestrto programas{" "}
            <Link className="inline-block" />
          </a>
        </div>
      </header>
      {/* TODO change icon and view and create components */}
      {/* TODO add badge to the component */}
      {/* FIXME Change color typography because contrast */}
      {/* TODO  effecto hover */}
      <ul className="grid w-full grid-cols-1 gap-4">
        <article className="relative flex min-h-48 flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-t from-rose-800 from-70% to-pink-700 shadow-xl md:flex-row md:bg-gradient-to-l">
          <div className="flex flex-col gap-2 p-5 pt-5 lg:w-full">
            <Typography
              icon={<Star />}
              className="text-left text-neutral-300"
              variant="h3"
            >
              Ecosistema
            </Typography>
            <Typography className="text-left text-neutral-300" variant="p">
              Contribuimos al fortalecimiento del ecosistema de emprendedores y
              pequeñas empresas en crecimiento a través de eventos, tales como
              el programa Formando Catalizadores, y el co-liderazgo de la Red de
              Impacto, integrada por más de 100 organizaciones de la región.
            </Typography>
          </div>
          <picture className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-800  from-5% via-transparent via-20% to-transparent to-90% md:bg-gradient-to-r"></div>
            <img
              src="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png"
              srcSet="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png 1x, https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora@2x.png 2x"
              alt="About Us"
              className="max-h-50 h-full w-full object-cover object-center md:max-h-80"
            />
          </picture>
        </article>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <article className="flex min-h-48 flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-orange-600 to-yellow-600 to-25%">
            <div className="flex flex-col gap-2 p-5 pt-5 lg:w-full">
              <Typography
                icon={<Star />}
                className="text-left text-neutral-200"
                variant="h3"
              >
                Proyectos inclusivos
              </Typography>
              <Typography className="text-left text-neutral-300" variant="p">
                Ejecutamos proyectos específicos junto a aliados con los que
                compartimos nuestra visión por la inclusión financiera, la
                equidad de género, la diversificación, resiliencia y
                sostenibilidad en las cadenas de valor, y la adaptación al
                cambio climático en la región.
              </Typography>
            </div>
            <picture className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 from-5% via-transparent via-20% to-transparent to-90%"></div>
              <img
                src="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png"
                srcSet="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png 1x, https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora@2x.png 2x"
                alt="About Us"
                className="max-h-50 h-full w-full object-cover object-center md:max-h-80"
              />
            </picture>
          </article>
          <article className="flex min-h-48 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-600 to-green-900 to-25% shadow-xl">
            <div className="flex flex-col gap-2 p-5 pt-5 lg:w-full">
              <Typography
                icon={<Star />}
                className="text-left text-neutral-200"
                variant="h3"
              >
                Emprendimientos y pequeñas empresas en crecimiento
              </Typography>
              <Typography className="text-left text-neutral-300" variant="p">
                Ofrecemos formación empresarial, vinculación a mercados y acceso
                a financiamiento a emprendedores y pequeñas empresas en
                crecimiento en su camino hacia la sostenibilidad económica,
                social y ambiental.
              </Typography>
            </div>
            <picture className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-b from-green-900 from-5% via-transparent via-20% to-transparent to-90%"></div>
              <img
                src="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png"
                srcSet="https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora.png 1x, https://agora2030.org/wp-content/uploads/2023/07/Mujer-emprendedora@2x.png 2x"
                alt="About Us"
                className="max-h-50 h-full w-full object-cover object-center md:max-h-80"
              />
            </picture>
          </article>
        </div>
      </ul>
    </LayoutSection>
  );
};
