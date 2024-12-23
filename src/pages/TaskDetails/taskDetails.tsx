import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  ArrowLeftIcon,
  ChevroRightIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import TimeSelect from "../../components/TimeSelect/TimeSelect";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}
const TaskDetails = () => {
  const [task, setTask] = useState<TaskProps>();
  const { taskId } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

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
              <span
                onClick={handleBackClick}
                className="cursor-pointer text-brand-text-gray"
              >
                Minhas Tarefas
              </span>
              <ChevroRightIcon className="text-brand-text-gray" />
              <span className="font-semibold text-brand-primary">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>
          <Button color="danger" className="self-end">
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>
        <div className="space-y-6 rounded-xl bg-brand-white p-6">
          <div>
            <Input label="Nome" id="Nome" value={task?.title} />
          </div>
          <div>
            <TimeSelect value={task?.title} id="time" />
          </div>
          <div>
            <Input label="Nome" id="Nome" value={task?.title} />
          </div>
        </div>
        <div className="flex w-full justify-end gap-3">
          <Button size={"large"} color="secondary">
            Cancelar
          </Button>
          <Button size={"large"} color="primary">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
