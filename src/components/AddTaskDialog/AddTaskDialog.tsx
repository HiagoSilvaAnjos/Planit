import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import "./AddTaskDialog.css";
import { useRef } from "react";
import Select from "../Select/Select";

interface AddTaskDialogProps {
  isOpen: boolean;
  DialogClose: () => void;
}

const AddTaskDialog = ({ isOpen, DialogClose }: AddTaskDialogProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 left-0 top-0 flex h-screen w-screen items-center justify-center backdrop-blur transition"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova tarefa
              </h2>
              <p className="mb-4 mt-1 text-[#9A9C9F]">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder={"Insira o título da tarefa"}
                />
                <Select />
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
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
