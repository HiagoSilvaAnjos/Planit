import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormDataProps, TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";
import { taskQueryKeys } from "../../keys/queries";
import { tasksMutationKeys } from "../../keys/mutations";

export const useUpdateTask = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: tasksMutationKeys.updateTask(taskId),
    mutationFn: async (newTask: FormDataProps) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: newTask?.title,
        time: newTask?.time,
        description: newTask?.description,
        status: newTask?.status,
      });

      queryClient.setQueryData(
        taskQueryKeys.getAllTasks(),
        (currentTasks: TaskProps[]) =>
          currentTasks?.map((task) => (task.id === taskId ? updatedTask : task))
      );
      queryClient.setQueryData(taskQueryKeys.getOneTask(taskId), updatedTask);
      return updatedTask;
    },
  });
};
