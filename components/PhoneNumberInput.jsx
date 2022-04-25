import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import callImg from "../public/icons/call-outline.png";
import styles from "../styles/componentsStyle/JobDescription.module.scss";
import Image from "next/image";

const PhoneNumberInput = ({
  value,
  onChange,
  inputClass,
  dropdownClass,
  searchClass,
  buttonClass,
  containerClass,
  inputProps,
}) => {
  return (
    <div className={styles.phoneInputContainer}>
      <span className={styles.fieldIcon}>
        <Image src={callImg} alt="phone" />
      </span>

      <PhoneInput
        country={"in"}
        value={value}
        onChange={(phone) => onChange(phone)}
        dropdownClass={dropdownClass}
        inputClass={inputClass}
        searchClass={searchClass}
        buttonClass={buttonClass}
        containerClass={containerClass}
        inputProps={inputProps}
      />
    </div>
  );
};

export default PhoneNumberInput;
