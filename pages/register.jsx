import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Image from "next/image";
import styles from "../styles/Register.module.scss";
import logo from "../public/registerLogo.png";
import Input from "../components/Input";
import mailIcon from "../public/icons/mail2.png";
import phoneIcon from "../public/icons/phone2.png";
import userIcon from "../public/icons/user2.png";
import idIcon from "../public/icons/id-icon.svg";
import FilledBtn from "../components/FilledBtn";
import iMacImg from "../public/Apple-iMac-Retina.png";
import inputStyles from "../styles/componentsStyle/Input.module.scss";
import btnStyles from "../styles/componentsStyle/FilledBtn.module.scss";

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY =
  "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";

const Register = () => {
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
            <>
              <div className={styles.formHeader}>
                <div className={styles.title}>Registration Form</div>
                <div className={styles.selectBox}>{/* <SelectBox /> */}</div>
              </div>
              <div className={styles.label}>Personal information</div>
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
                        placeholder="Phone number (with country code)"
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

                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}
                  {/* <FilledBtn title="Submit" type="submit" url="" /> */}
                  <input type="submit" className={btnStyles.button} />
                </form>
              </div>
            </>
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
