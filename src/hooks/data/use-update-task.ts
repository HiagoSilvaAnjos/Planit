import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormDataProps, TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";

export const useUpdateTask = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (newTask: FormDataProps) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: newTask.title,
        time: newTask.time,
        description: newTask.description,
      });

      queryClient.setQueryData(["tasks"], (currentTasks: TaskProps[]) => {
        currentTasks.map((task) => {
          if (task.id === taskId) {
            return updatedTask;
          }
          return task;
        });
      });
      queryClient.setQueryData(["task", taskId], updatedTask);
      return updatedTask;
    },
  });
};
