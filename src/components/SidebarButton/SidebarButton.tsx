interface SidebarButtonProps {
  children: React.ReactNode;
  variant: "unselected" | "selected";
}

const SidebarButton = ({ children, variant }: SidebarButtonProps) => {
  const getVariantClasses = () => {
    if (variant === "unselected") return "text-[#35383e]";

    if (variant === "selected") return "bg-[#e6f7f8] text-[#00adb5]";
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
