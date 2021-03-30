import * as ActionTypes from "../actions/actionTypes";

const initState = { loading: false, item: {}, error: null };

const recipeReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.RECIPE_LOADING:
      return { ...state, loading: true, error: null };
    case ActionTypes.RECIPE_SUCCESS:
      return { ...state, loading: false, item: action.payload, error: null };
    case ActionTypes.RECIPE_FAILED:
      return { ...state, loading: false, items: {}, error: action.payload };
    default:
      return state;
  }
};

export default recipeReducer;
