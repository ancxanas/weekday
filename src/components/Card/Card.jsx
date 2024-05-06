import "./Card.css";
import PropTypes from "prop-types";

const toPascalCaseWithSpaces = (str) => {
  const words = str.trim().split(/\s+/);
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const Card = ({
  companyName,
  jobRole,
  location,
  logoUrl,
  maxJdSalary,
  minExp,
  minJdSalary,
  jobDetailsFromCompany,
}) => {
  jobRole = toPascalCaseWithSpaces(jobRole);
  location = toPascalCaseWithSpaces(location);

  if (minExp === null) minExp = 0;

  return (
    <div className="card-container">
      <div className="hourglass-container">
        ⏳ Posted {Math.floor(Math.random() * 10) + 1} days ago
      </div>

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
          ? `₹${minJdSalary} - ${maxJdSalary} LPA ✅`
          : `Upto ₹${maxJdSalary} LPA ✅`}
      </div>

      <div className="company-details-container">
        <div className="company-details-title">About Company:</div>
        <div className="job-description-container">
          <span className="job-description-span">{jobDetailsFromCompany}</span>
        </div>
        <div className="view-more-container">
          <span className="view-more-link" href="#">
            View more
          </span>
        </div>
      </div>

      <div className="experience-container">
        <div className="experience-title">Minimum Experience</div>
        <div className="experience-value">
          {minExp > 1 ? `${minExp} years` : `${minExp} year`}
        </div>
      </div>

      <div className="buttons">
        <button className="easy-apply-button">⚡ Easy Apply</button>
        <button className="referral-button">Unlock referral asks</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  companyName: PropTypes.string,
  jdLink: PropTypes.string,
  jobRole: PropTypes.string,
  location: PropTypes.string,
  logoUrl: PropTypes.string,
  maxExp: PropTypes.number,
  maxJdSalary: PropTypes.number,
  minExp: PropTypes.number,
  minJdSalary: PropTypes.number,
  salaryCurrencyCode: PropTypes.string,
  jobDetailsFromCompany: PropTypes.string,
};

export default Card;
