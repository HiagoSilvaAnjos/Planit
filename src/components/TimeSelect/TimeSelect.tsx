import React, { forwardRef } from "react";
import InputLabel from "../InputLabel/InputLabel";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

interface TimeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
}

const TimeSelect = forwardRef<HTMLSelectElement, TimeSelectProps>(
  ({ errorMessage, ...rest }, ref) => {
    return (
      <div className="flex flex-col space-y-1">
        <InputLabel htmlFor="time">Horário</InputLabel>
        <select
          className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-[#080808]"
          ref={ref} // Encaminhando o ref
          {...rest}
        >
          <option value="morning">Manhã</option>
          <option value="afternoon">Tarde</option>
          <option value="evening">Noite</option>
        </select>
        {errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
      </div>
    );
  }
);

TimeSelect.displayName = "TimeSelect";

export default TimeSelect;
