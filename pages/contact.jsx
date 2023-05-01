import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";
import { useFormik } from "formik";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import Button from "../components/Button";
import Header from "../components/Header";
import partnerImg from "../public/business-partners-handshake-global-corporate-with-technology-concept.png";
import phoneImg from "../public/Call.svg";
import callImg from "../public/icons/call-outline.png";
import hwImg from "../public/icons/hw.svg";
import monitorImg from "../public/icons/monitor.svg";
import aenvelopImg from "../public/icons/outline-envelop2.png";
import locationImg from "../public/locationIcon.svg";
import envelopImg from "../public/outline-envelop.svg";
import docsImg from "../public/rect-comment.png";
import supportImg from "../public/undraw_profile_data.png";
import userImg from "../public/user.png";
import demoImg from "../public/women-with-canvas.png";
import styles from "../styles/Contact.module.scss";


const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY = process.env.NEXT_PUBLIC_SIB_KEY;

const Contact = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  const [phoneInput, setPhoneInput] = useState();


  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);



  const handleSubmit = (data, setSubmitting) => {
    setSubmitting(true);
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,

        {
          listIds: [6],
          email: data.email,
          updateEnabled: false,
          attributes: {
            NAME: data.name,
            SMS: data.phone,
            EMAIL: data.email,
            QUERIES: data.queries,
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

        setTimeout(() => {
          setSuccess(false);
        }, 5000)
        setError(false);
        setSubmitting(false);
      })
      .catch(({ response }) => {
        setError(true);
        setSuccess(false)
        setTimeout(() => {
          setError(false);
        }, 30000)
        setSubmitting(false);
        setErrorMessage(response.data.message);
      });
  };


  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      queries: ""
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
      queries: Yup.string()
        .required("Your query is required")
        .trim()
    }),
    onSubmit: (values, { setSubmitting }) => {

      handleSubmit(values, setSubmitting);

    },
  });


  const isError = formik.errors?.name || formik?.errors?.phone || formik?.errors?.queries || formik.errors?.email || (error && errorMessage?.length)



  return (
    <>
      <Head>
        <title>Happymonk - Contact Us</title>
        <meta property="og:title" content="Happymonk  Contact Us" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>Got a question?</h2>
            <h4 className={styles.landingText}>We’d love to hear from you!</h4>
            <div
              className={styles.readMore}
              onClick={() => {
                setIsContactForm(false);
                setIsFormActive(true);
              }}
            >
              <Button
                title={"Ask Queries"}
                url={"/contact"}
                isActive={true}
              />
            </div>
          </div>

        </div>

        {/* contact */}
        <div className={styles.contact}>
          <h3 className={styles.boldText}>Contact Happymonk</h3>
          <ul className={styles.list}>
            {[
              {
                icon: phoneImg,
                text: "+91 991 617 7221",
              },
              {
                icon: envelopImg,
                text: "sales@happymonk.co",
              },
              {
                icon: locationImg,
                text: "Bangalore",
              },
            ].map((e, i) => (
              <li key={i}>
                <div className={styles.contactIcon}>
                  <Image src={e.icon} alt="trusted by" />
                </div>
                <h4>{e.text}</h4>
              </li>
            ))}
          </ul>
        </div>

        {/* support */}
        <div className={styles.support}>
          <h3 className={`${styles.heading} ${styles.supportHead}`}>Support</h3>
          <div className={styles.img}>
            <Image src={supportImg} alt={"support"} />
            <p className={styles.para}>
              We&apos;re here to help and answer any questions you might have.
              We look forward from hearing you.
            </p>
          </div>

          <div className={styles.text}>
            <h3 className={styles.heading}>Support</h3>
            <p className={styles.para}>
              We&apos;re here to help and answer any questions you might have.
              We look forward from hearing you.
            </p>
          </div>
        </div>

        {/* how can we help */}
        <div className={styles.help}>
          <h3 className={styles.heading}>Monks at your service</h3>
          <p className={styles.para}>
            Please select a topic below related to your query or fill out our{" "}
            <span
              className={styles.colorGreen}
              onClick={() => {
                setIsContactForm(true);
                setIsFormActive(true);
              }}
            >
              <Link href="/contact">
                <a>contact form.</a>
              </Link>
            </span>
          </p>
          <div className={styles.img}>
            <div>
              <Image src={monitorImg} alt="software" />
              <div>Software</div>
            </div>
            <div>
              <Image src={hwImg} alt="hardware" />
              <div>Hardware</div>
            </div>
          </div>


          <div className={styles.demo}>
            <h3 className={`${styles.heading} ${styles.demohead}`}>Demo</h3>

            <div className={styles.text}>
              <h3 className={styles.heading}>Demo</h3>
              <p className={styles.para}>
                Request a demo from one of our conversion specialists.
              </p>
              <div className={styles.readMore}>
                <Button
                  title={"Book a demo"}
                  url={"/contact"}
                  onClick={() => {
                    setIsContactForm(true);
                    setIsFormActive(true);
                  }}
                />
              </div>
            </div>
            <div className={styles.img}>
              <p className={styles.para}>
                Request a demo from one of our conversion specialists.
              </p>
              <Image src={demoImg} alt={"demo"} />
            </div>
            <div className={`${styles.readMore} ${styles.demoBtn}`}>
              <Button
                title={"Book a demo"}
                url={"/contact"}
                isActive={true}
                onClick={() => {
                  setIsContactForm(true);
                  setIsFormActive(true);
                }}
              />
            </div>
          </div>

          {/* inspired */}
          <div className={styles.inspired}>
            <h3 className={styles.heading}>Get Inspired</h3>
            <p className={styles.para}>
              Discover the many ways in which our customers use Sleeknote.
            </p>
          </div>

          {/* become partner */}
          <div className={styles.partner}>
            <h3 className={styles.partnerHead}>
              {" "}
              Are you a Security Consultant?{" "}
            </h3>
            <div>
              <Image src={partnerImg} alt="partner" />
            </div>
            <div className={styles.container}>
              <div className={styles.text}>
                <h4 className={styles.boldText}>
                  Are you a Security Consultant?
                </h4>
                <h5 className={styles.boldPara}>
                  Join our affiliate program and earn recurring fees.
                </h5>
                <div className={styles.readMore}>
                  <Button
                    title={"Join Now"}
                    url={"/register"}
                    isActive={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isFormActive}
        >
          <div className={styles.apply}>
            <div className={styles.applyContainer}>

              <div className={styles.formContainer}>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                  {success ? (
                    <>
                      <span className={styles.successMessage}>
                        <h5>Your Query Submited Successfully</h5> <br />
                      </span>
                    </>
                  ) : (
                    null
                  )}

                  {
                    isError ?
                      <span className={styles.errorMessage}>
                        {errorMessage ? errorMessage : formik.errors?.name ? formik.errors?.name : formik.errors?.email ? formik.errors?.email : formik.errors?.phone ? formik.errors?.phone : formik.errors?.queries}
                      </span>
                      : null
                  }

                  <div className={styles.formHead}>
                    <div className={styles.heading}>
                      {isContactForm ? "Contact form" : "Ask your queries"}
                    </div>
                    <div>
                      <CloseIcon onClick={() => setIsFormActive(false)} />
                    </div>
                  </div>
                  <div className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <Image src={userImg} alt="user" />
                    </span>
                    <span className={styles.fieldInput}>
                      <input
                        type="text"
                        placeholder="Your Name"
                        {...formik.getFieldProps("name")}

                      />
                    </span>

                  </div>
                  <div className={styles.field}>
                    <span className={styles.fieldIcon}>
                      <Image src={aenvelopImg} alt="email" />
                    </span>
                    <span className={styles.fieldInput}>
                      <input
                        type="email"
                        placeholder="Email id"
                        {...formik.getFieldProps("email")}

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

                        maxLength={13}
                        value={phoneInput}
                        onChange={(e) => {
                          setPhoneInput(e.target.value.replace(/\D/g, ""));
                        }}
                        {...formik.getFieldProps("phone")}
                      />
                    </span>

                  </div>

                  <div className={`${styles.field} ${styles.queryText}`}>
                    <span className={styles.fieldIcon}>
                      <Image src={docsImg} alt="user" />
                    </span>
                    <span
                      className={`${styles.fieldInput} ${styles.uploadField}`}
                    >
                      <span>{isContactForm ? "Message" : " Your Query"}</span>
                      <textarea
                        type="text"
                        placeholder="Your Query"

                        {...formik.getFieldProps("queries")}
                      ></textarea>
                    </span>

                  </div>

                  <div className={styles.submitBtn}>
                    <button
                      type="submit"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                    >
                      <Button url={""} title={"Send"} isActive={true} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Backdrop>

      </div>

    </>
  );
};

export default Contact;
