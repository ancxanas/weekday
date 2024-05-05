import { useEffect } from "react";
import Card from "./components/Card";
import { useDispatch } from "react-redux";
import { initializeJobs } from "./reducers/jobReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeJobs());
  }, [dispatch]);

  return (
    <div>
      <Card />
    </div>
  );
};

export default App;
