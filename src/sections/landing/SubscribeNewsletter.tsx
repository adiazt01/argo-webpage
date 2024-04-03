import { Car, Dog, PersonStanding, Send } from "lucide-react";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { InputText } from "../../components/input/InputText";

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

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await emailjs
      .send("service_kju7a6p", "template_qmy4wmf", data, {
        publicKey: "xibh2DYXOBN7CmSwC",
      })
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        },
      );
  };

  return (
    <section
      data-testid="subscribe-newsletter"
      className="full flex min-h-96 flex-col items-center justify-center bg-neutral-800 px-8 py-24"
    >
      <div className="w-full max-w-4xl">
        <header className="flex flex-col items-center justify-center gap-4">
          <Typography variant="h2" className="text-white">
            Suscribete a nuestro boletin informativo
          </Typography>
        </header>
        <form
          className="mt-8 flex w-full flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
          action="mailto:armandodt2004@gmail.com"
        >
          {/* FIXME Improve the input fields */}
          {/* TODO captcha */}
          <div className="flex flex-col gap-8 md:flex-row">
            <InputText
              name="firstName"
              placeholder="Luis"
              register={register}
            />
            <InputText
              name="lastName"
              placeholder="Perez"
              register={register}
            />
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <InputText
              name="profession"
              placeholder="Desarrollador"
              register={register}
            />
            <InputText
              name="company"
              placeholder="Google"
              register={register}
            />
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <InputText
              type="email"
              name="email"
              placeholder="example@email.com"
              register={register}
            />
            <div className="relative flex flex-col gap-2">
              <label
                htmlFor="pet-select"
                className="text-md font-medium text-white"
              >
                Pais
              </label>
              <select
                id="pet-select"
                className="rounded-md w-full border-2 border-white/15 bg-neutral-800 px-6 py-2 text-lg text-white shadow-md outline-none transition-all duration-200 hover:bg-neutral-700/80  focus:border-green-500/50"
                {...register("country")}
              >
                <option value="">--Escoge una opcion--</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Colombia">Colombia</option>
                <option value="Mexico">Mexico</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
              </select>
            </div>
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
