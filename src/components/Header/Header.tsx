import { useState } from "react";
import { AddIcon, TrashIcon } from "../../assets/IconsComponents";
import AddTaskDialog from "../AddTaskDialog/AddTaskDialog";
import Button from "../Button/Button";
import { useQueryClient } from "@tanstack/react-query";
import { useGetTasks } from "../../hooks/data/use-get-tasks";
import { toast } from "sonner";

interface HeaderProps {
  subtitle: string;
  title: string;
}

const Header = ({ subtitle, title }: HeaderProps) => {
  const queryClient = useQueryClient();
  const { data: tasks } = useGetTasks();
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  const handleDialogClose = () => {
    setAddTaskDialogIsOpen(false);
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
    <div className="flex w-full justify-between">
      <div>
        <span className="text-xs font-semibold text-[#00adb8]">{subtitle}</span>
        <p className="text-xl font-semibold">{title}</p>
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
  );
};

export default Header;
