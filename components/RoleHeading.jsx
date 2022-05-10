import { FaChevronUp } from "react-icons/fa";
import styles from "../styles/componentsStyle/JobDescription.module.scss";

const RoleHeading = ({ handleClose, role }) => {
  return (
    <div className={styles.jobDescHeading} onClick={handleClose}>
      <div>
        <h1 className={styles.roleName}>{role?.JobTitle}</h1>
        <h1 className={styles.roleExp}>{role?.Experience}</h1>
      </div>
      <h1 className={styles.roleExp}>{}</h1>{" "}
      <FaChevronUp size={36} className={styles.rolesIcon} />
    </div>
  );
};

export default RoleHeading;
