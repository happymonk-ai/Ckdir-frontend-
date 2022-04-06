import Button from "../components/Button";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import chokidarDeviceImg from "../public/chokidar-device.png";
import revolutionAtomImg from "../public/revolution-atom.png";
import securityAuditImg from "../public/securityAudit.png";

import locationImg from "../public/icons/location.svg";

import Card from "../components/Card";
import CaseStudySection from "../components/CaseStudySection";
import { Icons } from "../utils/icons";
import React, { useState } from "react";

// compressed images
import autonomusI from "../public/compressed/decentralized.svg";
import decentI from "../public/compressed/autonomous.svg";
import edgecI from "../public/compressed/decentralized.svg";
import socialFootprintImg from "../public/compressed/social-footprint.svg";
import connectingPeopleImg from "../public/compressed/connecting-people.svg";
import complianceImg from "../public/compressed/Compliance.svg";
import assuredQualityImg from "../public/icons/assured-quality.svg";
import leafImg from "../public/icons/leaf.png";
import lockImg from "../public/icons/lock-privecy.svg";
import inscuranceImg from "../public/icons/insurance.svg";
import connecct2sysImg from "../public/icons/conn2sys.png";
import tempOptImg from "../public/icons/temp-opt.png";
import rttImg from "../public/icons/delivery-track.png";
import edgeCompImg from "../public/icons/man-in-pantagon.png";

import givingIdImg from "../public/icons/giving-id.png";

import controlledEnvImg from "../public/compressed/controll-environment.svg";
import reliableDataImg from "../public/compressed/tamperproof-data.svg";
import proofDocImg from "../public/compressed/proof-of-activity.svg";
import authorityProofImg from "../public/compressed/proof-of-authority.svg";
import homeAnalytics from "../public/compressed/sensor-fusion-min.png";
import smartAIImg from "../public/compressed/smart-artificail-intelligence-min.png";
import iphone11Img from "../public/compressed/register-now-banner-min.png";
import Head from "next/head";
import offline from "../public/offline.svg";

const revCardData = {
  1: [
    {
      img: complianceImg,
      title: "On-Machine Compute Systems",
      text: (
        <p className={styles.revolutionCardText}>
          Enabling machines to perceive, identify, manipulate & aid, the world
          around them.
        </p>
      ),
    },
    {
      img: controlledEnvImg,
      title: "Decentralized, Offline & Localized",
      text: (
        <p className={styles.revolutionCardText}>
          Take information management & keep data in your premises and enable
          local processing of sensors and data.
        </p>
      ),
    },
    {
      img: reliableDataImg,
      title: "Intelligent Video & Sensor Analytics",
      text: (
        <p className={styles.revolutionCardText}>
          Get Realtime actionable insights, from wide variety of IoT gateways
          and Edge Devices.
        </p>
      ),
    },
  ],
  2: [
    {
      img: rttImg,
      title: "Industry 4.0",
      text: (
        <p className={styles.revolutionCardText}>
          Quickly track, identify and aid incidents, pinpoint accurately and
          ensure compliance and safety of the user.
        </p>
      ),
    },
    {
      img: connecct2sysImg,
      title: "Connecting People & Things",
      text: (
        <p className={styles.revolutionCardText}>
          Enable you to track your fleet real time, giving you complete access
          to all data that might be.
        </p>
      ),
    },
    {
      img: tempOptImg,
      title: "Decentralized Infrastructure",
      text: (
        <p className={styles.revolutionCardText}>
          Real Tracking, Fencing, heavily needed for the world where multiple
          touch points is everyday business.
        </p>
      ),
    },
  ],
  3: [
    {
      img: reliableDataImg,
      title: "Zero Knowledge Collaboration",
      text: (
        <p className={styles.revolutionCardText}>
          Decentralized verifiable data, which cannot be tempered with.
        </p>
      ),
    },
    {
      img: inscuranceImg,
      title: "Real-time Communication",
      text: (
        <p className={styles.revolutionCardText}>
          Collect, report and share real-time information for enhanced
          decision-making and effective response.
        </p>
      ),
    },
    {
      img: lockImg,
      title: "Art of War",
      text: (
        <p className={styles.revolutionCardText}>
          Rapid and intelligent control of the Organizations for members and
          lower level members.
        </p>
      ),
    },
  ],
  4: [
    {
      img: assuredQualityImg,
      title: "Assured quality",
      text: (
        <p className={styles.revolutionCardText}>
          Compliant with regulatory standards like GDPR.
        </p>
      ),
    },
    {
      img: givingIdImg,
      title: "Quality & Authenticity",
      text: (
        <p className={styles.revolutionCardText}>
          Smart real time monitoring within the network of your IoT.
        </p>
      ),
    },
    {
      img: leafImg,
      title: "Ecological Safety",
      text: (
        <p className={styles.revolutionCardText}>
          Harnessing the power of IoT for hazard detection to prevent damage.
        </p>
      ),
    },
  ],
};

