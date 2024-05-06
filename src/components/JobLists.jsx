import { useSelector } from "react-redux";
import Card from "./Card/Card";
import "./JobLists.css";

const JobLists = () => {
  const jobs = useSelector((state) => state.jobs);
  const filteredJobs = useSelector((state) => state.filter.filteredJobs);

  const jobsList = filteredJobs.length ? filteredJobs : jobs;

  return (
    <div className="job-lists-container">
      {jobsList.map((job) => {
        const {
          jdUid,
          companyName,
          jdLink,
          jobDetailsFromCompany,
          jobRole,
          location,
          logoUrl,
          maxExp,
          maxJdSalary,
          minExp,
          minJdSalary,
          salaryCurrencyCode,
        } = job;

        return (
          <Card
            key={jdUid}
            companyName={companyName}
            jobRole={jobRole}
            logoUrl={logoUrl}
            location={location}
            jdLink={jdLink}
            minExp={minExp}
            maxExp={maxExp}
            maxJdSalary={maxJdSalary}
            minJdSalary={minJdSalary}
            salaryCurrencyCode={salaryCurrencyCode}
            jobDetailsFromCompany={jobDetailsFromCompany}
          />
        );
      })}
    </div>
  );
};

export default JobLists;
