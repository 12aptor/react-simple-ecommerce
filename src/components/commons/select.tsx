import { SelectHTMLAttributes, useId } from "react";
import { IError } from "../../types";

interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: IError;
  options: {
    value: string;
    label: string;
  }[];
}

export const Select = ({ label, error, options, ...props }: IProps) => {
  const id = useId();

  return (
    <div className="flex-1 min-w-48 flex flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <select
        className="w-full h-10 px-4 text-sm border border-gray-500 focus:border-black outline-none"
        id={id}
        {...props}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span className="px-1 text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
};
