import React, { FC } from "react";

interface Props {
  label?: string;
}
const Select: FC<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > &
    Props
> = (props) => {
  return (
    <div className={`relative ${props.className}`}>
      <label className="absolute top-3 left-4 text-gray-500 text-xs">
        {props.label}
      </label>
      <select
        {...props}
        className="p-4 pt-8 border border-gray-500 rounded w-full focus:outline-emerald-400"
      >
        {props.children}
      </select>
    </div>
  );
};

export default Select;
