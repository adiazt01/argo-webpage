import { BarChart, Briefcase, Building, Link } from "lucide-react";
import { Typography } from "../../components/Typography";
import { LayoutSection } from "../../layout/LayoutSection";
import { Badge } from "../../components/badge/Badge";
import { JumbotronHeader } from "../../components/jumbotron/JumbotronHeader";
import { womenEnterprise, womanGreenHouse, planEnterpise } from "../../assets";
import { JumbotronChild } from "../../components/jumbotron/JumbotronChild";

export const AboutUsSection = () => {
  return (
    <LayoutSection id="about-us-section">
      <header className="animation__fade-in--top flex w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
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
      <ul className="grid w-full grid-cols-1 gap-12">
        <JumbotronHeader
          image={womanGreenHouse}
          altImage={"Mujer en invernadero"}
        >
          <Badge color="rose">
            <BarChart
              style={{
                width: "1.5em",
                height: "1.5em",
                stroke: "currentColor",
                strokeWidth: "2",
              }}
            />
            <span>Crecimiento sostenible</span>
          </Badge>

          <div className="px-2">
            <Typography className="text-left text-white" variant="h3">
              Emprendimientos y pequeñas empresas en crecimiento
            </Typography>
            <Typography className="text-left text-neutral-100" variant="p">
              Ofrecemos formación empresarial, vinculación a mercados y acceso a
              financiamiento a emprendedores y pequeñas empresas en crecimiento
              en su camino hacia la sostenibilidad económica, social y
              ambiental.
            </Typography>
          </div>
        </JumbotronHeader>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <JumbotronChild
            color="yellow"
            image={womenEnterprise}
            altImage="Mujer emprendedora"
          >
            <Badge color="orange">
              <Building
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  stroke: "currentColor",
                  strokeWidth: "2",
                }}
              />
              <span>Emprendimiento</span>
            </Badge>

            <div className="px-2">
              <Typography className="text-left text-white" variant="h3">
                Ecosistema
              </Typography>
              <Typography className="text-left text-neutral-100" variant="p">
                Contribuimos al fortalecimiento del ecosistema de emprendedores
                y pequeñas empresas en crecimiento a través de eventos, tales
                como el programa Formando Catalizadores, y el co-liderazgo de la
                Red de Impacto, integrada por más de 100 organizaciones de la
                región.
              </Typography>
            </div>
          </JumbotronChild>
          <JumbotronChild
            color="green"
            image={planEnterpise}
            altImage="Mujer emprendedora"
          >
            <Badge color="green">
              <Briefcase
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  stroke: "currentColor",
                  strokeWidth: "2",
                }}
              />
              <span>Todo el mundo participa</span>
            </Badge>

            <div className="px-2">
              <Typography className="text-left text-white" variant="h3">
                Proyectos inclusivos
              </Typography>
              <Typography className="text-left text-neutral-100" variant="p">
                Ejecutamos proyectos específicos junto a aliados con los que
                compartimos nuestra visión por la inclusión financiera, la
                equidad de género, la diversificación, resiliencia y
                sostenibilidad en las cadenas de valor, y la adaptación al
                cambio climático en la región.
              </Typography>
            </div>
          </JumbotronChild>
        </div>
      </ul>
    </LayoutSection>
  );
};
