import { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Register.module.scss";
import logo from "../public/chokidr-logo.svg";
import mailIcon from "../public/icons/email-icon.svg";
import phoneIcon from "../public/icons/telephone-icon.svg";
import userIcon from "../public/icons/user-icon.svg";
import idIcon from "../public/icons/org-icon.svg";
import companySizeIcon from "../public/icons/company-size.svg";
import sectorIcon from "../public/icons/sector 1.svg";
import backIcon from "../public/icons/back-icon.svg";
import gvtIcon from "../public/icons/government-icon.svg";
import privateIcon from "../public/icons/private-icon.svg";
import manufacturingIcon from "../public/icons/manufacturing-icon.svg";
import financeIcon from "../public/icons/stats 1.svg";
import othersIcon from "../public/icons/more-information 1.svg";
import healthIcon from "../public/icons/healthcare 2.svg";
import eduIcon from "../public/icons/education 1.svg";
import warehouseIcon from "../public/icons/warehouse 1.svg";
import logisticsIcon from "../public/icons/logistics-icon.svg";
import downArrowIcon from "../public/icons/down-arrow.svg";
import iMacImg from "../public/hp 1.png";
import inputStyles from "../styles/componentsStyle/Input.module.scss";
import btnStyles from "../styles/componentsStyle/FilledBtn.module.scss";
import selectStyles from "../styles/componentsStyle/Select.module.scss";

import Svg from "../components/Svg"

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY =
  "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";

const Register = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
<<<<<<< HEAD
    setDropdownVisible(false);
=======
    setDropdownVisible((prev) => !prev);
>>>>>>> 405422f (fix: fonts and back btn)
=======
    setDropdownVisible(false);
>>>>>>> 03c69fd (fix: select industry list)
  }, [selectedSector]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,
        {
          listIds: [2],
          email: data.email,
          updateEnabled: false,
          attributes: {
            FIRSTNAME: data.name,
            LASTNAME: "",
            SMS: data.phone,
            COMPANY: data.organisation,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": SIB_KEY,
          },
        }
      )
      .then((response) => {
        setSuccess(true);
      })
      .catch(({ response }) => {
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.formContainer}>
          {success ? (
            <span className={styles.successMessage}>
              <h1>Thank You!!</h1>
              <h2>We will get back to you soon.</h2>
            </span>
          ) : (
            <div className={styles.iconAndFormContainer}>
              <div className={styles.backIconContainer}>
                <Link href="/" passHref>
                  <Image src={backIcon} alt="back icon"></Image>
                </Link>
              </div>
              <div className={styles.formSection}>
                <div className={styles.formHeader}>
                  <div className={styles.title}>Book a Demo</div>
                  <div className={styles.selectBox}>{/* <SelectBox /> */}</div>
                </div>
                <div className={styles.label}>Enter your details here</div>
                {error && (
                  <span className={styles.errorMessage}>
                    {errorMessage} <br />
                  </span>
                )}
                <div className={styles.fields}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <div className={styles.field}>
                      <div className={inputStyles.input}>
                        <span className={inputStyles.icon}>
                          <Image src={userIcon} alt="user" />
                        </span>
                        <input placeholder="Name" {...register("name")} />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <div className={inputStyles.input}>
                        <span className={inputStyles.icon}>
                          <Image src={phoneIcon} alt="user" />
                        </span>
                        <input
                          placeholder="Contact Number"
                          {...register("phone")}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <div className={inputStyles.input}>
                        <span className={inputStyles.icon}>
                          <Image src={mailIcon} alt="user" />
                        </span>
                        <input
                          type={"email"}
                          placeholder="Email ID"
                          {...register("email")}
                          required={true}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <div className={selectStyles.select}>
                        <span className={inputStyles.icon}>
                          <Image src={sectorIcon} alt="user" />
                        </span>
                        <input
                          placeholder="Industry Sector"
                          value={selectedSector}
                          {...register("sector")}
                        />
                        <span
                          onClick={() => setDropdownVisible((prev) => !prev)}
                        >
                          <Image
                            src={downArrowIcon}
                            alt="dropdown icon"
                          ></Image>
                        </span>
                      </div>

                      {dropdownVisible && (
                        <div className={selectStyles.listContainer}>
                          <ul className={selectStyles.list}>
                            <li onClick={() => setSelectedSector("Government")}>
                              <Image src={gvtIcon} alt="sector icon" />
                              <span>Government</span>
                            </li>
                            <li onClick={() => setSelectedSector("Private")}>
                              <Image src={privateIcon} alt="sector icon" />
                              <span>Private</span>
                            </li>
                            <li
                              onClick={() => setSelectedSector("Manufacturing")}
                            >
                              <Image
                                src={manufacturingIcon}
                                alt="sector icon"
                              />
                              <span> Manufacturing </span>
                            </li>
                            <li onClick={() => setSelectedSector("Logistics")}>
                              <Image src={logisticsIcon} alt="sector icon" />
                              <span> Logistics </span>
                            </li>
                            <li
                              onClick={() => setSelectedSector("Warehousing")}
                            >
                              <Image src={warehouseIcon} alt="sector icon" />
                              <span> Warehousing </span>
                            </li>
                            <li onClick={() => setSelectedSector("Education")}>
                              <Image src={eduIcon} alt="sector icon" />
                              <span> Education </span>
                            </li>
                            <li onClick={() => setSelectedSector("Healthcare")}>
                              <Image src={healthIcon} alt="sector icon" />
                              <span> Healthcare </span>
                            </li>
                            <li onClick={() => setSelectedSector("Finance")}>
                              <Image src={financeIcon} alt="sector icon" />
                              <span> Finance </span>
                            </li>
                            <li onClick={() => setSelectedSector("Others")}>
                              <Image src={othersIcon} alt="sector icon" />
                              <span> Others </span>
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className={styles.field}>
                      <div className={inputStyles.input}>
                        <span className={inputStyles.icon}>
                          <Image src={idIcon} alt="user" />
                        </span>
                        <input
                          placeholder="Organisation Name"
                          {...register("organisation")}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <div className={inputStyles.input}>
                        <span className={inputStyles.icon}>
                          <Image src={companySizeIcon} alt="user" />
                        </span>
                        <input
                          placeholder="Company Size"
                          {...register("companySize")}
                        />
                      </div>
                    </div>

                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    {/* <FilledBtn title="Submit" type="submit" url="" /> */}
                    <div className={selectStyles.submitBtn}>
                      <input type="submit" className={btnStyles.button} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.img}>
          <Image src={iMacImg} alt={"desktop"} />
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
