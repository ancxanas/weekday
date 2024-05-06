import { createSlice } from "@reduxjs/toolkit";
import jobService from "../services/jobs";

const jobSlice = createSlice({
  name: "jobs",
  initialState: [],
  reducers: {
    appendJob(state, action) {
      state.push(action.payload);
    },
    setJobs(state, action) {
      return action.payload;
    },
  },
});

export const initializeJobs = () => {
  return async (dispatch) => {
    const jobs = await jobService.getAllJobs();
    dispatch(setJobs(jobs));
  };
};

export const { appendJob, setJobs } = jobSlice.actions;
export default jobSlice.reducer;
