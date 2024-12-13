interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <label className="text-sm font-semibold" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        type="text"
        {...rest}
      />
    </div>
  );
};

export default Input;