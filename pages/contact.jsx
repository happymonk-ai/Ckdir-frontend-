import Image from "next/image";
import Button from "../components/Button";
import Header from "../components/Header";
import styles from "../styles/Contact.module.scss";
import supportImg from "../public/undraw_profile_data.png";
import monitorImg from "../public/icons/monitor.svg";
import hwImg from "../public/icons/hw.svg";
import demoImg from "../public/women-with-canvas.png";
import partnerImg from "../public/business-partners-handshake-global-corporate-with-technology-concept.png";
import ellipseImg from "../public/icons/ellipse-placeholder.png";
import phoneImg from "../public/Call.svg";
import locationImg from "../public/locationIcon.svg";
import envelopImg from "../public/outline-envelop.svg";
import Link from "next/link";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import applyImg from "../public/top-view-person-writing-laptop-with-copy-space.png";
import userImg from "../public/user.png";
import docsImg from "../public/rect-comment.png";
import callImg from "../public/icons/call-outline.png";
import aenvelopImg from "../public/icons/outline-envelop2.png";
import CloseIcon from "@mui/icons-material/Close";
import Head from "next/head";
import axios from "axios";

import { useForm } from "react-hook-form";

const SIB_ENDPOINT = "https://api.sendinblue.com/v3";
const SIB_KEY =
  "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";

const Contact = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  const [phoneInput, setPhoneInput] = useState();
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post(
        `${SIB_ENDPOINT}/contacts`,
        {
          listIds: [6],
          email: data.email,
          updateEnabled: false,
          attributes: {
            FIRSTNAME: data.name,
            LASTNAME: "",
            SMS: data.phone,
            COMPANY: "",
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
        }, 2000);
      })
      .catch(({ response }) => {
        setError(true);
        setErrorMessage(response.data.message);
      });
  };

  return (
    <>
      <Head>
        <title>Happymonk - Contact Us</title>
        <meta property="og:title" content="Happymonk  Contact Us" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          {/* <div className={styles.darkLayer}> */}
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
                url={"/contact"} // need to update readmore route
                isActive={true}
              />
            </div>
          </div>
          {/* </div> */}
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

          {/* <div className={styles.label}>
                    Guide_login
                </div>
                <div className={styles.label}>
                    Guide_forgot password
                </div> */}
        </div>

        {/* demo */}
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
                  url={"/register"} // need to update readmore route
                  isActive={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trusted by */}
        {/* no content */}
        {/* <div className={styles.trust}>
                <div className={styles.boldText}>Trusted By</div>
                <ul className={styles.list}>
                    {
                        [1, 1, 1, 1, 1].map((e, i) => (
                            <li key={i}>
                                <div>
                                    <Image
                                        src={ellipseImg}
                                        alt="trusted by"
                                    />
                                </div>
                                <div className={styles.trustText}>Lorem ipsum</div>
                            </li>
                        ))
                    }
                </ul>
            </div> */}
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isFormActive}
      >
        <div className={styles.apply}>
          <div className={styles.applyContainer}>
            <div className={styles.applyImg}>
              {/* <Image src={applyImg} alt="apply form" /> */}
            </div>
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                {success ? (
                  <>
                    <span className={styles.successMessage}>
                      <h5>Your Query Submited Successfully</h5> <br />
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
                      {...register("name")}
                      required={true}
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
                      required={true}
                      {...register("queries")}
                    ></textarea>
                  </span>
                </div>
                <div className={styles.submitBtn}>
                  <button
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
    </>
  );
};

export default Contact;
