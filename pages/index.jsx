import Button from "../components/Button";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

import Carousel from "react-elastic-carousel";

import chokidarDeviceImg from "../public/chokidar-device.png";
import revolutionAtomImg from "../public/revolution-atom.png";
import securityAuditImg from "../public/securityAudit.png";

import locationImg from "../public/icons/location.svg";

import Card from "../components/Card";
import CaseStudySection from "../components/CaseStudySection";
import { Icons } from "../utils/icons";
import React, { useState, useRef } from "react";

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
import ai from "../public/compressed/ai.svg";
import supplier from "../public/compressed/supplier.svg";
import shieldI from "../public/icons/shield 1.svg";
import emergencyI from "../public/icons/emergency 1.svg";
import accessControlI from "../public/icons/access-control 3.svg";
import teamManagementI from "../public/icons/team-management 2.svg";
import attendanceI from "../public/icons/attendance 2.svg";
import othersI from "../public/icons/button 1.svg";

import factoryI from "../public/icons/factory 1.svg";
import shoppingCartI from "../public/icons/shopping-cart 1.svg";
import truckI from "../public/icons/truck 1.svg";
import budgetI from "../public/icons/budget 1.svg";
import healthcareI from "../public/icons/healthcare 1.svg";

import actionI from "../public/icons/action 1.svg";
import dangerI from "../public/icons/danger 1.svg";
import faceRecognitionI from "../public/icons/face-recognition 1.svg";
import intrusionI from "../public/icons/intrusion 1.svg";

import detectionG from "../public/compressed/detection_video.mp4";
// import detectionG from "../public/compressed/detection 1.gif";
// import detectionG1 from "../public/ezgif 1.gif";

import analyticsI from "../public/icons/analytics 2.svg";
import hardwareI from "../public/icons/hardware 1.svg";
import contentManagementI from "../public/icons/content-management 1.svg";
import mobileAppI from "../public/icons/mobile-app 1.svg";

import infinovaI from "../public/icons/infinova 1.svg";
import axisI from "../public/icons/Axis 1.svg";
import netappI from "../public/icons/netapp.svg";
import nvidiaI from "../public/icons/nvidia.svg";
import ciscoI from "../public/icons/cisco.svg";
// import prevI from "../public/icons/Vector 7.svg";
// import nextI from "../public/icons/vector 8.svg";

import portImg from "../public/port.png";
import soldierHologramImg from "../public/soldier-hologram.png";
import steelFactoryImg from "../public/steel-factory.png";

