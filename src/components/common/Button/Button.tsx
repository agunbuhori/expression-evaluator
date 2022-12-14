import React, { FC } from "react";

interface Props {
  label?: string;
}
const Button: FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    Props
> = (props) => {
  return (
    <button
      {...props}
      className={`rounded bg-emerald-400 w-full ${props.className}`}
    >
      <span className="text-md text-white font-semibold">{props.label}</span>
    </button>
  );
};

export default Button;
