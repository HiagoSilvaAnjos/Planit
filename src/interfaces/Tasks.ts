export interface TasksProps {
  id: number;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

export interface TaskItemProps {
  task: TasksProps;
}
