import { tv } from "tailwind-variants";

interface SidebarButtonProps {
  children: React.ReactNode;
  color: "unselected" | "selected";
  href: string;
}

const SidebarButton = ({ children, color, href }: SidebarButtonProps) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3",
    variants: {
      color: {
        selected: "bg-brand-primary bg-opacity-15 text-brand-primary",
        unselected: "text-brand-dark-blue",
      },
    },
  });

  return (
    <a className={`${sidebar({ color })} `} href={href}>
      {children}
    </a>
  );
};

export default SidebarButton;
