import * as ActionTypes from "../actions/actionTypes";

const initState = { isLoading: false, items: [], error: null };

const nutrientsReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.NUTRIENTS_LOADING:
      return { ...state, loading: true, error: null };
    case ActionTypes.NUTRIENTS_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: null };
    case ActionTypes.NUTRIENTS_FAILED:
      return { ...state, loading: false, items: [], error: action.payload };
    default:
      return state;
  }
};

export default nutrientsReducer;
