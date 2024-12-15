interface InputErrorMessageProps {
  children: React.ReactNode;
}

const InputErrorMessage = ({ children }: InputErrorMessageProps) => {
  return <p className="text-left text-sm text-brand-danger">{children}</p>;
};

export default InputErrorMessage;
