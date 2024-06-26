/* eslint-disable @typescript-eslint/no-misused-promises */
import { Typography } from "../../components/Typography";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputText } from "../../components/input/InputText";
import { useEffect } from "react";
import { fetchCountry, getLocation } from "../../services/country";
import { useFetch } from "../../hooks/useFetch";
import { FetchResponse } from "../../types/useFetch";
import { Ban, CheckCircle, LoaderCircle, Send } from "lucide-react";
import { Inputs, country } from "../../types/FormSubscribe";
import { useSubmitForm } from "../../hooks/useSubmitForm";

export const SubscribeNewsletter = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const { data: dataCountry }: FetchResponse<country[]> =
    useFetch(fetchCountry);
  const { data: dataLocation } = useFetch(getLocation);
  const { submitForm, message } = useSubmitForm();

  useEffect(() => {
    if (dataLocation) {
      setValue("country", dataLocation);
    }
  }, [setValue, dataLocation]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    void submitForm(data);
    reset();
  };
  return (
    <section
      data-testid="subscribe-newsletter"
      className="full flex min-h-96 flex-col items-center justify-center bg-neutral-800 px-8 py-24"
    >
      <div className="w-full max-w-4xl">
        <header className="animation__fade-in--top flex flex-col items-center justify-center gap-4 text-center md:text-left">
          <Typography variant="h2" className="w-full text-white">
            Suscribete a nuestro boletin informativo
          </Typography>
        </header>
        <form
          className="mx-auto mt-12 grid grid-cols-1 items-center justify-center gap-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <fieldset className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <InputText
                label="Nombre"
                name="firstName"
                placeholder="Luis"
                register={register}
              />
              {errors.firstName && (
                <div className="mt-2 text-red-500">El nombre es requerido</div>
              )}
            </div>
            <div>
              <InputText
                label="Apellido"
                name="lastName"
                placeholder="Perez"
                register={register}
              />
              {errors.lastName && (
                <div className="mt-2 text-red-500">
                  El apellido es requerido
                </div>
              )}
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <InputText
                label="Profesion"
                name="profession"
                placeholder="Desarrollador"
                register={register}
              />
              {errors.profession && (
                <div className="mt-2 text-red-500">
                  La profesion es requerida
                </div>
              )}
            </div>
            <div>
              <InputText
                label="Compañia"
                name="company"
                placeholder="Google"
                register={register}
              />
              {errors.company && (
                <div className="mt-2 text-red-500">
                  La compañia es requerida
                </div>
              )}
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <InputText
                label="Correo"
                type="email"
                name="email"
                placeholder="example@email.com"
                register={register}
              />
              {errors.email && (
                <div className="mt-2 text-red-500">El correo es requerido</div>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <label
                htmlFor="pet-select"
                className="text-md font-medium text-white"
              >
                Pais
              </label>
              <div>
                <select
                  id="pet-select"
                  className="text-md w-full max-w-96 rounded-md border-2 border-white/15 bg-neutral-700/80 py-1.5 pe-6 ps-2 text-white shadow-md outline-none transition-all duration-200  focus:border-green-500/50"
                  {...register("country", { required: true })}
                >
                  {dataCountry
                    ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
                    .map((country) => (
                      <option
                        key={country.name.common}
                        value={country.name.common}
                      >
                        {country.name.common}
                      </option>
                    ))}
                </select>
                {errors.country && (
                  <div className="mt-2 text-red-500">El pais es requerido</div>
                )}
              </div>
            </div>
          </fieldset>
          <div className="mx-auto mt-4 md:mx-0 md:me-auto">
            <Button
              disabled={
                message.value && message.value === "Submitting..."
                  ? true
                  : false
              }
              iconPosition="right"
              size="medium"
              variant="primary"
            >
              Suscribirse
              {message.value ? (
                <LoaderCircle
                  className="animate-spin"
                  style={{
                    width: "1em",
                    height: "1em",
                    stroke: "currentColor",
                    strokeWidth: "3.5",
                  }}
                />
              ) : (
                <Send
                  style={{
                    width: "1em",
                    height: "1em",
                    stroke: "currentColor",
                    strokeWidth: "3.5",
                  }}
                />
              )}
            </Button>
            {message.type === "error" && (
              <div className="mt-8 rounded-2xl border-2 border-red-700 bg-red-900/50 px-4 py-1.5 text-neutral-100">
                <Ban
                  className="inline-block"
                  style={{
                    color: "currentColor",
                  }}
                />
                <span className="ms-4 inline-block">{message.value}</span>
              </div>
            )}
            {message.type === "success" && (
              <div className="mt-8 rounded-2xl border-2 border-green-700 bg-green-900/50 px-4 py-1.5 text-neutral-100">
                <CheckCircle
                  className="inline-block"
                  style={{
                    color: "currentColor",
                  }}
                />
                <span className="ms-4 inline-block">{message.value}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
