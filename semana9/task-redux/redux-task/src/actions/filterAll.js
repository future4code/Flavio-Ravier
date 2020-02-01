export const filterAllAction = filterAll => {
  return {
    type: "FILTER_ALL",
    payload: {
      filterAll: filterAll
    }
  };
};