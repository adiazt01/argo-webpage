import { Send } from "lucide-react";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  firstName: string;
  lastName: string;
  profession: string;
  company: string;
  email: string;
  country: string;
}

export const SubscribeNewsletter = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {

  };

  return (
    <section data-testid="subscribe-newsletter" className="full flex min-h-80 flex-col items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-700 px-8 py-12">
      <div className="w-full max-w-4xl">
        <header className="flex flex-col items-center justify-center gap-4">
          <Typography variant="h2" className="text-white">
            Subscribe to our Newsletter
          </Typography>
          <Typography variant="p" className="text-center text-white">
            Get the latest news and updates from our community
          </Typography>
        </header>
        <form
          className="mt-8 flex w-full flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* FIXME Improve the input fields */}
          {/* TODO captcha */}
          <div className="flex flex-col gap-8 md:flex-row">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("firstName")}
              name="firstName"
            />
            <input
              type="text"
              placeholder="Apellido..."
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("lastName")}
              name="lastName"
            />
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <input
              type="text"
              placeholder="Profesion..."
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("profession")}
              name="profession"
            />
            <input
              type="text"
              placeholder="Empresa..."
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("company")}
              name="company"
            />
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <input
              type="email"
              placeholder="Correo electronico..."
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("email")}
              name="email"
            />
            <input
              type="text"
              placeholder="Pais..."
              className="w-full rounded-t-xl border-b-2 border-neutral-300/80 bg-black/20 px-4 py-2 text-lg font-medium text-white outline-none transition-all duration-200 hover:bg-black/5 focus:border-b-neutral-200 focus:bg-rose-900/40"
              {...register("country")}
              name="country"
            />
          </div>
          <Button
            icon={<Send />}
            iconPosition="right"
            size="medium"
            variant="primary"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};
