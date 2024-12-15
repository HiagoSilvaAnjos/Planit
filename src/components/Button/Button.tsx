import { tv } from "tailwind-variants";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: "primary" | "ghost" | "secondary";
  size?: "small" | "large";
  className?: string;
  onClick?: () => void | undefined;
}

const Button = ({
  children,
  size = "small",
  color = "primary",
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const button = tv({
    // base: classes comuns em todos os elementos
    base: "flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75",
    // Variants do elemento
    variants: {
      color: {
        primary: "bg-brand-primary text-white",
        secondary: "bg-brand-light-gray text-[#38383E]",
        ghost: "bg-transparent text-brand-dark-gray",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  });

  return (
    <button
      {...rest}
      className={`${button({ color, size, className })}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
