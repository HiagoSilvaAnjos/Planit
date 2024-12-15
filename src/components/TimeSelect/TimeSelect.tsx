import { SelectHTMLAttributes } from "react";
import InputLabel from "../InputLabel/InputLabel";
import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";

interface TimeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: {
    InputName: string;
    message: string;
  };
}

const TimeSelect = ({ error, ...rest }: TimeSelectProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#080808]"
        {...rest}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </div>
  );
};

export default TimeSelect;
