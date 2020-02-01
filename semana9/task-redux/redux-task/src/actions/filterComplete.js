export const checkCompleteAction = checkComplete => {
  return {
    type: "CHECK-COMPLETE",
    payload: {
      checkComplete: checkComplete
    }
  };
};