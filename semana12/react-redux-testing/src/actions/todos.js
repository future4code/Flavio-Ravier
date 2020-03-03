export const createTodoAction = text => ({
  type: "CREATE_TODO",
  payload: {
    text
  }
});

export const completeTodoAction = todoId => ({
  type: "COMPLETE_TODO",
  payload: {
    todoId
  }
});

export const deleteTodoAction = todoId => ({
  type: "DELETE_TODO",
  payload: {
    todoId
  }
});
