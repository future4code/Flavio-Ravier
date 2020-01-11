export const deleteTaskAction = deleteTask => {
  return {
    type: "DELETE_TASK",
    payload: {
      deleteTask: deleteTask
    }
  };
};