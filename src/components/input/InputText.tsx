import { UseFormRegister } from "react-hook-form";

interface FormFields {
  [key: string]: unknown;
  firstName: string;
  lastName: string;
  profession: string;
  company: string;
  email: string;
  country: string;
}

interface InputTextProps {
  name: keyof FormFields;
  label: string;
  placeholder: string;
  type?: HTMLInputElement["type"];
  register: UseFormRegister<FormFields>;
}

export const InputText = ({
  name,
  label,
  placeholder,
  register,
  type = "text",
}: InputTextProps) => {
  return (
    <div className="relative flex flex-col gap-2">
      <label
        htmlFor={name.toString()}
        className="text-md font-medium text-white"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="text-md  w-full max-w-96 rounded-md border-2 border-white/15 bg-white/5 px-3 py-1 text-white shadow-md outline-none transition-all duration-200 invalid:text-pink-500 hover:bg-black/10  focus:border-green-500/50 focus:bg-green-500/30 focus:invalid:border-red-500  focus:invalid:bg-red-500"
        {...register(name.toString(), { required: true })}
        name={name.toString()}
        aria-label={placeholder}
      />
    </div>
  );
};
