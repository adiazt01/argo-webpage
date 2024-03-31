import { Typography } from "../Typography";

interface Metric {
  title: string;
  metric: string;
}

interface MetricsCardProps {
  metric: Metric;
}

export const MetricsCard = ({ metric }: MetricsCardProps) => {
  const { title, metric: dataMetric } = metric;

  return (
    <article
      className="items-star flex w-full flex-col gap-2 rounded-2xl border-2 border-neutral-100/30 bg-gradient-to-br from-white/10 to-black/15 px-4 py-10 shadow 
      transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <Typography variant="h3" className="text-neutral-100">
        <strong>{dataMetric}</strong>
      </Typography>
      <Typography variant="h4" className="text-neutral-100">
        {title}
      </Typography>
    </article>
  );
};
