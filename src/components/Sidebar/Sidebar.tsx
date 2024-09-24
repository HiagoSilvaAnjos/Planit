import { HomeIcon, TasksIcon } from "../../assets/IconsComponents";
import SidebarButton from "../SidebarButton/SidebarButton";

const Sidebar = () => {
  return (
    <div className="h-screen w-[272px] bg-white">
      <div className="space-y-4 px-8 py-4">
        <h1 className="text-xl font-semibold text-[#00adb5]">Planit</h1>
        <p>
          Um simples{" "}
          <span className="text-[#00adb5]">gerenciador de tarefas</span>.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton variant={"unselected"}>
          <HomeIcon />
          Início
        </SidebarButton>
        <SidebarButton variant={"selected"}>
          <TasksIcon />
          Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
