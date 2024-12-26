import { useEffect, useState } from "react";
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

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

const TaskDetails = () => {
  const [task, setTask] = useState<TaskProps>();
  const [deleteIsLoading, setDeleteTaskisLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { taskId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  interface FormData {
    title: string;
    time: "morning" | "afternoon" | "evening";
    description: string;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async (data: FormData) => {
    console.log(data);
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title.trim(),
        time: data.time,
        description: data.description.trim(),
      }),
    });

    if (!response.ok) {
      return toast.error("Erro ao salvar tarefa. Por favor, tente novamente.");
    }

    const newTask: TaskProps = await response.json();
    setTask(newTask);
    toast.success("Tarefa salva com sucesso!");
  };

  const handleDeleteTaskClick = async () => {
    setDeleteTaskisLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setDeleteTaskisLoading(false);
      return toast.error("Erro ao deletar tarefa. Por favor, tente novamente.");
    }

    toast.success("Tarefa deletada com sucesso!");
    navigate("/");
    setDeleteTaskisLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const taskData = await response.json();
      setTask(taskData);
      reset({
        title: taskData.title,
        time: taskData.time,
        description: taskData.description,
      });
    };

    fetchData();
  }, [taskId, reset]);

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
            disabled={deleteIsLoading}
          >
            {deleteIsLoading ? (
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
              disabled={isSubmitting}
              className="w-[150px]"
              type="submit"
            >
              {isSubmitting ? (
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
