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

const Contact = () => {
  const [isFormActive, setIsFormActive] = useState(false);
  const [isContactForm, setIsContactForm] = useState(false);
  return (
    <>
      <div>
        <div className={styles.landingContainer}>
          {/* <div className={styles.darkLayer}> */}
          <Header />
          <div className={styles.landingPage}>
            <div className={styles.heading1}>Got a question?</div>
            <p className={styles.landingText}>We’d love to hear from you!</p>
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
          <div className={styles.boldText}>Contact Happymonk</div>
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
                <div>{e.text}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* support */}
        <div className={styles.support}>
          <div className={`${styles.heading} ${styles.supportHead}`}>
            Support
          </div>
          <div className={styles.img}>
            <Image src={supportImg} alt={"support"} />
            <div className={styles.para}>
              We&apos;re here to help and answer any questions you might have.
              We look forward from hearing you.
            </div>
          </div>

          <div className={styles.text}>
            <div className={styles.heading}>Support</div>
            <div className={styles.para}>
              We&apos;re here to help and answer any questions you might have.
              We look forward from hearing you.
            </div>
          </div>
        </div>

        {/* how can we help */}
        <div className={styles.help}>
          <div className={styles.heading}>Monks at your service</div>
          <div className={styles.para}>
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
          </div>
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
          <div className={`${styles.heading} ${styles.demohead}`}>Demo</div>

          <div className={styles.text}>
            <div className={styles.heading}>Demo</div>
            <div className={styles.para}>
              Request a demo from one of our security specialists.
            </div>
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
            <div className={styles.para}>
              Request a demo from one of our conversion specialists.
            </div>
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
          <div className={styles.heading}>Get Inspired</div>
          <div className={styles.para}>
            Discover the many ways in which our customers use CHOKIDR%trade;.
          </div>
        </div>

        {/* become partner */}
        <div className={styles.partner}>
          <div className={styles.partnerHead}>
            {" "}
            Are you a Security Consultant?{" "}
          </div>
          <div>
            <Image src={partnerImg} alt="partner" />
          </div>
          <div className={styles.container}>
            <div className={styles.text}>
              <div className={styles.boldText}>
                Are you a Security Consultant?
              </div>
              <div className={styles.boldPara}>
                Join our affiliate program and earn recurring fees.
              </div>
              <div className={styles.readMore}>
                <Button
                  title={"Join Now"}
                  url={"/register"} // need to update readmore route
                  isActive={true}
                />
              </div>
            </div>
            {/* <div className={styles.percent}>
                        25%
                    </div> */}
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
              <div className={styles.form}>
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
                    <input type="text" placeholder="Your Name" />
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={aenvelopImg} alt="email" />
                  </span>
                  <span className={styles.fieldInput}>
                    <input type="text" placeholder="Email id" />
                  </span>
                </div>
                <div className={styles.field}>
                  <span className={styles.fieldIcon}>
                    <Image src={callImg} alt="phone" />
                  </span>
                  <span className={styles.fieldInput}>
                    <input type="text" placeholder="Phone number" />
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
                    <textarea type="file" placeholder="Your Query"></textarea>
                  </span>
                </div>
                <div className={styles.submitBtn}>
                  <Button url={"/"} title={"Send"} isActive={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default Contact;
