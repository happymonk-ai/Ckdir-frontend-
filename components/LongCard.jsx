import React, { useEffect, useState } from "react";
import { useQuery } from "urql";
import styles from "../styles/componentsStyle/LongCard.module.scss";
import JobDescription from "./JobDescription";
import RoleHeader from "./RoleHeader";

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";

const jdIdQuery = `
query ($id: ID!){
  jobDeescription(id: $id){
      JobTitle,
      Description,
      published_at,
      Objectiveofthisrole,
      DailyandMonthlyresponsibilities
    }
  }
`;

const LongCard = ({ children, url, role, id, active, handleActive }) => {
  const [roleDetails, setToogleRoleDetails] = useState(false);
  const [roleresponsibilities, setRoleresponsibilities] = useState([]);
  const [requirements, setRequirements] = useState(null);

  const handleRoleDetailsToogle = (status) => {
    handleActive(id);
    if (active === id) {
      setToogleRoleDetails(!roleDetails);
    } else {
      setToogleRoleDetails(true);
    }
  };

  const [result, reexecuteQuery] = useQuery({
    query: jdIdQuery,
    variables: {
      id,
    },
    pause: !id,
  });
  const { data, fetching } = result;

  useEffect(() => { }, [roleDetails]);

  console.log(role.JobTitle)

  useEffect(() => {
    let responsibility = data?.jobDeescription?.DailyandMonthlyresponsibilities;
    let objectives = data?.jobDeescription?.Objectiveofthisrole;
    let whatYouWillDo = [];

    if (responsibility) {
      let resArray = responsibility?.split("\n\n");
      let allRequirements = responsibility?.split("\n\n")[1] || null;
      allRequirements = allRequirements?.split("\n").filter((r) => r !== "");

      resArray = resArray[0].split("\n")?.filter((r) => {
        if (r !== "") {
          return r;
        }
      });
      setRequirements(allRequirements);
      setRoleresponsibilities(resArray);
    }
    if (!responsibility && objectives) {
      let resArray = objectives?.split("\n\n");
      let allRequirements = objectives?.split("\n\n")[1] || null;
      allRequirements = allRequirements?.split("\n").filter((r) => r !== "");

      resArray = resArray[0].split("\n")?.filter((r) => {
        if (r !== "") {
          return r;
        }
      });
      setRequirements(allRequirements);
      setRoleresponsibilities(resArray);
    }
  }, [data]);

  return (
    <div className={styles.carrerCardContainer}>
      <RoleHeader
        show={!roleDetails || active !== id}
        roleresponsibilities={roleresponsibilities}
        handleRoleDetailsToogle={handleRoleDetailsToogle}
        data={children}
      />
      {roleDetails && roleresponsibilities?.length > 0 && active === id && (
        <React.Fragment>
          <JobDescription
            roleresponsibilities={roleresponsibilities}
            handleClose={handleRoleDetailsToogle}
            role={role}
            id={id}
            requirements={requirements}
            SIB_ENDPOINT={SIB_ENDPOINT}
            active={active}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default LongCard;
