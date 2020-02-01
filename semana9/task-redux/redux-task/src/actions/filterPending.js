export const filterPendingAction = filterPending => {
  return {
    type: "FILTER_PENDING",
    payload: {
      filterPending: filterPending
    }
  };
};