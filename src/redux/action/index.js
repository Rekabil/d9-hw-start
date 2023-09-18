export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const JOBS_LIST = "JOBS_LIST";

export const addFavoriteAction = (jobData) => ({ type: ADD_FAVORITE, payload: jobData });
export const removeFavoritAction = (i) => ({ type: REMOVE_FAVORITE, payload: i });

const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const getJobsAction = (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        let fetchedJobs = await response.json();
        dispatch({ type: JOBS_LIST, payload: fetchedJobs.data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
