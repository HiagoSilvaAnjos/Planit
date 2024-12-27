import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  ArrowLeftIcon,
  ChevroRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TimeSelect from "../../components/TimeSelect/TimeSelect";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}
interface FormData {
  title: string;
  time: "morning" | "afternoon" | "evening";
  description: string;
}

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleBackClick = () => {
    navigate(-1);
  };

  const queryClient = useQueryClient();

  const { data: task } = useQuery({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      const taskData = await response.json();
      reset({
        title: taskData.title,
        time: taskData.time,
        description: taskData.description,
      });

      return taskData;
    },
  });

  const { mutate: updateTask, isPending: updateTaskIsPending } = useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (newTask: FormData) => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTask.title,
          time: newTask.time,
          description: newTask.description,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }

      const updatedTask = await response.json();
      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        currentTasks.map((task) => {
          if (task.id === taskId) {
            return updatedTask;
          }
          return task;
        });
      });
    },
  });

  const { mutate: deleteTask, isPending: deleteTaskIsPending } = useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error();
      }

      const taskDeleted = await response.json();
      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        return currentTasks.filter((oldTask) => oldTask.id !== taskDeleted.id);
      });
    },
  });

  const handleSaveClick = async (data: FormData) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa salva com sucesso!");
        queryClient.setQueryData(["task", taskId], data);
      },
      onError: () => {
        toast.error("Erro ao salvar tarefa. Por favor, tente novamente.");
      },
    });
  };

  const handleDeleteTaskClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso!");
        navigate("/");
      },
      onError: () => {
        toast.error("Erro ao deletar tarefa. Por favor, tente novamente.");
      },
    });
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full items-center justify-between">
          <div>
            <button
              onClick={handleBackClick}
              className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-brand-primary transition hover:cursor-pointer hover:opacity-75"
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-2 text-xs">
              <Link to="/" className="cursor-pointer text-brand-text-gray">
                Minhas Tarefas
              </Link>
              <ChevroRightIcon className="text-brand-text-gray" />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>
          <Button
            onClick={() => {
              handleDeleteTaskClick();
            }}
            type="submit"
            color="danger"
            className="w-[150px] self-end"
            disabled={deleteTaskIsPending || updateTaskIsPending}
          >
            {deleteTaskIsPending ? (
              <LoaderIcon className="animate-spin text-brand-white" />
            ) : (
              <>
                <TrashIcon className="text-brand-white" />
                Deletar tarefa
              </>
            )}
          </Button>
        </div>
        <form onSubmit={handleSubmit(handleSaveClick)}>
          <div className="space-y-6 rounded-xl bg-brand-white p-6">
            <div>
              <Input
                label="Nome"
                id="Nome"
                {...register("title", {
                  required: "Título é obrigatório",
                  validate: (value) =>
                    value.trim() ? true : "Título não pode estar vazio!",
                })}
                errorMessage={errors?.title?.message}
              />
            </div>
            <div>
              <TimeSelect
                id="time"
                {...register("time", {
                  required: "Horário é obrigatório",
                })}
                errorMessage={errors?.time?.message}
              />
            </div>
            <div>
              <Input
                label="Descrição"
                id="Descrição"
                {...register("description", {
                  required: "Descrição é obrigatória",
                  validate: (value) =>
                    value.trim() ? true : "Descrição não pode estar vazia!",
                })}
                errorMessage={errors?.description?.message}
              />
            </div>
          </div>
          <div className="mt-3 flex w-full justify-end gap-3">
            <Button
              size={"large"}
              color="primary"
              disabled={updateTaskIsPending || deleteTaskIsPending}
              className="w-[150px]"
              type="submit"
            >
              {updateTaskIsPending ? (
                <LoaderIcon className="animate-spin text-brand-white" />
              ) : (
                "Salvar"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskDetails;
