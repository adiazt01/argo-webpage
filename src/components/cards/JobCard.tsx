import { Send } from "lucide-react";
import { Typography } from "../Typography";
import { Link } from "../link/Link";

interface JobCardProps {
  job: {
    role: string;
    location: string;
    description: string;
    id: string;
    image: string;
  };
}

export const JobCard = ({ job }: JobCardProps) => {
  const { role, location, description } = job;

  return (
    <article className="animation__fade-in--left relative flex flex-col overflow-hidden rounded-t-2xl border border-black/5 shadow-md">
      <div className="flex min-h-56 flex-col gap-2">
        <img
          src="https://source.unsplash.com/1600x900/?job"
          alt="Programa 1"
          className="h-80 w-full rounded-b-2xl object-cover"
        />
        <div className="flex min-h-56 flex-col p-4">
          <Typography variant="h4">{role}</Typography>
          <Typography variant="h5">{location}</Typography>
          <Typography variant="p">
            {description.length > 125
              ? `${description.slice(0, 100)}...`
              : description}
          </Typography>
        </div>
      </div>
      <footer className="flex justify-end px-4 pb-4">
        <Link
          variant="primary"
          to={`/job/${job.id}`}
          size="small"
          icon={<Send />}
          iconPosition="right"
        >
          Apply Now
        </Link>
      </footer>
    </article>
  );
};
