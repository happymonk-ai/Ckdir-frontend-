import Image from "next/image";
import styles from "../styles/componentsStyle/JobDescription.module.scss";
import locationImg from "../public/icons/location_marker.svg";

const CompanyAddress = () => {
  return (
    <div className={styles.companyAddress}>
      <div>
        <Image src={locationImg} alt="location icon" />
      </div>
      <p>
        Happymonk Technology Pvt Ltd, Opp - J P Nagar Cultural Association, JP
        Nagar, Bangalore, Karnataka.
      </p>
    </div>
  );
};

export default CompanyAddress;
