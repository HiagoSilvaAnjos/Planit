import { AddIcon, TrashIcon } from "../../assets/IconsComponents";
import Button from "../Button/Button";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00adb8]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Tasks</h2>
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
    </div>
  );
};

export default Tasks;
