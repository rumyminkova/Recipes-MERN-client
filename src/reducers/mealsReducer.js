import * as ActionTypes from "../actions/actionTypes";

const initState = { loading: false, meals: null, error: null };

const mealsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.MEALS_LOADING:
      return { ...state, loading: true, error: null };
    case ActionTypes.MEALS_SUCCESS:
      return { ...state, loading: false, meals: action.payload, error: null };
    case ActionTypes.MEALS_FAILED:
      return { ...state, loading: false, meals: {}, error: action.payload };
    default:
      return state;
  }
};

export default mealsReducer;
