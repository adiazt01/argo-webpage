import { UseFormRegister } from "react-hook-form";

interface FormFields {
  firstName: string;
  lastName: string;
  profession: string;
  company: string;
  email: string;
  country: string;
}

interface InputTextProps {
  name: keyof FormFields;
  placeholder: string;
  type?: HTMLInputElement["type"];
  register: UseFormRegister<FormFields>;
}

export const InputText = ({ name, placeholder, register, type = "text" }: InputTextProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label htmlFor={name} className="text-md font-medium text-white">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="rounded-md border-2 border-white/15 bg-white/5 px-3 py-2 text-lg text-white shadow-md outline-none transition-all duration-200 hover:bg-black/10 focus:border-green-500/50 focus:bg-green-500/30"
        {...register(name)}
        name={name}
        aria-label={placeholder}
      />
    </div>
  );
};
