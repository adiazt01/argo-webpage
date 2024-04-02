import { Typography } from "../../components/Typography";
import { MetricsCard } from "../../components/cards/MetricsCard";

const MetricData = [
  {
    id: 0,
    title: "Emprendedores apoyados",
    metric: "1,000+",
  },
  {
    id: 1,
    title: "Catalizadores capacitados",
    metric: "329 +",
  },
  {
    id: 2,
    title: "Países que tenemos incidencia",
    metric: "23",
  },
];

export const MetricsSection = () => {
  return (
    <section
      id="metrics-section"
      data-testid="metrics-section"
      className="full flex min-h-72 flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 px-8 py-12"
    >
      <div className="flex flex-col items-start gap-12 lg:justify-between">
        <header className="animation__fade-in--left flex max-w-lg flex-col items-start justify-center  gap-4">
          <Typography variant="h2" className="text-center text-white">
            Nuestro impacto
          </Typography>
          <Typography variant="p" className="text-white">
            Nos comprometemos a la transparencia con los emprendedores y el
            ecosistema emprendedor en Latinoamérica alineándonos con los
            Objetivos de Desarrollo Sostenible de las Naciones Unidas.
          </Typography>
        </header>
        <div className="w-full">
          <ul className="flex w-full flex-col justify-center gap-12 lg:flex-row">
            {MetricData.map((metric, index) => (
              <li className={`animation__fade-in--left--${index.toString()}`} key={metric.id}>
                <MetricsCard metric={metric} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
