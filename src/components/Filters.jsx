import { useDispatch } from "react-redux";
import Select from "react-select";
import { filterByRole } from "../reducers/jobReducer";

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

const Filters = ({ bool }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Select
        name="role-filter"
        options={roleOptions}
        placeholder="Role"
        isClearable
        onChange={(e) => {
          dispatch(filterByRole(e.value));
        }}
      />
      <Select
        options={roleOptions}
        onChange={(e) => dispatch(filterByRole(e.value))}
      />
    </div>
  );
};

export default Filters;
