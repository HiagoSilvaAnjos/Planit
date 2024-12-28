export const tasksMutationKeys = {
  addTask: () => ["tasks"],
  updateTask: (id: string) => ["updateTask", id],
  deleteTask: (id: string) => ["deleteTask", id],
};