const revCardData = {
  1: [
    {
      img: shieldI,
      title: "Security Monitoring",
      text: (
        <p className={styles.revolutionCardText}>
          Monitor and detect any intrusions in and around business properties.
        </p>
      ),
    },
    {
      img: emergencyI,
      title: "Emergency Response",
      text: (
        <p className={styles.revolutionCardText}>
          Quickly detect and respond to emergencies such as workplace accidents,
          fires, and thefts.
        </p>
      ),
    },
    {
      img: accessControlI,
      title: "Access Control",
      text: (
        <p className={styles.revolutionCardText}>
          Provide access control to restricted areas and detect unauthorized
          access.
        </p>
      ),
    },
    {
      img: teamManagementI,
      title: "Workforce Management",
      text: (
        <p className={styles.revolutionCardText}>
          Monitor employee attendance and productivity in office, manufacturing,
          and other industries.
        </p>
      ),
    },
    {
      img: attendanceI,
      title: "Time & Attendance",
      text: (
        <p className={styles.revolutionCardText}>
          Provide access control to restricted areas and detect unauthorized
          access.
        </p>
      ),
    },
    {
      img: othersI,
      title: "Others",
      text: (
        <p className={styles.revolutionCardText}>
          Customisable solutions for use cases like customer analytics, crowd
          management and so on.
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

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 235, itemsToShow: 2, itemsToScroll: 2 },
  { width: 550, itemsToShow: 3, itemsToScroll: 3 },
];
const Home = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);
  const [activeRev, setActiveRev] = useState(1);
  // const [currentPage, setCurrentPage] = useState(0);
  // const ulRef = useRef(null);

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  //   ulRef.current.scrollLeft = page * ulRef.current.offsetWidth+10;
  // };

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
                  Empower your Business with <b>Chokidr</b>
                </h1>
                <h6 className={styles.landingText}>
                  Our video analytics solutions offer advanced features to
                  enhance security and efficiency across industries. With real-
                  time monitoring and analytics, you can make informed decisions
                  to optimize business operations.
                </h6>
              </div>
              <div className={styles.homeBtnContainer}>
                <div className={styles.readMore}>
                  <Button
                    title={"Learn More"}
                    url={"/product/chokidr-software"}
                    isActive={false}
                  />
                </div>
                <div className={styles.readMore}>
                  <Button
                    title={"Book Demo"}
                    url={"/product/chokidr-software"}
                    isActive={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Black Box section */}
        <div className={styles.balckBoxContainer}>
          <div className={styles.chokidarImg}>
            <Image src={chokidarDeviceImg} alt="Chokidr" />
          </div>
          <h2 className={styles.heading2Text}>
            Smart AI-based Video Analytics Platform
          </h2>
          <ul className={styles.balckBoxIconList}>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={ai} alt="artificial intelligence" />
              </div>
              <h5 className={styles.backBoxListText}>
                Autonomous Surveillance & Security
              </h5>
              <p className={styles.blackBoxListDescription}>
                Keep Your Business Safe, No Matter What.
              </p>
            </li>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={supplier} alt="industrial systems" />
              </div>
              <h5 className={styles.backBoxListText}>Industrial Systems</h5>
              <p className={styles.blackBoxListDescription}>
                Stay Ahead of the Game with Real-Time Insights and Optimization.
              </p>
            </li>
            <li className={styles.blackBoxIcon}>
              <div className={styles.balckBoxIconImg}>
                <Image src={edgeCompImg} alt="edge servers" />
              </div>
              <h5 className={styles.backBoxListText}>Edge Servers</h5>
              <p className={styles.blackBoxListDescription}>
                Enhance Your Surveillance and Sensors with Lightning-Fast Edge
                Processing.
              </p>
            </li>
          </ul>
        </div>

        {/* revolution through change section */}
        <div className={styles.revolutionaCotainer}>
          {/* <div className={styles.revolutionAtomImg}>
            <Image src={revolutionAtomImg} alt="Revolution Atom" />
          </div> */}
          <h2 className={styles.heading2}>Find your Use Case</h2>

          {/* <ul className={styles.revolutionList}>
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
          </ul> */}
          <div className={styles.revolutionCard}>
            <div className={styles.circle1}></div>
            <div className={styles.circle2}></div>
            <div className={styles.circle3}></div>

            {/* <ul className={styles.revolutionCardList} ref={ulRef}>
              <Carousel>
                {revCardData[activeRev].map((e, i) => (
                  <li key={i} className={styles.revolutionCardItem}>
                    <div className={styles.revolutionCardImage}>
                      <Image src={e.img} alt={e.title} />
                    </div>
                    <h5 className={styles.revolutionCardSubHeading}>
                      {e.title}
                    </h5>

                    <p>{e.text}</p>
                  </li>
                ))}
              </Carousel>
            </ul> */}

            <ul className={styles.revolutionCardList}>
              <Carousel breakPoints={breakPoints}>
                {revCardData[activeRev].map((e, i) => (
                  <li key={i} className={styles.revolutionCardItem}>
                    <div className={styles.revolutionCardImage}>
                      <Image src={e.img} alt={e.title} />
                    </div>
                    <h5 className={styles.revolutionCardSubHeading}>
                      {e.title}
                    </h5>

                    <p>{e.text}</p>
                  </li>
                ))}
              </Carousel>
            </ul>

            {/* <div className={styles.readMoreText}>
              {revCardUrl[activeRev - 1] !== "" && (
                <Link href={revCardUrl[activeRev - 1]}>
                  <a>
                    <span>Read More</span>
                  </a>
                </Link>
              )}
            </div> */}

            {/* <div className={styles.activeBarContainer}>
              <div
                className={`${
                  currentPage === 0 ? styles.active : styles.border
                }`}
                onClick={() => handlePageChange(0)}
              ></div>
              <div
                className={`${
                  currentPage === 1 ? styles.active : styles.border
                }`}
                onClick={() => handlePageChange(1)}
              ></div> */}
            {/* {Array.from(Array(totalPages)).map((_, index) => (
                <div
                  key={index}
                  className={`${styles.active} ${
                    currentPage === index ? styles.activePage : ""
                  }`}
                  onClick={() => handlePageChange(index)}
                />
              ))} */}
            {/* </div> */}
          </div>
        </div>

        {/* Protokollo Section */}
        {/* <div className={styles.protokolloContiner}>
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
        </div> */}

        {/* Industry Specific Solutions section */}
        <div className={styles.protokolloContiner}>
          <h5 className={styles.heading3}>Industry Specific Solutions</h5>

          <ul className={styles.offeringsList}>
            <li className="protocolItem">
              <div className={styles.offeringsImg}>
                <div>
                  <Image src={factoryI} alt="manufacturing" />
                </div>
              </div>
              <h6 className={styles.offeringItemText}>Manufacturing</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.offeringsImg}>
                <div>
                  <Image src={shoppingCartI} alt="retail" />
                </div>
              </div>
              <h6 className={styles.offeringItemText}>Retail</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.offeringsImg}>
                <div>
                  <Image src={truckI} alt="transportation" />
                </div>
              </div>
              <h6 className={styles.offeringItemText}>Transportation</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.offeringsImg}>
                <div>
                  <Image src={budgetI} alt="finance" />
                </div>
              </div>
              <h6 className={styles.offeringItemText}>Finance</h6>
            </li>

            <li className="protocolItem">
              <div className={styles.offeringsImg}>
                <div>
                  <Image src={healthcareI} alt="healthcare" />
                </div>
              </div>
              <h6 className={styles.offeringItemText}>Healthcare</h6>
            </li>
          </ul>
        </div>

        {/* Our Technologies Section section */}

        <section className={styles.techSecWrapper}>
          <h2 className={styles.ourTechsHeading}>Our Technologies</h2>
          <div className={styles.technologiesContainer}>
            <ul className={styles.technologiesList}>
              <li className={styles.technologies}>
                <div className={styles.technologyIconImg}>
                  <Image src={actionI} alt="activity recognition" />
                </div>
                <div className={styles.techInfoContainer}>
                  <h5 className={styles.techInfoSubHeading}>
                    Human Behaviour Detection
                  </h5>
                  <p className={styles.techInfoText}>
                    Real-time analysis of human behaviour and actions,
                    identifying over 200 types of actions and behaviours.
                  </p>
                </div>
              </li>

              <li className={styles.technologies}>
                <div className={styles.technologyIconImg}>
                  <Image src={faceRecognitionI} alt="facial recognition" />
                </div>
                <div className={styles.techInfoContainer}>
                  <h5 className={styles.techInfoSubHeading}>
                    Identity Profiling
                  </h5>
                  <p className={styles.techInfoText}>
                    Advanced facial recognition technology for biometric
                    identification, re-identification, and activity tracking,
                    including automated biometric attendance through
                    surveillance.
                  </p>
                </div>
              </li>

              <li className={styles.technologies}>
                <div className={styles.technologyIconImg}>
                  <Image src={dangerI} alt="anomaly detection" />
                </div>
                <div className={styles.techInfoContainer}>
                  <h5 className={styles.techInfoSubHeading}>
                    Animal Intrusion & Attacks
                  </h5>
                  <p className={styles.techInfoText}>
                    Detecting and identifying animals for government agencies,
                    for wildlife conservation and environmental monitoring.
                  </p>
                </div>
              </li>

              <li className={styles.technologies}>
                <div className={styles.technologyIconImg}>
                  <Image
                    src={intrusionI}
                    alt="intrusion and loitering detection"
                  />
                </div>
                <div className={styles.techInfoContainer}>
                  <h5 className={styles.techInfoSubHeading}>
                    Loitering & Threat Detection
                  </h5>
                  <p className={styles.techInfoText}>
                    Monitoring video footage to detect individuals or groups
                    remaining in an area for an extended period without any
                    specific purpose, triggering an alert.
                  </p>
                </div>
              </li>
            </ul>
            <div className={styles.detectionGifContainer}>
              {/* <Image
                className={styles.detectionGif}
                src={detectionG}
                alt="activity,facial,anomaly and intrusion detection"
              /> */}
              <video
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                className={styles.detectionGif}
              >
                <source src={detectionG} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* What we offer section */}
        <section className={styles.offeringsSecWrapper}>
          <h2 className={styles.heading2}>What We Offer</h2>
          <div className={styles.offeringsContainer}>
            <div className={styles.offeringItem}>
              <div className={styles.offeringIcon}>
                <Image src={analyticsI} alt="artificial intelligence" />
              </div>
              <div className={styles.offeringInfoContainer}>
                <h5 className={styles.offeringInfoHeading}>
                  Autonomous Surveillance & Security
                </h5>
                <p className={styles.offeringInfoText}>
                  With a comprehensive range of features to help monitor your
                  premises effectively. With real-time alerts and notifications,
                  ensure the safety and security of your assets.
                </p>
              </div>
            </div>
            <div className={styles.offeringItem}>
              <div className={styles.offeringIcon}>
                <Image src={hardwareI} alt="artificial intelligence" />
              </div>
              <div className={styles.offeringInfoContainer}>
                <h5 className={styles.offeringInfoHeading}>
                  Edge Analytics Hardware
                </h5>
                <p className={styles.offeringInfoText}>
                  Enterprise-grade solutions to process data at the edge,
                  without the need for a centralised server. Server options
                  ranging from 8-64 cameras.
                </p>
              </div>
            </div>
            <div className={styles.offeringItem}>
              <div className={styles.offeringIcon}>
                <Image src={contentManagementI} alt="artificial intelligence" />
              </div>
              <div className={styles.offeringInfoContainer}>
                <h5 className={styles.offeringInfoHeading}>
                  Web-Based Video Management System
                </h5>
                <p className={styles.offeringInfoText}>
                  A user-friendly interface to manage and monitor your video
                  analytics solutions. It allows you to access video data from
                  anywhere, at any time.
                </p>
              </div>
            </div>
            <div className={styles.offeringItem}>
              <div className={styles.offeringIcon}>
                <Image src={mobileAppI} alt="artificial intelligence" />
              </div>
              <div className={styles.offeringInfoContainer}>
                <h5 className={styles.offeringInfoHeading}>
                  Mobile App-Based Video Management
                </h5>
                <p className={styles.offeringInfoText}>
                  Our mobile application offers a user-friendly interface to
                  access and manage your video analytics solutions on-the-go.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners section */}
        <section className={styles.partnersSecWrapper}>
          <h2 className={styles.heading2}>Our Partners</h2>
          <ul className={styles.partnersList}>
            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={infinovaI} alt="manufacturing" />
              </div>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={axisI} alt="retail" />
              </div>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={netappI} alt="transportation" />
              </div>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={nvidiaI} alt="finance" />
              </div>
            </li>

            <li className="protocolItem">
              <div className={styles.protocolImg}>
                <Image src={ciscoI} alt="healthcare" />
              </div>
            </li>
          </ul>
        </section>

        {/* More on ProtoKollo section */}
        <div className={styles.aditionalProtoKollo}>
          <div className={styles.aditionalProtoKolloBgImg}>
            {/* {!carouselSwitch ? ( */}
            <div
              className={`${styles.aditionalProtoKolloLeft} ${
                carouselSwitch ? styles.dNone : ""
              }`}
            >
              <h2 className={styles.heading2}>Sensor fusion and Analytics</h2>
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={homeAnalytics} alt="home analytics" />
              </div>
              <p className={styles.para}>
                Travel agencies have an increase of 20% in customer satisfaction
                with Chokidr. SRS travels - Cameras and Sensors - Human
                intervention.
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
              <h2 className={styles.heading2}>Smart Artificial Intelligence</h2>
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={smartAIImg} alt="Smart AI" />
              </div>
              <p className={styles.para}>
                State of the Art AI that is capable of object identification,
                facial identification with enhanced deep learning and machine
                learning algorithms at the back - Bringing more power to you!
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
        <section className={styles.caseStudySecWrapper}>
          <h2 className={styles.heading2}>Case Studies</h2>
          <div className={styles.caseStudiesImgContainer}>
            <div className={styles.caseStudyImg}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image src={portImg} alt="supply chain and transportation" />
              </div>
              <h3 className={styles.textOnImage}>
                Supply Chain and Transportation
              </h3>
            </div>
            <div className={styles.caseStudyImg}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={steelFactoryImg}
                  alt="supply chain and transportation"
                />
              </div>
              <h3 className={styles.textOnImage}>
                Industries and Organisation
              </h3>
            </div>
            <div className={styles.caseStudyImg}>
              <div style={{ filter: "brightness(50%)" }}>
                <Image
                  src={soldierHologramImg}
                  alt="supply chain and transportation"
                />
              </div>
              <h3 className={styles.textOnImage}>Defense</h3>
            </div>
          </div>
        </section>

        {/* Networking section */}
        <div className={styles.networkingContainer}>
          <div className={styles.networking}>
            <div className={styles.colorFade}></div>
            <div className={styles.networkingImg}>
              <Image src={iphone11Img} alt="phone" />
            </div>
            <div className={styles.networkingText}>
              <div className={styles.globeBg}></div>
              <h2 className={styles.heading2}>
                Make your Network more reliable by deploying Chokidr today!
              </h2>
              <br />
              <h3 className={styles.heading3}>
                If Assured Safety is the goal,
                <br /> We are your answer.
                {/* <br /> */}
              </h3>
              <br />
              <br />
              <div className={styles.readMore}>
                <Button
                  title={"Book Demo"}
                  url={"/register"}
                  isActive={false}
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
