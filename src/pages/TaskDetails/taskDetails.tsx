import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TaskProps {
  id: string;
  title: string;
  description: string;
  time: "morning" | "afternoon" | "evening";
  status: "not_started" | "in_progress" | "done";
}
const TaskDetails = () => {
  const [task, setTask] = useState<TaskProps>();
  const { taskId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      });
      const taskData = await response.json();
      setTask(taskData);
    };

    fetchData();
  }, [taskId]);

  console.log(task);

  return <div>{task?.description}</div>;
};

export default TaskDetails;
