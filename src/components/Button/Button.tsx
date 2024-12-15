interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "secondary";
  size?: "smail" | "large";
  className?: string;
  onClick?: () => void | undefined;
}

const Button = ({
  children,
  size = "smail",
  variant = "primary",
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "primary") return "bg-brand-primary text-white";
    if (variant === "secondary") return "text-[#38383E] bg-brand-light-gray";
    if (variant === "ghost") return "text-brand-dark-gray bg-transparent";
  };

  const getSizeClasses = () => {
    if (size === "smail") return "py-1 text-xs";

    if (size === "large") return "py-2 text-sm";
  };

  return (
    <button
      {...rest}
      className={`${getVariantClasses()} ${getSizeClasses()} flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
