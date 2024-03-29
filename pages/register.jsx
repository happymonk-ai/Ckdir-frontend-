import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import logo from "../public/chokidr-logo.svg";
import iMacImg from "../public/hp 1.png";
import backIcon from "../public/icons/back-icon.svg";
import companySizeIcon from "../public/icons/company-size.svg";
import downArrowIcon from "../public/icons/down-arrow.svg";
import eduIcon from "../public/icons/education 1.svg";
import mailIcon from "../public/icons/email-icon.svg";
import gvtIcon from "../public/icons/government-icon.svg";
import healthIcon from "../public/icons/healthcare 2.svg";
import logisticsIcon from "../public/icons/logistics-icon.svg";
import manufacturingIcon from "../public/icons/manufacturing-icon.svg";
import othersIcon from "../public/icons/more-information 1.svg";
import idIcon from "../public/icons/org-icon.svg";
import privateIcon from "../public/icons/private-icon.svg";
import sectorIcon from "../public/icons/sector 1.svg";
import financeIcon from "../public/icons/stats 1.svg";
import successIcon from "../public/icons/success-icon.svg";
import phoneIcon from "../public/icons/telephone-icon.svg";
import userIcon from "../public/icons/user-icon.svg";
import warehouseIcon from "../public/icons/warehouse 1.svg";
import btnStyles from "../styles/componentsStyle/FilledBtn.module.scss";
import inputStyles from "../styles/componentsStyle/Input.module.scss";
import selectStyles from "../styles/componentsStyle/Select.module.scss";
import styles from "../styles/Register.module.scss";

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY = process.env.NEXT_PUBLIC_SIB_KEY;

