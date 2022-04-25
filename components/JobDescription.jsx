import React from "react";
import styles from "../styles/componentsStyle/JobDescription.module.scss";
import CompanyAddress from "./CompanyAddress";
import JobApplicationForm from "./JobApplicationForm";
import RoleHeading from "./RoleHeading";

const JobDescription = ({
  roleresponsibilities,
  handleClose,
  role,
  requirements,
  SIB_ENDPOINT,
  id,
  active,
}) => {
  return (
    <div
      style={{ background: " #171717", borderRadius: "10px" }}
      className={styles.descriptionContaner}
    >
      <div className={`${styles.JobDescriptionContainer} desc`}>
        <RoleHeading role={role} handleClose={handleClose} />
        <div className={styles.dhar}>
          <div className={styles.content}>
            <div className={styles.heading}>Roles and Responsibilities</div>
            <div className={styles.dharPoints}>
              <ul className={styles.dharList}>
                {active === id &&
                  roleresponsibilities?.map((e, i) => (
                    <li key={i} className={styles.dharItem}>
                      <div className={styles.dharItemStyle}>
                        {" "}
                        <h6 className={styles.dharText}>
                          <div></div>
                          {e}
                        </h6>{" "}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            {requirements && (
              <React.Fragment>
                {" "}
                <div className={styles.heading}>Requirements</div>
                <div className={styles.dharPoints}>
                  <ul className={styles.dharList}>
                    {requirements.map((e, i) => (
                      <li key={i} className={styles.dharItem}>
                        <div className={styles.dharItemStyle}>
                          {" "}
                          <h6 className={styles.dharText}>
                            <div></div>
                            {e}
                          </h6>{" "}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
        <CompanyAddress />
      </div>
      <JobApplicationForm SIB_ENDPOINT={SIB_ENDPOINT} role={role} />
    </div>
  );
};

export default JobDescription;
