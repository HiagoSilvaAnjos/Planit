import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (newTask: TaskProps) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
      });

      if (!response.ok) {
        throw new Error();
      }

      return newTask;
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        return [...currentTasks, newTask];
      });
    },
  });
};
