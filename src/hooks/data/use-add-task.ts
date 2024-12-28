import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";
import { taskQueryKeys } from "../../keys/queries";
import { tasksMutationKeys } from "../../keys/mutations";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: tasksMutationKeys.addTask(),
    mutationFn: async (newTask: TaskProps) => {
      const { data: createdTask } = await api.post("/tasks", newTask);
      return createdTask;
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData(
        taskQueryKeys.getAllTasks(),
        (currentTasks: TaskProps[]) => {
          return [...currentTasks, newTask];
        }
      );
    },
  });
};
