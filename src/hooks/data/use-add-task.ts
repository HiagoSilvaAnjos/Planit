import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (newTask: TaskProps) => {
      const { data: createdTask } = await api.post("/tasks", newTask);
      return createdTask;
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        return [...currentTasks, newTask];
      });
    },
  });
};