const Register = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [success, setSuccess] = useState(false);



  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  useEffect(() => {
    setDropdownVisible(false);
  }, [selectedSector]);



  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      sector: "",
      organisation: "",
      companySize: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Name is required")
        .trim(),
      phone: Yup.string()
        .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Must be a valid phone number")
        .required("Contact number is required"),
      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
      sector: Yup.string().required("Sector is required"),
      organisation: Yup.string()
        .required("Orgainisation name is required")
        .trim(),
      companySize: Yup.number()
        .typeError("Must be a number")
        .required("Company size is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {

      handleSubmit(values, setSubmitting);
    },
  });


  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(true);
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,
        {
          listIds: [4],
          email: data.email,
          updateEnabled: false,
          attributes: {
            NAME: data.name,
            SMS: data.phone,
            ORGANISATION_NAME: data.organisation,
            COMPANY_SIZE: data.companySize,
            INDUSTRY_SECTOR: data.sector,
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
        setSubmitting(false);
      })
      .catch(({ response }) => {
        setError(true);
        setSubmitting(false);
        setErrorMessage(response.data.message);
      });
  };

  const { isSubmitting } = formik;

  return (
    <div className={styles.container}>
      {success ? (
        <section className={styles.successContainer}>
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <Image src={successIcon} alt="success" />
            </div>
            <h2>Thank You</h2>
            <p>
              Your request has been received.
              <br /> We will get back to you with the Chokidr invitation link
              once the verification is done from our end.
            </p>
            <Link href={"/"} passHref>
              <button className={btnStyles.button}>Go to Home</button>
            </Link>
          </div>
        </section>
      ) : (
        <>
          <div className={styles.form}>
            <div className={styles.header}>
              <Image src={logo} alt="logo" className={styles.logo} />
            </div>
            <div className={styles.formContainer}>
              <div className={styles.iconAndFormContainer}>
                <div className={styles.backIconContainer}>
                  <Link href="/" passHref>
                    <Image src={backIcon} alt="back icon"></Image>
                  </Link>
                </div>
                <div className={styles.formSection}>
                  <div className={styles.formHeader}>
                    <div className={styles.title}>Book a Demo</div>
                    <div className={styles.selectBox}>
                      {/* <SelectBox /> */}
                    </div>
                  </div>
                  <div className={styles.label}>Enter your details here</div>
                  {error && (
                    <span className={styles.errorMessage}>
                      {errorMessage} <br />
                    </span>
                  )}
                  <div className={styles.fields}>
                    <form onSubmit={formik.handleSubmit}>
                      <div className={styles.field}>
                        <div className={inputStyles.input}>
                          <span className={inputStyles.icon}>
                            <Image src={userIcon} alt="user" />
                          </span>
                          <input
                            placeholder="Name"
                            {...formik.getFieldProps("name")}
                          />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.name}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={styles.field}>
                        <div className={inputStyles.input}>
                          <span className={inputStyles.icon}>
                            <Image src={phoneIcon} alt="phone" />
                          </span>
                          <input
                            placeholder="Contact Number"
                            {...formik.getFieldProps("phone")}
                          />
                        </div>
                        {formik.touched.phone && formik.errors.phone ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.phone}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={styles.field}>
                        <div className={inputStyles.input}>
                          <span className={inputStyles.icon}>
                            <Image src={mailIcon} alt="email" />
                          </span>
                          <input
                            type={"email"}
                            placeholder="Email ID"
                            {...formik.getFieldProps("email")}
                          />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.email}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={styles.field}>
                        <div className={selectStyles.select}>
                          <span className={inputStyles.icon}>
                            <Image src={sectorIcon} alt="sector" />
                          </span>
                          <input
                            name="sector"
                            placeholder="Industry Sector"
                            // onChange={handleChange}
                            value={selectedSector}
                            autoComplete="off"
                            readOnly
                          // {...formik.getFieldProps("sector")}
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
                              <li
                                onClick={(e) => {
                                  setSelectedSector("Government");
                                  formik.values.sector = "Government";
                                }}
                              >
                                <Image src={gvtIcon} alt="sector icon" />
                                <span>Government</span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Private");
                                  formik.values.sector = "Private";
                                }}
                              >
                                <Image src={privateIcon} alt="sector icon" />
                                <span>Private</span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Manufacturing");
                                  formik.values.sector = "Manufacturing";
                                }}
                              >
                                <Image
                                  src={manufacturingIcon}
                                  alt="sector icon"
                                />
                                <span> Manufacturing </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Logistics");
                                  formik.values.sector = "Logistics";
                                }}
                              >
                                <Image src={logisticsIcon} alt="sector icon" />
                                <span> Logistics </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Warehousing");
                                  formik.values.sector = "Warehousing";
                                }}
                              >
                                <Image src={warehouseIcon} alt="sector icon" />
                                <span> Warehousing </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Education");
                                  formik.values.sector = "Education";
                                }}
                              >
                                <Image src={eduIcon} alt="sector icon" />
                                <span> Education </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Healthcare");
                                  formik.values.sector = "Healthcare";
                                }}
                              >
                                <Image src={healthIcon} alt="sector icon" />
                                <span> Healthcare </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Finance");
                                  formik.values.sector = "Finance";
                                }}
                              >
                                <Image src={financeIcon} alt="sector icon" />
                                <span> Finance </span>
                              </li>
                              <li
                                onClick={() => {
                                  setSelectedSector("Others");
                                  formik.values.sector = "Others";
                                }}
                              >
                                <Image src={othersIcon} alt="sector icon" />
                                <span> Others </span>
                              </li>
                            </ul>
                          </div>
                        )}
                        {formik.touched.sector && formik.errors.sector ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.sector}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={styles.field}>
                        <div className={inputStyles.input}>
                          <span className={inputStyles.icon}>
                            <Image src={idIcon} alt="oraganisation" />
                          </span>
                          <input
                            placeholder="Organisation Name"
                            {...formik.getFieldProps("organisation")}
                          />
                        </div>
                        {formik.touched.organisation &&
                          formik.errors.organisation ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.organisation}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className={styles.field}>
                        <div className={inputStyles.input}>
                          <span className={inputStyles.icon}>
                            <Image src={companySizeIcon} alt="company size" />
                          </span>
                          <input
                            placeholder="Company Size"
                            {...formik.getFieldProps("companySize")}
                          />
                        </div>
                        {formik.touched.companySize &&
                          formik.errors.companySize ? (
                          <p className={styles.errorMessage}>
                            {formik.errors.companySize}
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className={selectStyles.submitBtn}>
                        <button type="submit" className={btnStyles.button} style={{
                          pointerEvents: formik.isSubmitting ? "none" : "auto"
                        }}>   {formik.isSubmitting ? 'Submitting...' : 'Submit'}</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.img}>
              <Image src={iMacImg} alt={"desktop"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};