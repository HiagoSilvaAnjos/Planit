import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useDeleteTask } from "../../hooks/data/use-delete-task";
import { TaskProps } from "../../interfaces/interfaces";
import { useUpdateTask } from "../../hooks/data/use-update-task";

interface TaskItemProps {
  task: TaskProps;
}

const TaskItem = ({ task }: TaskItemProps) => {
  const { mutate: deleteTask, isPending } = useDeleteTask(task.id);
  const { mutate: updateTask } = useUpdateTask(task.id);

  const handleDeleteTaskClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa removida com sucesso!");
      },
      onError: () => {
        toast.error("Erro ao deletar tarefa. Por favor, tente novamente.");
      },
    });
  };

  const getNewStatusTask = () => {
    if (task.status === "not_started") {
      return "in_progress";
    }
    if (task.status === "in_progress") {
      return "done";
    }
    return "not_started";
  };

  const handleCheckBoxClick = () => {
    updateTask(
      { status: getNewStatusTask() },
      {
        onSuccess: () => {
          toast.success("Tarefa atualizada com sucesso!");
        },
        onError: () => {
          toast.error("Erro ao atualizar tarefa. Por favor, tente novamente.");
        },
      }
    );
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
            onChange={handleCheckBoxClick}
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
          disabled={isPending}
          color="ghost"
          onClick={() => {
            handleDeleteTaskClick();
          }}
        >
          {isPending ? (
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
