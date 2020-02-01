export const deleteAllAction = deleteAll => {
  return {
    type: "DELETE_ALL",
    payload: {
      deleteAll: deleteAll
    }
  };
};