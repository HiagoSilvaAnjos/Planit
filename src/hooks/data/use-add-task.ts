import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface Task {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}
export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["addTask"],
    mutationFn: async (newTask: Task) => {
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
      queryClient.setQueryData(["tasks"], (currentTasks: Task[]) => {
        return [...currentTasks, newTask];
      });
    },
  });
};
