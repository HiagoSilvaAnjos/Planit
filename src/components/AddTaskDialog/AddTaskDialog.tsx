import { createPortal } from "react-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { CSSTransition } from "react-transition-group";
import "./AddTaskDialog.css";
import { useRef } from "react";
import TimeSelect from "../TimeSelect/TimeSelect";
import { v4 as uuidv4 } from "uuid";
import { LoaderIcon } from "../../assets/IconsComponents";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddTask } from "../../hooks/data/use-add-task";
import { FormDataProps } from "../../interfaces/interfaces";
interface AddTaskDialogProps {
  isOpen: boolean;
  DialogClose: () => void;
}

const AddTaskDialog = ({ isOpen, DialogClose }: AddTaskDialogProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>();

  const { mutate: addTask, isPending } = useAddTask();

  const handleSaveClick = async (data: FormDataProps) => {
    const newTask = {
      id: uuidv4(),
      title: data.title,
      time: data.time,
      description: data.description,
      status: "not_started" as const,
    };

    addTask(newTask, {
      onSuccess: () => {
        toast.success("Tarefa Adicionada com sucesso!");
        reset({
          title: "",
          time: "morning",
          description: "",
        });
        DialogClose();
      },
      onError: () => {
        toast.error("Erro ao adicionar tarefa. Por favor, tente novamente.");
      },
    });
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
              <h2 className="text-xl font-semibold text-brand-dark-blue">
                Nova tarefa
              </h2>
              <p className="mb-4 mt-1 text-brand-text-gray">
                Insira as informações abaixo
              </p>
              <form onSubmit={handleSubmit(handleSaveClick)}>
                <div className="flex w-[336px] flex-col space-y-4">
                  <Input
                    id="title"
                    label="Título"
                    placeholder={"Insira o título da tarefa"}
                    {...register("title", {
                      required: "Título é obrigatório",
                      validate: (value) =>
                        value.trim() ? true : "Título não pode estar vazio!",
                    })}
                    errorMessage={errors.title?.message}
                    disabled={isPending}
                  />

                  <TimeSelect
                    id="time"
                    {...register("time", {
                      required: "Horário é obrigatório",
                    })}
                    errorMessage={errors.time?.message}
                    disabled={isPending}
                  />

                  <Input
                    id="description"
                    label="Descrição"
                    placeholder={"Descreva a tarefa"}
                    {...register("description", {
                      required: "Descrição é obrigatória",
                      validate: (value) =>
                        value.trim() ? true : "Descrição não pode estar vazia!",
                    })}
                    errorMessage={errors.description?.message}
                    disabled={isPending}
                  />

                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        DialogClose();
                        reset({
                          title: "",
                          time: "morning",
                          description: "",
                        });
                      }}
                      className="w-full"
                      color="secondary"
                      size="large"
                      disabled={isPending}
                      type="button"
                    >
                      Cancelar
                    </Button>
                    <Button
                      className="w-full"
                      size="large"
                      disabled={isPending}
                      type="submit"
                    >
                      {isPending ? (
                        <LoaderIcon className="animate-spin text-brand-white" />
                      ) : (
                        "Salvar"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
