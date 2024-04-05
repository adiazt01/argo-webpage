/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import { Briefcase, View } from "lucide-react";
import { Typography } from "../../components/Typography";
import { LayoutSection } from "../../layout/LayoutSection";
import jobs from "../../mock/jobs.json";
import { JobCard } from "../../components/cards/JobCard";
import { Link } from "../../components/link/Link";

export const JobOportunnietesSection = () => {
  return (
    <LayoutSection id="job-opportunities-section">
      <header className="animation__fade-in--top flex w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
          <Typography icon={<Briefcase />} className="text-left" variant="h2">
            Oportunidades laborales
          </Typography>
          <Typography className="text-left" variant="p">
            ¿Quieres formar parte de nuestro equipo? Conoce las oportunidades
            laborales que tenemos para ti.
          </Typography>
        </div>
      </header>
      <ul className="flex w-full flex-col gap-8 lg:flex-row">
        {jobs &&
          jobs.slice(0, 3).map((job) => (
            <li key={job.id}>
              <JobCard job={job} />
            </li>
          ))}
      </ul>
      <div className="flex w-full justify-center md:justify-end">
        <Link
          variant="primary"
          to="/blog"
          size="medium"
          icon={<View />}
          iconPosition="right"
        >
          Ver mas oportunidades
        </Link>
      </div>
    </LayoutSection>
  );
};
