import React, { forwardRef } from "react";
import InputLabel from "../InputLabel/InputLabel";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <div className="flex flex-col space-y-1 text-left">
        <InputLabel htmlFor={rest.id}>{label}</InputLabel>
        <input
          className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
          ref={ref} // Encaminhando o ref
          {...rest}
        />
        {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
