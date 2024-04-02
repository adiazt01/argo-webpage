import { Briefcase } from "lucide-react";
import { Typography } from "../../components/Typography";
import { LayoutSection } from "../../layout/LayoutSection";
import jobs from "../../mock/jobs.json";
import { JobCard } from "../../components/cards/JobCard";

export const JobOportunnietesSection = () => {
  return (
    <LayoutSection id="job-opportunities-section">
      <header className="flex animation__fade-in--top w-full flex-col gap-8 md:flex-row">
        <div className="flex max-w-lg flex-col gap-2">
          {/* TODO Add text */}
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
        {jobs.slice(0, 3).map((job) => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </LayoutSection>
  );
};
