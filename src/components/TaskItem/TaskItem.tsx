import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
} from "../../assets/IconsComponents";

interface TaskItemProps {
  task: {
    id: number;
    title: string;
    description: string;
    time: "morning" | "afternoon" | "evening";
    status: "not_started" | "in_progress" | "done";
  };
  handleCheckboxClick?: (id: number) => void;
}

const TaskItem = ({ task, handleCheckboxClick }: TaskItemProps) => {
  const getStatusClasses = () => {
    if (task.status == "done") {
      return "bg-[#00ADB5] text-[#00ADB5]";
    }

    if (task.status == "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]";
    }

    if (task.status == "not_started") {
      return "bg-[#35383E] bg-opacity-10 text-[#35383E]";
    }
  };

  return (
    <div
      className={`flex items-center justify-between rounded-lg bg-opacity-10 px-4 py-3 text-sm transition ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-3">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick!(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin text-white" />
          )}
        </label>
        {task.title}
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  );
};

export default TaskItem;
