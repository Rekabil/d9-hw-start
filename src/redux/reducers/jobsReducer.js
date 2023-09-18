import { JOBS_LIST } from "../action";

const initialState = {
  content: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOBS_LIST:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
