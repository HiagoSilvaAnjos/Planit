import { LabelHTMLAttributes } from "react";

const InputLabel = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className="text-left text-sm font-semibold text-brand-dark-blue"
      {...props}
    >
      {props.children}
    </label>
  );
};

export default InputLabel;
