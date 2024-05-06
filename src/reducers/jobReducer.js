import { createSlice } from "@reduxjs/toolkit";
import jobService from "../services/jobs";

const initialState = {
  jobs: [],
  filteredJobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    filterByRole(state, action) {
      const filteredJobs = state.jobs.filter((jobs) =>
        jobs.jobRole.toLowerCase().includes(action.payload)
      );

      return {
        ...state,
        filteredJobs:
          action.payload.length > 0 ? filteredJobs : [...state.jobs],
      };
    },
    appendJob(state, action) {
      state.jobs.push(action.payload);
    },
    setJobs(state, action) {
      state.jobs = action.payload;
    },
  },
});

export const initializeJobs = () => {
  return async (dispatch) => {
    const jobs = await jobService.getAllJobs();
    dispatch(setJobs(jobs));
  };
};

export const { appendJob, setJobs, filterByRole } = jobSlice.actions;
export default jobSlice.reducer;
