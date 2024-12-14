import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import "./AddTaskDialog.css";
import { useRef, useState } from "react";
import Select from "../TimeSelect/TimeSelect";
import { v4 as uuidv4 } from "uuid";
interface AddTaskDialogProps {
  isOpen: boolean;
  DialogClose: () => void;
  HandleSubmit: (task: {
    id: string;
    title: string;
    description: string;
    time: "morning" | "afternoon" | "evening";
    status: "not_started" | "in_progress" | "done";
  }) => void;
}

const AddTaskDialog = ({
  isOpen,
  DialogClose,
  HandleSubmit,
}: AddTaskDialogProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<"morning" | "afternoon" | "evening">(
    "morning"
  );
  const [description, setDescription] = useState<string>("");

  const handleSaveClick = () => {
    if (!title.trim() || !description.trim()) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    HandleSubmit({
      id: uuidv4(),
      title,
      time,
      description,
      status: "in_progress",
    });

    setTitle("");
    setTime("morning");
    setDescription("");
    DialogClose();
  };

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
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <Select
                  value={time}
                  onChange={(event) =>
                    setTime(
                      event.target.value as "morning" | "afternoon" | "evening"
                    )
                  }
                />
                <Input
                  id="description"
                  label="Descrição"
                  placeholder={"Descreva a tarefa"}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
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
                  <Button
                    onClick={handleSaveClick}
                    className="w-full"
                    size="large"
                  >
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
