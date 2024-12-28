export const taskQueryKeys = {
  getAllTasks: () => ["tasks"],
  getOneTask: (id: string) => ["task", id],
  addTask: () => ["addTask"],
  updateTask: (id: string) => ["updateTask", id],
  deleteTask: (id: string) => ["deleteTask", id],
};
