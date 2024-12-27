import { useQuery } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";
import { api } from "../../lib/axios";

export const useGetTask = (
  taskId: string,
  onSuccess: (data: TaskProps) => void
) => {
  return useQuery<TaskProps>({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const { data: taskData } = await api.get(`/tasks/${taskId}`);
      onSuccess(taskData);
      return taskData;
    },
  });
};