const revCardUrl = [
  "/product/chokidr-software/autonomousMachines",
  "/product/chokidr-software/connecting-people-and-things",
  "/product/chokidr-software/edge-iot",
  "/product/chokidr-software/green-and-economy",
];
const Home = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);
  const [activeRev, setActiveRev] = useState(1);
  return (
    <>
      <Head>
        <title>Happymonk - Home</title>
        <meta property="og:title" content="Happymonk  Home" key="title" />
      </Head>
      <div className={styles.home}>
        <div className={styles.landingContainer}>
          <div className={styles.darkLayer}>
            <Header />
            <div className={styles.landingPage}>
              <div className={styles.mainText}>
                <h1 className={styles.heading1}>
                  Empowering organizations to create a better tomorrow.
                </h1>
                <h6 className={styles.landingText}>
                  We develop technologies that create a safer tomorrow that
                  promise a safer, better and inclusive future.
                </h6>
              </div>
              <div className={styles.readMore}>
                <Button
                  title={"Read More"}
                  url={"/product/chokidr-software"}
                  isActive={true}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Black Box section */}
        <div className={styles.balckBoxContainer}>
          <div className={styles.chokidarImg}>
            <Image src={chokidarDeviceImg} alt="Chokidr" />
          </div>
          <heading2 className={styles.heading1}>
            Worried about critical systems going offline?
            {/* <br /> */}
          </heading2>
          <ul className={styles.balckBoxIconList}>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={autonomusI} alt="autonomous" />
              </div>
              <h5 className={styles.backBoxListText}>Autonomous</h5>
            </li>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={decentI} alt="Decentralised" />
              </div>
              <h5 className={styles.backBoxListText}>Decentralised</h5>
            </li>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={edgeCompImg} alt="edge computed" />
              </div>
              <h5 className={styles.backBoxListText}>Edge Computed</h5>
            </li>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={offline} alt="edge computed" />
              </div>
              <h5 className={styles.backBoxListText}>Offline</h5>
            </li>
          </ul>
        </div>

        {/* revolution through change section */}
        <div className={styles.revolutionaCotainer}>
          <div className={styles.revolutionAtomImg}>
            <Image src={revolutionAtomImg} alt="Revolution Atom" />
          </div>
          <h2 className={styles.heading2}>Revolution through Innovation</h2>

          <ul className={styles.revolutionList}>
            <li
              className={styles.revolutionItem}
              onClick={() => setActiveRev(1)}
            >
              <div className={styles.revolutionItemImg}>
                {activeRev === 1 && <div className={styles.imgGlow}></div>}
                <Image src={decentI} alt="autonomous_machines" />
              </div>
              <div className={styles.revolutionItemText}>
                Autonomous Machines
              </div>
            </li>

            <li
              className={styles.revolutionItem}
              onClick={() => setActiveRev(2)}
            >
              <div className={styles.revolutionItemImg}>
                {activeRev === 2 && <div className={styles.imgGlow}></div>}
                <Image src={connectingPeopleImg} alt="Cyber Physical Systems" />
              </div>
              <div className={styles.revolutionItemText}>
                Cyber Physical Systems
              </div>
            </li>

            <li
              className={styles.revolutionItem}
              onClick={() => setActiveRev(3)}
            >
              <div className={styles.revolutionItemImg}>
                {activeRev === 3 && <div className={styles.imgGlow}></div>}
                <Image src={securityAuditImg} alt="C4I Systems" />
              </div>
              <div className={styles.revolutionItemText}>C4I Systems</div>
            </li>
          </ul>
          <div className={styles.revolutionCard}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>

            <ul className={styles.revolutionCardList}>
              {revCardData[activeRev].map((e, i) => (
                <li key={i} className={styles.revolutionCardItem}>
                  <div className={styles.revolutionCardImage}>
                    <Image src={e.img} alt={e.title} />
                  </div>
                  <h5 className={styles.revolutionCardSubHeading}>{e.title}</h5>

                  <p>{e.text}</p>
                </li>
              ))}
            </ul>

            <div className={styles.readMoreText}>
              {revCardUrl[activeRev - 1] !== "" && (
                <Link href={revCardUrl[activeRev - 1]}>
                  <a>
                    <span>Read More</span>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Protokollo Section */}
        <div className={styles.protokolloContiner}>
          <div className={styles.protokolloBg1}></div>
          <div className={styles.protokolloBg2}></div>
          <h2 className={styles.heading2}>Protokollo</h2>
          <p className={styles.protokolloSummary}>
            Imagine a world where you could provide your location proof, without
            giving away the actual location of the entity. A world where your
            Identity is verified without having to share your personal details
            such as age, date of birth. A world where data that is sent to
            authorities are reliable and not sent to wrong personal. The
            imagination just got real.
          </p>

          <h5 className={styles.heading3}>Protokollo provides</h5>

          <ul className={styles.protocolList}>
            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={locationImg} alt="location" />
              </div>
              <h6 className={styles.protocolItemText}>Proof of Location</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={proofDocImg} alt="Proof Doc" />
              </div>
              <h6 className={styles.protocolItemText}>Proof of Activity</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={authorityProofImg} alt="Authority" />
              </div>
              <h6 className={styles.protocolItemText}>Proof of Authority</h6>
            </li>
          </ul>
        </div>

        {/* More on ProtoKollo section */}
        <div className={styles.aditionalProtoKollo}>
          <div className={styles.aditionalProtoKolloBgImg}>
            {/* {!carouselSwitch ? ( */}
            <div
              className={`${styles.aditionalProtoKolloLeft} ${
                carouselSwitch ? styles.dNone : ""
              }`}
            >
              <h2 className={styles.heading2}>
                Would you like to improve your workforce productivity?
              </h2>
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={homeAnalytics} alt="home analytics" />
              </div>
              <p className={styles.para}>
                <b>Track & Trace</b> critical events and movements of workforce,
                enabling easier compliance, aiding human decisions and removing
                human dependency.
                <br />
                Remove Friction, Enable greater workforce collabration and
                streamline productivity.
              </p>
              <div className={styles.readMoreText}>
                <Button
                  title={"Read more"}
                  url={"/platform/ai"}
                  // isActive={true}
                />
                {/* <Link href="/platform/ai">
                  <a>Read more</a>
                </Link> */}
              </div>
              <div className={styles.carouselBtn}>
                <Icons.filledDot />
                <Icons.outlinedDot onClick={() => setCarouselSwitch(true)} />
              </div>
            </div>
            {/* ) : ( */}
            <div
              className={`${styles.aditionalProtoKolloRight} ${
                carouselSwitch ? "" : styles.dNone
              }`}
            >
              <h2 className={styles.heading2}>
                Do you imaging a safer workplace environment?
              </h2>
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={smartAIImg} alt="Smart AI" />
              </div>
              <p className={styles.para}>
                <b>Detect, Identify and take action </b> on critical action
                points across your organisations under one single dashboard.
                <br />
                Save millions of dollars and improve workplace safety and enjoy
                better people satisfaction.
              </p>

              <div className={styles.readMoreText}>
                <Button
                  title={"Read more"}
                  url={"/product/chokidr-hardware"}
                  // isActive={true}
                />
              </div>

              <div className={styles.carouselBtn}>
                <Icons.outlinedDot onClick={() => setCarouselSwitch(false)} />
                <Icons.filledDot />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        {/* Case Studies section */}
        {/* commented due to no content */}
        {/* <CaseStudySection /> */}

        {/* Networking section */}
        <div className={styles.networkingContainer}>
          <div className={styles.networking}>
            <div className={styles.colorFade}></div>
            <div className={styles.networkingImg}>
              <Image src={iphone11Img} alt="phone" />
            </div>
            <div className={styles.networkingText}>
              <div className={styles.globeBg}></div>
              <h2 className={styles.heading2}>Connect with an Expert.</h2>
              <br />
              <h3 className={styles.heading3}>
                Leverage industry leading expertise and find a shorter path to
                innovation
                {/* <br /> */}
                Contact our representatives and get started right away.
              </h3>
              <br />
              <br />
              <div className={styles.readMore}>
                <Button
                  title={"Register Now"}
                  url={"/register"}
                  isActive={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
