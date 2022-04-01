import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import autonomSpecificStyles from "../../../styles/AutonomousSpecific.module.scss";
import landingImg from "../../../public/vichels-on-path.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import complianceImg from "../../../public/factory-with-smoke-stack-against-sky-night.png";
import AlternateSection from "../../../components/AlternateSection";
import envImg from "../../../public/morning-road-people.png";
import reliableDataImg from "../../../public/night-street-trafic.png";
import raysImg from "../../../public/bg-colorfull-rays.png";
import Head from "next/head";

const AutonomousIdentities = () => {
  return (
    <>
      <Head>
        <title>Autonomous Machines - Happymonk</title>
        <meta property="og:title" content="Autonomous Machines" key="title" />
      </Head>
      <div>
        <div className={`${styles.landing} ${autonomSpecificStyles.landing}`}>
          <Header />
          {/* <div className={styles.glowCircle}></div> */}
          <div
            className={`${styles.container} ${autonomSpecificStyles.textContainer}`}
          >
            <div
              className={`${styles.textContainer} ${autonomSpecificStyles.textwrapper}`}
            >
              <h2
                className={`${styles.landingText} ${autonomSpecificStyles.landingText}`}
              >
                Autonomous Machines
              </h2>
              <p className={`${styles.para} ${autonomSpecificStyles.para}`}>
                Autonomous machines revolutionize our economy greatly by
                improving the efficiency in delivery, transportation,
                manufacturing, and many other sectors.
              </p>
            </div>
            {/* <div className={styles.img}>
                        <Image
                            src={landingImg}
                            alt={'software in devices'}
                        />
                    </div> */}
          </div>
        </div>

        <div className={styles.alterList}>
          <div className={styles.list1}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Autonomous Security & Tracking System"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Image and Video Processing for Surveillance. Use of CHOKIDR™
                    for drones (UAV or UGV) for security tracking and
                    monitoring. Integration of surveillance systems to ensure
                    human detection or continuous tracking. Autonomous systems
                    and distributed drone surveillance system for tracking and
                    targeting a particular ordinance.
                  </p>
                </div>
              }
              image={<Image src={complianceImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list2}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              isImageLast={true}
              heading={"Systems that work offline"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    interconnected systems or devices, which can be seen in our
                    everyday lives, such as surveillance, robotic and autonomous
                    systems, are assisted or enhanced by AI algorithms in
                    collecting, processing and analyzing data to determine the
                    appropriate response or action. The larger and connected
                    world that we live in dictates a growing need for a wide
                    coverage of both agriculture and human activity monitoring.
                    This can be achieved via a distributed surveillance system
                    which incorporates a robotic drone system executing AI
                    algorithms to monitor, control and determine the appropriate
                    action to be taken in the shortest time possible even when
                    offline;
                  </p>
                </div>
              }
              image={<Image src={envImg} alt={"image"} />}
            />
          </div>
          <div className={styles.list3}>
            {/* <div className={styles.glow}></div> */}
            <AlternateSection
              // isImageLast={true}
              heading={"Reliable Data"}
              text={
                <div className={styles.container}>
                  <p className={styles.label}>
                    Due to increase the incorporation of complex systems
                    combining robotics with AI into the surrounding environment.
                    Integration of the different fields of AI and robotics into
                    CHOKIDR&trade; allows for the creation of complex connected
                    systems.
                  </p>
                </div>
              }
              image={<Image src={reliableDataImg} alt={"image"} />}
            />
          </div>
        </div>

        {/* commented due to no content */}
        {/* <CaseStudySection /> */}
        {/* <ConnectNetworkSection
       img={raysImg.src}
        heading={"Loreum ipsum"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nibh et ut feugiat duis scelerisque urna, blandit."
        }
        url={"/register"}
        btnText={"Get Invited"}
        isActive={true}
      /> */}
      </div>
    </>
  );
};

export default AutonomousIdentities;
