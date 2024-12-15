interface SidebarButtonProps {
  children: React.ReactNode;
  variant: "unselected" | "selected";
}

const SidebarButton = ({ children, variant }: SidebarButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "unselected") return "text-brand-dark-blue";

    if (variant === "selected")
      return "bg-brand-primary bg-opacity-15 text-brand-primary";
  };

  return (
    <a
      className={`${getVariantClasses()} flex items-center gap-2 rounded-lg px-6 py-3`}
      href="#"
    >
      {children}
    </a>
  );
};

export default SidebarButton;
