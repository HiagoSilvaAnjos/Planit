import { SelectHTMLAttributes } from "react";
import InputLabel from "../InputLabel/InputLabel";

const TimeSelect = (props: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className="flex flex-col space-y-1">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#080808]"
        id="time"
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
};

export default TimeSelect;
