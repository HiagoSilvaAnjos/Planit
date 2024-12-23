import { useState } from "react";
import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export interface Task {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

export interface TaskItemProps {
  task: Task;
  handleCheckboxClick?: (id: string) => void;
  onDeleteSuccess: (taskId: string) => void;
  onDeleteError: () => void;
}

const TaskItem = ({
  task,
  handleCheckboxClick,
  onDeleteSuccess,
  onDeleteError,
}: TaskItemProps) => {
  const [deleteTaskisLoading, setDeleteTaskisLoading] = useState(false);

  const handleDeleteTaskClick = async () => {
    setDeleteTaskisLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setDeleteTaskisLoading(false);
      return onDeleteError();
    }

    onDeleteSuccess(task.id);
    setDeleteTaskisLoading(false);
  };

  const getStatusClasses = () => {
    if (task.status == "done") {
      return "bg-brand-primary text-brand-primary";
    }

    if (task.status == "in_progress") {
      return "bg-brand-process text-brand-process";
    }

    if (task.status == "not_started") {
      return "bg-brand-dark-blue bg-opacity-10 text-brand-dark-blue";
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

      <div className="flex items-center justify-center gap-2">
        <Button
          disabled={deleteTaskisLoading}
          color="ghost"
          onClick={() => {
            handleDeleteTaskClick();
          }}
        >
          {deleteTaskisLoading ? (
            <LoaderIcon className="animate-spin text-brand-dark-gray" />
          ) : (
            <TrashIcon className="text-brand-text-gray" />
          )}
        </Button>

        <Link to={`/task/${task.id}`} className="transition hover:opacity-75">
          <DetailsIcon />
        </Link>
      </div>
    </div>
  );
};

export default TaskItem;
