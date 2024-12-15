interface TasksSeparatorProps {
  title: string;
  icon: React.ReactNode;
}

const TasksSeparator = ({ title, icon }: TasksSeparatorProps) => {
  return (
    <div className="flex items-center gap-2 border-b border-brand-border pb-3">
      {icon}
      <p className="text-xs font-semibold text-brand-text-gray">{title}</p>
    </div>
  );
};

export default TasksSeparator;
