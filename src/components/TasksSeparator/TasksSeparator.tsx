interface TasksSeparatorProps {
  title: string;
  icon: React.ReactNode;
}

const TasksSeparator = ({ title, icon }: TasksSeparatorProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-[#f4f4f5] pb-3">
      {icon}
      <p className="text-xs font-semibold text-[#9a9c9f]">{title}</p>
    </div>
  );
};

export default TasksSeparator;
