interface InputErrorMessageProps {
  children: React.ReactNode;
}

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return <p className="text-left text-sm text-red-500">{children}</p>;
};

export default InputErrorMessage;
