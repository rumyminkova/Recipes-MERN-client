import * as ActionTypes from "../actions/actionTypes";

const initState = { loading: false, items: [], error: null };

const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.RECIPES_LOADING:
      return { ...state, loading: true, error: null };
    case ActionTypes.RECIPES_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: null };
    case ActionTypes.RECIPES_FAILED:
      return { ...state, loading: false, items: [], error: action.payload };
    default:
      return state;
  }
};

export default recipesReducer;
