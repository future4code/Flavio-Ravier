export const unCheckTaskAction = unCheckTask => {
  return {
    type: "UNCHECK_TASK",
    payload: {
      unCheckTask: unCheckTask
    }
  };
};