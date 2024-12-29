import { CloudSunIcon, MoonIcon, SunIcon } from "../../assets/IconsComponents";
import TasksSeparator from "../TasksSeparator/TasksSeparator";
import TaskItem from "../TaskItem/TaskItem";
import { useGetTasks } from "../../hooks/data/use-get-tasks";
import { TaskProps } from "../../interfaces/interfaces";
import Header from "../Header/Header";

const Tasks = () => {
  const { data: tasks } = useGetTasks();

  const morningTasks = tasks?.filter(
    (task: TaskProps) => task.time == "morning"
  );
  const afternoonTasks = tasks?.filter(
    (task: TaskProps) => task.time == "afternoon"
  );
  const eveningTasks = tasks?.filter(
    (task: TaskProps) => task.time == "evening"
  );

  return (
    <div className="space-y- w-full space-y-4 px-8 py-16">
      <Header subtitle="Minhas Tarefas" title="Minhas Tarefas" />

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada para o período da Manhã
            </p>
          )}
          {morningTasks?.map((task: TaskProps) => (
            <TaskItem key={task.id} task={task} />
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
            <TaskItem key={task.id} task={task} />
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
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
