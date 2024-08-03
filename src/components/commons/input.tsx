import { InputHTMLAttributes, useId } from "react";
import { IError } from "../../types";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: IError;
}

export const Input = ({ label, error, ...props }: IProps) => {
  const id = useId();

  return (
    <div className="flex-1 min-w-48 flex flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        className="w-full appearance-none h-10 px-4 text-sm border border-gray-500 focus:border-black outline-none"
        id={id}
        {...props}
      />
      {error && (
        <span className="px-1 text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
};
