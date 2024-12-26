import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import "./AddTaskDialog.css";
import { useRef, useState } from "react";
import TimeSelect from "../TimeSelect/TimeSelect";
import { v4 as uuidv4 } from "uuid";
import { LoaderIcon } from "../../assets/IconsComponents";
interface AddTaskDialogProps {
  isOpen: boolean;
  DialogClose: () => void;
  AddTaskError: () => void;
  AddTaskSuccess: (task: {
    id: string;
    title: string;
    description: string;
    time: "morning" | "afternoon" | "evening";
    status: "not_started" | "in_progress" | "done";
  }) => void;
}

interface errosProps {
  InputName: string;
  message: string;
}

const AddTaskDialog = ({
  isOpen,
  DialogClose,
  AddTaskSuccess,
  AddTaskError,
}: AddTaskDialogProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [title, setTitle] = useState<string>("");
  const [time, setTime] = useState<"morning" | "afternoon" | "evening">(
    "morning"
  );
  const [description, setDescription] = useState<string>("");
  const [errors, setErrors] = useState<errosProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSaveClick = async () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        InputName: "title",
        message: "Título é obrigatório",
      });
    }

    if (!description.trim()) {
      newErrors.push({
        InputName: "description",
        message: "Descrição é obrigatório",
      });
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors([]);

    const newTask = {
      id: uuidv4(),
      title,
      time,
      description,
      status: "not_started" as const,
    };

    setIsLoading(true);
    const response = await fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTask),
    });

    if (!response.ok) {
      setIsLoading(false);
      return AddTaskError();
    }

    AddTaskSuccess(newTask);

    setTitle("");
    setTime("morning");
    setDescription("");
    setIsLoading(false);
    DialogClose();
  };

  const titleError = errors.find((error) => error.InputName === "title");
  const timeError = errors.find((error) => error.InputName === "time");
  const descriptionError = errors.find(
    (error) => error.InputName === "description"
  );

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
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova tarefa
              </h2>
              <p className="mb-4 mt-1 text-brand-text-gray">
                Insira as informações abaixo
              </p>
              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder={"Insira o título da tarefa"}
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  errorMessage={titleError?.message}
                  disabled={isLoading}
                />

                <TimeSelect
                  value={time}
                  onChange={(event) =>
                    setTime(
                      event.target.value as "morning" | "afternoon" | "evening"
                    )
                  }
                  id="time"
                  errorMessage={timeError?.message}
                  disabled={isLoading}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder={"Descreva a tarefa"}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  errorMessage={descriptionError?.message}
                  disabled={isLoading}
                />

                <div className="flex gap-3">
                  <Button
                    onClick={() => {
                      DialogClose();
                      setErrors([]);
                    }}
                    className="w-full"
                    color="secondary"
                    size="large"
                    disabled={isLoading}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={() => {
                      handleSaveClick();
                    }}
                    className="w-full"
                    size="large"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <LoaderIcon className="animate-spin text-brand-white" />
                    ) : (
                      "Salvar"
                    )}
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
