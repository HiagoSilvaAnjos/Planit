import InputErrorMessage from "../InputErrorMessage/InputErrorMessage";
import InputLabel from "../InputLabel/InputLabel";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: {
    InputName: string;
    message: string;
  };
}

const Input = ({ label, error, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        type="text"
        {...rest}
      />
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </div>
  );
};

export default Input;
