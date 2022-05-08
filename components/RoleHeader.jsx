import { FaChevronDown } from "react-icons/fa";
import styles from "../styles/componentsStyle/LongCard.module.scss";

const RoleHeader = ({
  show,
  roleresponsibilities,
  handleRoleDetailsToogle,
  data,
}) => {
  return (
    show && (
      <div
        className={styles.container}
        style={{
          pointerEvents: roleresponsibilities?.length > 0 ? "auto" : "none",
        }}
        onClick={handleRoleDetailsToogle}
      >
        <div className={styles.body}>{data}</div>
        <div className={styles.icon}>
          <a>
            <FaChevronDown className={styles.rolesIcon} />
          </a>
        </div>
      </div>
    )
  );
};

export default RoleHeader;
