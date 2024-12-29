export interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}

export interface FormDataProps {
  title?: string;
  time?: "morning" | "afternoon" | "evening";
  description?: string;
  status?: string;
}
