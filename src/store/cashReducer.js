const initialState = {
  cash: 0,
};

// action = {
//     type: "ADD CASH",
//     payload: 1000000
// }

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD CASH":
      return { ...state, cash: state.cash + action.payload };
    // break

    case "MINUS CASH":
      return { ...state, cash: state.cash - action.payload };
    // break

    default:
      return state;
  }
};
