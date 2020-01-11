const initialState = {
  currentPage: "SwipeScreen",
};
// precisa fazer nada
export default (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE_CURRENT_PAGE":
      return { currentPage: action.payload.newPage }
    default:
      return state;
  }
}
