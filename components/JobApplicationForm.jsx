import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import coverLetterImg from "../public/icons/cover-letter.svg";
import docsImg from "../public/icons/docs.png";
import linkedinImg from "../public/icons/linkedin.svg";
import envelopImg from "../public/icons/outline-envelop2.png";
import userImg from "../public/user.png";
import styles from "../styles/componentsStyle/JobDescription.module.scss";
import AppliedSuccess from "./AppliedSuccess";
import Button from "./Button";
import PhoneNumberInput from "./PhoneNumberInput";

const JobApplicationForm = ({ SIB_ENDPOINT, role }) => {
  const SIB_KEY = process.env.NEXT_PUBLIC_SIB_KEY;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [phoneInput, setPhoneInput] = useState(null);
  const [linkedInInput, setLinkedInInput] = useState();

  const onSubmit = (data) => {
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,
        {
          listIds: [5],
          email: data.email,
          updateEnabled: false,
          attributes: {
            NAME: data.name,
            SMS: phoneInput,
            RESUME: data.resume,
            COVER_LETTER: data.cover,
            LINKEDIN: data.linkedin,
            ROLE: role.JobTitle
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "api-key": SIB_KEY,
          },
        }
      )
      .then(() => {
        setSuccess(true);
      })
      .catch(({ response }) => {
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePhoneChange = (value) => {
    setPhoneInput(value);
  };

  return (
    <div className={styles.formSection}>
      <div className={styles.formMobileHeading}>
        <h2 className={`${styles.heading} ${styles.applyHeader}`}>
          Job Application
        </h2>
        {!success && !error && (
          <div>
            <h2>Position -</h2>
            <h1>{role?.JobTitle}</h1>
          </div>
        )}
      </div>

      <div className={styles.apply}>
        <div className={styles.applyContainer}>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.form}>
                {!success && !error && (
                  <div className={styles.heading}>Job Application</div>
                )}

                {error && !success && (
                  <span className={styles.errorMessage}>
                    {errorMessage} <br />
                  </span>
                )}
                {(success && <AppliedSuccess />) || (
                  <React.Fragment>
                    <div className={styles.fieldsContainer}>
                      <div className={styles.fieldsContaineLeft}>
                        {" "}
                        <div className={styles.field}>
                          <span className={styles.fieldIcon}>
                            <Image src={userImg} alt="user" />
                          </span>
                          <span className={styles.fieldInput}>
                            <input
                              type="text"
                              placeholder="Your Full Name*"
                              {...register("name")}
                              required={true}
                            />
                          </span>
                        </div>
                        <div className={styles.field}>
                          <span className={styles.fieldIcon}>
                            <Image src={envelopImg} alt="email" />
                          </span>
                          <span className={styles.fieldInput}>
                            <input
                              type="email"
                              placeholder="Email id*"
                              {...register("email")}
                              required={true}
                            />
                          </span>
                        </div>
                        <div className={styles.field}>
                          <span className={styles.fieldIcon}>
                            <Image src={docsImg} alt="user" />
                          </span>
                          <span className={styles.fieldInput}>
                            <input
                              type="text"
                              placeholder="Resume Link*"
                              {...register("resume")}
                              required={true}
                            />

                          </span>

                        </div>
                      </div>
                      <div className={styles.fieldsContaineRight}>
                        {" "}
                        <div className={styles.field}>
                          <PhoneNumberInput
                            value={phoneInput}
                            onChange={(val) =>
                              handlePhoneChange(val.replace(/\D/g, ""))
                            }
                            inputClass={styles.inputClass}
                            dropdownClass={styles.dropdownClass}
                            buttonClass={styles.buttonClass}
                            inputProps={{
                              required: true,
                              name: "phone",
                            }}
                          />
                        </div>
                        <div className={styles.field}>
                          <span className={styles.fieldIcon}>
                            <Image src={linkedinImg} alt="linkedin*" />
                          </span>
                          <span className={styles.fieldInput}>
                            <input
                              type="text"
                              placeholder="Linkedin URL"
                              value={linkedInInput}
                              onChange={(e) => {
                                setLinkedInInput(
                                  e.target.value.replace(/\D/g, "")
                                );
                              }}
                              {...register("linkedin")}
                            />
                          </span>
                        </div>
                        <div className={styles.field}>
                          <span className={styles.fieldIcon}>
                            <Image src={coverLetterImg} alt="cover letter" />
                          </span>
                          <span className={styles.fieldInput}>
                            <input
                              type="text"
                              placeholder="Cover Letter Link"
                              {...register("cover")}
                            />

                          </span>

                        </div>
                      </div>
                    </div>

                    <div className={styles.submitBtn}>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                        }}
                      >
                        <Button url={""} title={"Submit"} isActive={true} />
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;