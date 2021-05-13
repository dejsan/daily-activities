import * as constants from "../constants";

const initialState = constants.INIT_STATE;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION.ACTION_1:
      return initialState;

    case constants.ACTION.ACTION_2:
      return {
        ...initialState,
        var1: action.data.var,
      };

    default:
      return state;
  }
};

export default reducer;
