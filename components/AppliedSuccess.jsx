import styles from "../styles/componentsStyle/JobDescription.module.scss";
import successImg from "../public/icons/applied.svg";
import Image from "next/image";

const ApplySuccess = () => {
  return (
    <div className={styles.applySuccessContainer}>
      <div>
        <Image src={successImg} atl="applied successfuly" />
      </div>
      <div>
        <p>
          You’ve successfully submitted the Job Application for the Position
          Full Stack Developer{" "}
        </p>
      </div>
    </div>
  );
};

export default ApplySuccess;
