import { useState } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import { useGetTasks } from "../../hooks/data/use-get-tasks";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

const Tasks = () => {
  const queryClient = useQueryClient();
  const { data: tasks } = useGetTasks();

  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  const morningTasks = tasks?.filter(
    (task: TaskProps) => task.time == "morning"
  );
  const afternoonTasks = tasks?.filter(
    (task: TaskProps) => task.time == "afternoon"
  );
  const eveningTasks = tasks?.filter(
    (task: TaskProps) => task.time == "evening"
  );

  const handleDialogClose = () => {
    setAddTaskDialogIsOpen(false);
  };

  const handleCheckboxClick = async (taskID: string) => {
    let newStatus: "not_started" | "in_progress" | "done" = "not_started";
    const newTasks = tasks.map((task: TaskProps) => {
      if (task.id !== taskID) return task;

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
    });

    const response = await fetch(`http://localhost:3000/tasks/${taskID}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: newStatus,
      }),
    });

    if (!response.ok) {
      return toast.error(
        "Erro ao Atualizar tarefa. Por favor, tente novamente."
      );
    }

    queryClient.setQueryData(["tasks"], newTasks);
  };

  const handleClearTasks = async () => {
    if (!tasks || tasks.length === 0)
      return toast.error("Não há tarefas para remover!");
    try {
      for (const task of tasks) {
        await fetch(`http://localhost:3000/tasks/${task.id}`, {
          method: "DELETE",
        });
      }

      queryClient.setQueryData(["tasks"], []); // Atualiza o cache local
      toast.success("Tarefas removidas com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao remover tarefas. Por favor, tente novamente.");
    }
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
          <Button
            color="ghost"
            onClick={() => {
              handleClearTasks();
            }}
          >
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
          />
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Manhã
            </p>
          )}
          {morningTasks?.map((task: TaskProps) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>

        <div className="my-6 space-y-6">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Tarde
            </p>
          )}
          {afternoonTasks?.map((task: TaskProps) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Noite
            </p>
          )}
          {eveningTasks?.map((task: TaskProps) => (
            <TaskItem
              key={task.id}
              task={task}
              handleCheckboxClick={handleCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
