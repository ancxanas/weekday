import { createSlice } from "@reduxjs/toolkit";
import jobService from "../services/jobs";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    appendJob(state, action) {
      return state.concat(action.payload);
    },
    setJobs(state, action) {
      return action.payload;
    },
  },
});

export const initializeJobs = () => {
  return async (dispatch) => {
    const jobs = await jobService.getJobs({ limit: 10, offset: 0 });
    dispatch(setJobs(jobs));
  };
};

export const getMoreJobs = ({ limit, offset }) => {
  return async (dispatch) => {
    const jobs = await jobService.getJobs({ limit, offset });
    dispatch(appendJob(jobs));
  };
};

export const { appendJob, setJobs } = jobSlice.actions;
export default jobSlice.reducer;
