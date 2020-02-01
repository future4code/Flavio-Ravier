export const checkTaskAction = checkTask => {
  return {
    type: "CHECK_TASK",
    payload: {
      checkTask: checkTask
    }
  };
};