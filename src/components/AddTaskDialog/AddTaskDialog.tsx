import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";

interface AddTaskDialogProps {
  isOpen: boolean;
  DialogClose: () => void;
}

const AddTaskDialog = ({ isOpen, DialogClose }: AddTaskDialogProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur transition">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova tarefa</h2>
        <p className="mb-4 mt-1 text-[#9A9C9F]">Insira as informações abaixo</p>
        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            id="title"
            label="Título"
            placeholder={"Insira o título da tarefa"}
          />
          <Input
            id="time"
            label="Horário"
            placeholder={"Insira o horário da tarefa"}
          />
          <Input
            id="description"
            label="Descrição"
            placeholder={"Descreva a tarefa"}
          />
          <div className="flex gap-3">
            <Button
              onClick={DialogClose}
              className="w-full"
              variant="secondary"
              size="large"
            >
              Cancelar
            </Button>
            <Button className="w-full" size="large">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddTaskDialog;
