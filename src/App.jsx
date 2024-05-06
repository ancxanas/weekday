import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMoreJobs, initializeJobs } from "./reducers/jobReducer";
import "./App.css";
import JobLists from "./components/JobLists";
import Filters from "./components/Filters";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeJobs());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      dispatch(getMoreJobs({ limit: 10, offset: 10 }));
    }
  };

  return (
    <div className="container">
      <Filters />
      <JobLists />
    </div>
  );
};

export default App;
