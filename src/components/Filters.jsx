import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  filterByExperience,
  filterByLocation,
  filterByName,
  filterByRole,
} from "../reducers/filterReducer";
import { useState } from "react";
import "./Filter.css";

const roleOptions = [
  {
    value: "frontend",
    label: "Frontend",
  },
  {
    value: "backend",
    label: "Backend",
  },
  {
    value: "tech lead",
    label: "Tech Lead",
  },
  {
    value: "android",
    label: "Android",
  },
  {
    value: "ios",
    label: "iOs",
  },
];

const experienceOptions = [];

for (let i = 0; i <= 10; i++) {
  let obj = {
    value: i,
    label: i,
  };

  experienceOptions.push(obj);
}

const locationOptions = [
  {
    value: "delhi ncr",
    label: "Delhi NCR",
  },
  {
    value: "bangalore",
    label: "Bangalore",
  },
  {
    value: "mumbai",
    label: "Mumbai",
  },
  {
    value: "chennai",
    label: "Chennai",
  },
  {
    value: "remote",
    label: "Remote",
  },
];

const Filters = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);

  const [name, setName] = useState("");

  const handleFilterByLocation = (e) => {
    dispatch(filterByLocation({ location: e.value, jobs }));
  };

  const handleFilterByRole = (e) => {
    dispatch(filterByRole({ role: e.value, jobs }));
  };

  const handleFilterByExperience = (e) => {
    dispatch(filterByExperience({ experience: e.value, jobs }));
  };

  const handleFilterByName = (e) => {
    setName(e.target.value);
    dispatch(filterByName({ name: e.target.value, jobs }));
  };

  return (
    <div className="filter-container">
      <Select
        className="role-filter-select"
        name="role-filter"
        options={roleOptions}
        placeholder="Role"
        isClearable
        onChange={handleFilterByRole}
      />
      <Select
        className="experience-filter-select"
        options={experienceOptions}
        isClearable
        name="experience-filter"
        placeholder="Experience"
        onChange={handleFilterByExperience}
      />
      <Select
        className="location-filter-select"
        options={locationOptions}
        isClearable
        name="location-filter"
        placeholder="Location"
        onChange={handleFilterByLocation}
      />
      <input
        className="name-filter-input"
        value={name}
        name="name-filter"
        placeholder="Company name"
        onChange={handleFilterByName}
      />
    </div>
  );
};

export default Filters;
