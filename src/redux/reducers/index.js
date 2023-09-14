const initialState = {
  favorite: {
    companies: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: {
          ...state.favorite,
          companies: [...state.favorite.companies, action.payload],
        },
      };
    case "REMOVE_FAVORITE":
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

export default mainReducer;
