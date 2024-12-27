import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormDataProps, TaskProps } from "../../interfaces/interfaces";

export const useUpdateTask = (taskId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (newTask: FormDataProps) => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newTask.title,
          time: newTask.time,
          description: newTask.description,
        }),
      });

      if (!response.ok) {
        throw new Error();
      }
      const updatedTask = await response.json();
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
