import React, { FC } from "react";

interface Props {
  label?: string;
}
const Input: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > &
    Props
> = (props) => {
  return (
    <div className={`relative ${props.className}`}>
      <label className="absolute top-3 left-4 text-gray-500 text-xs">
        {props.label}
      </label>
      <input
        type="text"
        {...props}
        className="p-4 pt-8 border border-gray-500 rounded w-full focus:outline-emerald-400"
      />
    </div>
  );
};

export default Input;
