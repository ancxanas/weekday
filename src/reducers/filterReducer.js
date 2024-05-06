import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filteredJobs: [],
  },
  reducers: {
    filterByRole(state, action) {
      const { role, jobs } = action.payload;
      state.filteredJobs = jobs.filter((job) =>
        job.jobRole.toLowerCase().includes(role)
      );
    },
    filterByExperience(state, action) {
      const { experience, jobs } = action.payload;
      state.filteredJobs = jobs.filter((job) => experience >= job.minExp);
    },
    filterByLocation(state, action) {
      const { location, jobs } = action.payload;
      state.filteredJobs = jobs.filter((job) =>
        job.location.includes(location)
      );
    },
    filterByName(state, action) {
      const { name, jobs } = action.payload;
      state.filteredJobs = jobs.filter((job) =>
        job.companyName.toLowerCase().includes(name)
      );
    },
  },
});

export const {
  filterByRole,
  filterByExperience,
  filterByLocation,
  filterByName,
} = filterSlice.actions;
export default filterSlice.reducer;
