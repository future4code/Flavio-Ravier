export const checkAllAction = checkAll => {
  return {
    type: "CHECK_ALL",
    payload: {
      checkAll: checkAll
    }
  };
};