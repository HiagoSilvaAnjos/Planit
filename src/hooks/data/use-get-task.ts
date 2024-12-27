import { useQuery } from "@tanstack/react-query";
import { TaskProps } from "../../interfaces/interfaces";

export const useGetTask = (
  taskId: string,
  onSuccess: (data: TaskProps) => void
) => {
  return useQuery<TaskProps>({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch task data");
      }

      const taskData: TaskProps = await response.json();
      onSuccess(taskData);

      return taskData;
    },
  });
};
