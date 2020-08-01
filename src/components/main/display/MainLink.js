import React from "react";
import { Link } from "react-router-dom";
import Reveal from "react-reveal/Reveal";

export default function MainLink(props) {
  const companyQueryString = props.job.company.replace(/[^A-Za-z]/g, "");
  const titleQueryString = props.job.title.replace(/[^A-Za-z]/g, "");
  return (
    <Reveal>
      <div className="main-link">
        <Link
          to={{
            pathname: `/jobs/details`,
            search: `?company=${companyQueryString}&jobDescription=${titleQueryString}`,
            state: { job: props.job },
          }}
        >
          <span role="img" aria-label="link">
            🔗Detailed Job Description
          </span>
        </Link>
      </div>
    </Reveal>
  );
}
