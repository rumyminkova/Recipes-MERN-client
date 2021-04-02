import * as ActionTypes from "../../actions/actionTypes";

const initState = { loading: false, items: [], error: null };

const myRecipesReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.MYRECIPES_LOADING:
      return { ...state, loading: true, error: null };
    case ActionTypes.MYRECIPES_SUCCESS:
      return { ...state, loading: false, items: action.payload, error: null };
    case ActionTypes.MYRECIPES_FAILED:
      return { ...state, loading: false, items: [], error: action.payload };

    case ActionTypes.MYRECIPES_ADD:
      return {
        ...state,
        loading: false,
        items: state.items.concat(action.payload),
        error: null,
      };

    // case ActionTypes.MYRECIPES_DELETE:
    //   return state.filter((favorite) => favorite !== action.payload);

    default:
      return state;
  }
};

export default myRecipesReducer;
