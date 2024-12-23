import { useEffect, useState } from "react";
import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../Button/Button";
import TasksSeparator from "../TasksSeparator/TasksSeparator";
import TaskItem from "../TaskItem/TaskItem";
import { toast } from "sonner";
import AddTaskDialog from "../AddTaskDialog/AddTaskDialog";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

const Tasks = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      });

      const tasks = await response.json();

      setTasks(tasks);
    };

    fetchTask();
  }, []);

  const morningTasks = tasks.filter((task) => task.time == "morning");
  const afternoonTasks = tasks.filter((task) => task.time == "afternoon");
  const eveningTasks = tasks.filter((task) => task.time == "evening");

  const handleDialogClose = () => {
    setAddTaskDialogIsOpen(false);
  };

  const onDeleteTaskSuccess = async (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
    toast.success("Tarefa removida com sucesso!");
  };

  const onDeleteTaskError = () => {
    return toast.error("Erro ao deletar tarefa. Por favor, tente novamente.");
  };

  const handleCheckboxClick = (taskID: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id !== taskID) return task;

      let newStatus: "not_started" | "in_progress" | "done" = "done";

      if (task.status === "not_started") {
        newStatus = "in_progress";
        toast.success("Tarefa iniciada com sucesso!");
        return { ...task, status: newStatus };
      }
      if (task.status === "in_progress") {
        newStatus = "done";
        toast.success("Tarefa concluída com sucesso!");
        return { ...task, status: newStatus };
      }
      if (task.status === "done") {
        newStatus = "not_started";
        toast.success("Tarefa retomada com sucesso!");
        return { ...task, status: newStatus };
      }

      return { ...task, status: newStatus };
    });

    setTasks(newTasks);
  };

  const onAddTaskSuccess = (task: TaskProps) => {
    toast.success("Tarefa concluída com sucesso!");
    setTasks([...tasks, task]);
  };

  const onAddTaskError = () => {
    toast.error("Erro ao adicionar tarefa. Por favor, tente novamente.");
  };

  return (
    <div className="space-y- w-full space-y-4 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00adb8]">
            Minhas Tarefas
          </span>
          <p className="text-xl font-semibold">Minhas Tarefas</p>
        </div>
        <div className="flex items-center gap-3">
          <Button color="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(!addTaskDialogIsOpen)}>
            Adicionar tarefa
            <AddIcon />
          </Button>

          <AddTaskDialog
            isOpen={addTaskDialogIsOpen}
            DialogClose={handleDialogClose}
            AddTaskSuccess={onAddTaskSuccess}
            AddTaskError={onAddTaskError}
          />
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Manhã
            </p>
          )}
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
              onDeleteError={onDeleteTaskError}
            />
          ))}
        </div>

        <div className="my-6 space-y-6">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Tarde
            </p>
          )}
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
              onDeleteError={onDeleteTaskError}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Noite
            </p>
          )}
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
              onDeleteSuccess={onDeleteTaskSuccess}
              onDeleteError={onDeleteTaskError}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
