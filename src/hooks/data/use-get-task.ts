import { useQuery } from "@tanstack/react-query";

interface TaskData {
  id: string;
  title: string;
  time: "morning" | "afternoon" | "evening";
  description: string;
  status: "not_started" | "in_progress" | "done";
}

export const useGetTask = (
  taskId: string,
  onSuccess: (data: TaskData) => void
) => {
  return useQuery<TaskData>({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch task data");
      }

      const taskData: TaskData = await response.json();
      onSuccess(taskData);

      return taskData;
    },
  });
};
