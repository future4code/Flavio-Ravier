const initialState = {
  allTodos: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      const newTodo = {
        id: new Date().getTime(),
        text: action.payload.text,
        completed: false
      };
      return { allTodos: [...state.allTodos, newTodo] };
    case "COMPLETE_TODO": {
      const newTodos = [...state.allTodos];
      const { todoId } = action.payload;

      const indexToChange = newTodos.findIndex(todo => todo.id === todoId);
      newTodos[indexToChange].completed = !newTodos[indexToChange].completed;

      return { ...state, allTodos: newTodos };
    }
    case "DELETE_TODO": {
      const newTodos = [...state.allTodos];
      const { todoId } = action.payload;

      const indexToRemove = newTodos.findIndex(todo => todo.id === todoId);
      newTodos.splice(indexToRemove, 1);

      return { ...state, allTodos: newTodos };
    }
    default:
      return state;
  }
};

export default todos;
