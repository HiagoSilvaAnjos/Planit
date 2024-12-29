import {
  LoaderIcon,
  TasksIcon,
  TasksTwoIcon,
} from "../../assets/IconsComponents";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import TaskItem from "../../components/TaskItem/TaskItem";
import { useGetTasks } from "../../hooks/data/use-get-tasks";
import { TaskProps } from "../../interfaces/interfaces";

const HomePage = () => {
  const { data: Tasks } = useGetTasks();

  const totalTasks = Tasks?.length || 0;
  const completedTasks =
    Tasks?.filter((task: TaskProps) => task.status === "done").length || 0;
  const inProgressTasks =
    Tasks?.filter((task: TaskProps) => task.status === "in_progress").length ||
    0;

  return (
    <div className="flex">
      <Sidebar />
      <div className="space-y- w-full space-y-6 px-8 py-16">
        <Header subtitle="Início" title="Início" />
        <div className="grid grid-cols-3 gap-9">
          <DashboardCard
            icon={<TasksTwoIcon className="text-brand-primary" />}
            mainText={totalTasks}
            secondaryText="Tarefas Disponíveis"
          />
          <DashboardCard
            icon={<TasksIcon className="text-brand-primary" />}
            mainText={completedTasks.toString()}
            secondaryText="Tarefas Concluídas"
          />
          <DashboardCard
            icon={<LoaderIcon className="text-brand-primary" />}
            mainText={inProgressTasks.toString()}
            secondaryText="Tarefas em andamento"
          />
        </div>
        <div className="space-y-6 rounded-[10px] bg-white p-6">
          <div>
            <h3 className="font-semibold">Tarefas</h3>
            <span className="text-sm text-brand-dark-gray">
              Resumo das tarefas disponíveis
            </span>
          </div>
          <div className="space-y-3">
            {Tasks?.map((task: TaskProps) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
