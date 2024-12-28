import { HomeIcon, TasksIcon } from "../../assets/IconsComponents";
import SidebarButton from "../SidebarButton/SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-72 min-w-72 bg-white">
      <div className="space-y-4 px-8 py-4">
        <h1 className="text-xl font-semibold text-brand-primary">Planit</h1>
        <p>
          Um simples{" "}
          <span className="text-brand-primary">gerenciador de tarefas</span>.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton color={"unselected"} href="/">
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton color={"selected"} href="/tasks">
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
