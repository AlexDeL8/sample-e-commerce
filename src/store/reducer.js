const initialState = {
  a: 1,
  b: 2,
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case "ACTION_A":
      return state;
    case "ACTION_B":
      return state;
    default:
      return initialState;
  }
};

export default reducer;
