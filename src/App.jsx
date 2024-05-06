import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeJobs } from "./reducers/jobReducer";
import "./App.css";
import JobLists from "./components/JobLists";
import Filters from "./components/Filters";

const App = () => {
  const dispatch = useDispatch();
  let bool = true;

  useEffect(() => {
    dispatch(initializeJobs());
  }, [dispatch]);

  return (
    <div className="container">
      <Filters bool={bool} />
      <JobLists bool={bool} />
    </div>
  );
};

export default App;
