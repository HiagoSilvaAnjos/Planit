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
import { useGetTask } from "../../hooks/data/use-get-task";
import { useUpdateTask } from "../../hooks/data/use-update-task";
import { useDeleteTask } from "../../hooks/data/use-delete-task";
import { FormDataProps } from "../../interfaces/interfaces";

const TaskDetails = () => {
  const navigate = useNavigate();
  const { taskId } = useParams<{ taskId: string }>();
  const validTaskId = taskId ?? "";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>();

  const handleBackClick = () => {
    navigate("/");
  };

  const { data: task, isSuccess } = useGetTask(validTaskId, (task) => {
    reset({
      title: task.title,
      time: task.time,
      description: task.description,
    });
  });

  const { mutate: updateTask, isPending: updateTaskIsPending } =
    useUpdateTask(validTaskId);

  const { mutate: deleteTask, isPending: deleteTaskIsPending } =
    useDeleteTask(validTaskId);

  const handleSaveClick = async (data: FormDataProps) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa salva com sucesso!");
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
      {isSuccess ? (
        <>
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
        </>
      ) : (
        <p>Erro ao procurar tarefa...</p>
      )}
    </div>
  );
};

export default TaskDetails;
