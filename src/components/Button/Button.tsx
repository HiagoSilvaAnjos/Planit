interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

const Button = ({ children, variant = "primary" }: ButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "primary") return "bg-[#00adb5] text-white";

    if (variant === "ghost") return "text-[#818181] bg-transparent";
  };

  return (
    <button
      className={`${getVariantClasses()} flex items-center gap-2 rounded-md px-3 py-2 text-xs font-semibold transition hover:opacity-75`}
    >
      {children}
    </button>
  );
};

export default Button;
