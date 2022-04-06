import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Jd.module.scss";
import jobHuntImg from "../../public/businesswoman-networking-using-digital-devices.png";
// import applyImg from "../../public/undraw_updated_resume.svg";
import userImg from "../../public/user.png";
import docsImg from "../../public/icons/docs.png";
import callImg from "../../public/icons/call-outline.png";
import envelopImg from "../../public/icons/outline-envelop2.png";
import Image from "next/image";
import Button from "../../components/Button";
import jbtopImg from "../../public/businesswoman-networking-using-digital-devices-sm.png";
import applyImg from "../../public/top-view-person-writing-laptop-with-copy-space.png";
import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "urql";
import { useForm } from "react-hook-form";
import axios from "axios";

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY =
  "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";

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

const JD = () => {
  const router = useRouter();
  const id = router.query.jdId;
  const [roleresponsibilities, setRoleresponsibilities] = useState([]);
  const [phoneInput, setPhoneInput] = useState();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,
        {
          listIds: [5],
          email: data.email,
          updateEnabled: false,
          attributes: {
            FIRSTNAME: data.name,
            LASTNAME: "",
            SMS: data.phone,
            COMPANY: "",
            RESUME: data.resume,
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
        console.log("REMOTE SUBMISSION SUCCESS", response);
        setSuccess(true);
      })
      .catch(({ response }) => {
        console.log("REMOTE SUBMISSION ERROR", response?.data);
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  const [result, reexecuteQuery] = useQuery({
    query: jdIdQuery,
    variables: {
      id,
    },
    pause: !id,
  });
  const { data, fetching } = result;

  useEffect(() => {
    let responsibility = data?.jobDeescription?.DailyandMonthlyresponsibilities;
    let objectives = data?.jobDeescription?.Objectiveofthisrole;

    let whatYouWillDo = [];
    if (responsibility) {
      let resArray = responsibility.split("\n");
      whatYouWillDo = resArray;
    }
    if (objectives) {
      let resArray = objectives.split("\n");
      whatYouWillDo = [...whatYouWillDo, ...resArray];
      whatYouWillDo = whatYouWillDo.filter((e) => {
        if (e !== "") {
          return e;
        }
      });
    }
    setRoleresponsibilities(whatYouWillDo);
  }, [data]);

  return (
    <>
      <Head>
        <title>Job Description - Happymonk</title>
        <meta
          property="og:title"
          content="Job Description Happymonk"
          key="title"
        />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>
              Openings For {data?.jobDeescription?.JobTitle}
            </h2>
            {/* <h3 className={styles.landingText}>Number of vacancy - 03</h3> */}
          </div>
        </div>

        {roleresponsibilities?.length > 0 && (
          <div className="desc">
            <div className={styles.dhar}>
              <div className={styles.topImg}>
                <h2 className={styles.heading}>What you&apos;ll do?</h2>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={jbtopImg} alt={"jb image"} />
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.heading}>What you&apos;ll do?</div>
                {/* <p className={styles.dharText}>
                      Design and develop secure cloud system architectures in
                      accordance with established standards. Design and implement a
                      highly scalable CI/CD pipeline.
                    </p> */}
                <div className={styles.dharPoints}>
                  <ul className={styles.dharList}>
                    {roleresponsibilities?.map((e, i) => (
                      <li key={i} className={styles.dharItem}>
                        {/* <div className={styles.dharItemStyle}>a</div> */}
                        <h6 className={styles.dharText}>
                          <div></div>
                          {e}
                        </h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.chokidrBackImg}>
                <Image src={jobHuntImg} alt={"job hunt"} />
              </div>
            </div>
          </div>
        )}

        <h2 className={`${styles.heading} ${styles.applyHeader}`}>
          Apply here
        </h2>
        <div className={styles.apply}>
          <div className={styles.applyContainer}>
            <div className={styles.applyImg}>
              <Image src={applyImg} alt="apply form" />
            </div>
            <div className={styles.formContainer}>
              <div className={styles.heading}>Apply here</div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.form}>
                  {success ? (
                    <>
                      <span className={styles.successMessage}>
                        <h5>Your Application Submited Successfully</h5> <br />
                      </span>
                    </>
                  ) : (
                    <>
                      {error && (
                        <span className={styles.errorMessage}>
                          {errorMessage} <br />
                        </span>
                      )}
                    </>
                  )}
                  <div className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <Image src={userImg} alt="user" />
                    </span>
                    <span className={styles.fieldInput}>
                      <input
                        type="text"
                        placeholder="Your Name"
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
                        placeholder="Email Id"
                        {...register("email")}
                        required={true}
                      />
                    </span>
                  </div>
                  <div className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <Image src={callImg} alt="phone" />
                    </span>
                    <span className={styles.fieldInput}>
                      <input
                        type="text"
                        placeholder="Phone number"
                        required={true}
                        maxLength={13}
                        value={phoneInput}
                        onChange={(e) => {
                          setPhoneInput(e.target.value.replace(/\D/g, ""));
                        }}
                        {...register("phone")}
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
                        placeholder="Resume Link"
                        required={true}
                        {...register("resume")}
                      />
                    </span>
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JD;
