import { useQuery } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";
import { taskQueryKeys } from "../../keys/queries";

export const useGetTask = (
  taskId: string,
  onSuccess: (data: TaskProps) => void
) => {
  return useQuery<TaskProps>({
    queryKey: taskQueryKeys.getOneTask(taskId),
    queryFn: async () => {
      const { data: taskData } = await api.get(`/tasks/${taskId}`);
      onSuccess(taskData);
      return taskData;
    },
  });
};
