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
import { TASKS } from "../../constantes/tasks";
import TaskItem from "../TaskItem/TaskItem";

const Tasks = () => {
  const [tasks] = useState(TASKS);

  const morningTasks = tasks.filter((task) => task.time == "morning");
  const afternoonTasks = tasks.filter((task) => task.time == "afternoon");
  const eveningTasks = tasks.filter((task) => task.time == "evening");

  return (
    <div className="w-full space-y-4 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00adb8]">
            Minhas Tarefas
          </span>
          <p className="text-xl font-semibold">Tasks</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>
          <Button>
            Adicionar tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhâ" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="my-6 space-y-6">
          <TasksSeparator title="Tarde" icon={<CloudSunIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
