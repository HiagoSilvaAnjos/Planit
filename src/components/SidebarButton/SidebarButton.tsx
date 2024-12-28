import { NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

interface SidebarButtonProps {
  children: React.ReactNode;
  to: string;
}

const SidebarButton = ({ children, to }: SidebarButtonProps) => {
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
    <NavLink
      className={({ isActive }) =>
        sidebar({ color: isActive ? "selected" : "unselected" })
      }
      to={to}
    >
      {children}
    </NavLink>
  );
};

export default SidebarButton;
