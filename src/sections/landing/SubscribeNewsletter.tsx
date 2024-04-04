/* eslint-disable @typescript-eslint/no-misused-promises */
import { Send } from "lucide-react";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { InputText } from "../../components/input/InputText";
import { useEffect, useState } from "react";
import { fetchCountry, getLocation } from "../../services/country";
import { useFetch } from "../../hooks/useFetch";
import { FetchResponse } from "../../types/useFetch";

interface Inputs {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  profession: string;
  company: string;
  email: string;
  country: string;
}

interface country {
  name: {
    common: string;
  };
}

export const SubscribeNewsletter = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const {
    data: dataCountry,
    error: errorCountry,
    loading: loadingCountry,
  }: FetchResponse<country[]> = useFetch(fetchCountry);

  const {
    data: dataLocation,
    error: errorLocation,
    loading: loadingLocation,
  } = useFetch(getLocation);

  useEffect(() => {
    if (dataLocation) {
      setValue("country", dataLocation);
    }
  }, [setValue, dataLocation]);


  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs
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
          className="mt-8 flex max-w-4xl flex-col gap-8"
          onSubmit={handleSubmit(onSubmit)}
          action="mailto:armandodt2004@gmail.com"
        >
          {/* FIXME Improve the input fields */}
          {/* TODO captcha */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
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
          </div>
          <div className="flex flex-col justify-between gap-8 md:flex-row">
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
          </div>
          <div className="flex flex-col justify-between gap-8 md:flex-row">
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
                  className="text-md w-96 max-w-96 rounded-md border-2 border-white/15 bg-neutral-700/80 py-1.5 pe-6 ps-2 text-white shadow-md outline-none transition-all duration-200  focus:border-green-500/50"
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
          </div>
          <div className="mx-auto mt-4">
            <Button
              icon={<Send />}
              iconPosition="right"
              size="large"
              variant="primary"
            >
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
