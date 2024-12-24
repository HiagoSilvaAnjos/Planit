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

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

interface errosProps {
  InputName: string;
  message: string;
}
const TaskDetails = () => {
  const [task, setTask] = useState<TaskProps>();
  const navigate = useNavigate();
  const { taskId } = useParams();

  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<"morning" | "afternoon" | "evening">(
    "morning"
  );
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<errosProps[]>([]);
  const [saveIsLoading, setSaveIsLoading] = useState<boolean>(false);
  const [deleteIsLoading, setDeleteTaskisLoading] = useState<boolean>(false);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        InputName: "title",
        message: "Título é obrigatório",
      });
    }

    if (!description.trim()) {
      newErrors.push({
        InputName: "description",
        message: "Descrição é obrigatório",
      });
    }

    if (!time) {
      newErrors.push({
        InputName: "time",
        message: "Horário é obrigatório",
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);

    setSaveIsLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        time,
        description,
      }),
    });

    if (!response.ok) {
      setSaveIsLoading(false);
      return toast.error("Erro ao salvar tarefa. Por favor, tente novamente.");
    }

    const newTask = await response.json();
    setTask(newTask);

    setSaveIsLoading(false);
    toast.success("Tarefa salva com sucesso!");
  };

  const handleDeleteTaskClick = async () => {
    setDeleteTaskisLoading(true);
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      setDeleteTaskisLoading(false);
      return toast.error(
        "Error ao deletar tarefa. Por favor, tente novamente."
      );
    }

    toast.success("Tarefa deletada com Sucesso!");
    navigate("/");
    setDeleteTaskisLoading(false);
  };

  const titleError = errors.find((error) => error.InputName === "title");
  const timeError = errors.find((error) => error.InputName === "time");
  const descriptionError = errors.find(
    (error) => error.InputName === "description"
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const taskData = await response.json();
      setTask(taskData);
    };

    fetchData();
  }, [taskId]);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setTime(task.time);
    }
  }, [task]);

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
        <div className="space-y-6 rounded-xl bg-brand-white p-6">
          <div>
            <Input
              label="Nome"
              id="Nome"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              error={titleError}
            />
          </div>
          <div>
            <TimeSelect
              value={time}
              id="time"
              onChange={(e) =>
                setTime(e.target.value as "morning" | "afternoon" | "evening")
              }
              error={timeError}
            />
          </div>
          <div>
            <Input
              label="Descrição"
              id="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              error={descriptionError}
            />
          </div>
        </div>
        <div className="flex w-full justify-end gap-3">
          <Button
            onClick={() => {
              handleSaveClick();
            }}
            size={"large"}
            color="primary"
            disabled={saveIsLoading}
            className="w-[150px]"
          >
            {saveIsLoading ? (
              <LoaderIcon className="animate-spin text-brand-white" />
            ) : (
              "Salvar"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
