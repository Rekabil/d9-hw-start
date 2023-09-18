import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action";

const initialState = {
  favorite: {
    companies: [],
  },
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: [...state.favorite.companies, action.payload],
        },
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: state.favorite.companies.filter((_, i) => i !== action.payload),
        },
      };
    default:
      return state;
  }
};
export default favoriteReducer;
