import {
  AddIcon,
  CloudSunIcon,
  MoonIcon,
  SunIcon,
  TrashIcon,
} from "../../assets/IconsComponents";
import Button from "../Button/Button";

const Tasks = () => {
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
        {/* MANHÂ */}
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-[#f4f4f5] pb-3">
            <SunIcon />
            <p className="text-xs text-[#9a9c9f]">Manhâ</p>
          </div>
        </div>

        {/* TARDE */}
        <div className="my-6 space-y-6">
          <div className="flex gap-2 border-b border-[#f4f4f5] pb-3">
            <CloudSunIcon />
            <p className="text-xs text-[#9a9c9f]">Tarde</p>
          </div>
        </div>

        {/* NOITE */}
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-[#f4f4f5] pb-3">
            <MoonIcon />
            <p className="text-xs text-[#9a9c9f]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
