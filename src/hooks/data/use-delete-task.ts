import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";
import { taskQueryKeys } from "../../keys/queries";
import { tasksMutationKeys } from "../../keys/mutations";

export const useDeleteTask = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: tasksMutationKeys.deleteTask(taskId),
    mutationFn: async () => {
      const { data: taskDeleted } = await api.delete(`/tasks/${taskId}`);
      return taskDeleted;
    },
    onSuccess: (taskDeleted) => {
      queryClient.setQueryData(
        taskQueryKeys.getAllTasks(),
        (currentTasks: TaskProps[]) => {
          return currentTasks.filter(
            (oldTask) => oldTask.id !== taskDeleted.id
          );
        }
      );
    },
  });
};
