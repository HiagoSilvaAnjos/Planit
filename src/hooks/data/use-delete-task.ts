import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";

export const useDeleteTask = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteTask", taskId],
    mutationFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error();
      }

      const taskDeleted = await response.json();

      return taskDeleted;
    },
    onSuccess: (taskDeleted) => {
      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        return currentTasks.filter((oldTask) => oldTask.id !== taskDeleted.id);
      });
    },
  });
};
