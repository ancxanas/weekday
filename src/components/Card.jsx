import "./Card.css";

const toPascalCaseWithSpaces = (str) => {
  const words = str.trim().split(/\s+/);
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Card = ({
  companyName,
  jdLink,
  jobRole,
  location,
  logoUrl,
  maxExp,
  maxJdSalary,
  minExp,
  minJdSalary,
  salaryCurrencyCode,
  jobDetailsFromCompany,
}) => {
  jobRole = toPascalCaseWithSpaces(jobRole);
  location = toPascalCaseWithSpaces(location);

  return (
    <div className="card-container">
      <div className="hourglass-container">Posted 4 days aho</div>
      <div className="jobinfo-main">
        <div className="jobinfo-left">
          <img
            className="company-logo"
            src={logoUrl}
            alt={`${companyName} Logo`}
          />
        </div>
        <div className="jobinfo-right">
          <div className="company-name">{companyName}</div>
          <div className="job-role">{jobRole}</div>
          <div className="location">{location}</div>
        </div>
      </div>
      <div className="salary-details">
        Estimated Salary:{" "}
        {minJdSalary && maxJdSalary
          ? `${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}`
          : `Upto ${maxJdSalary} ${salaryCurrencyCode}`}
      </div>
      <div>
        <div>About Company:</div>
        <div className="job-description-container">
          <span className="job-description-span">{jobDetailsFromCompany}</span>
        </div>
        <span className="view-more-link" href="#">
          View more
        </span>
      </div>
      <div className="experience-container">
        <div className="experience-title">Minumum Experience</div>
        <div className="experience-value">
          {minExp > 1 ? `${minExp} years` : `${minExp} year`}
        </div>
      </div>
      <div className="buttons">
        <button className="easy-apply-button">Easy Apply</button>

        <button className="referral-button">Unlock referral asks</button>
      </div>
    </div>
  );
};

export default Card;
