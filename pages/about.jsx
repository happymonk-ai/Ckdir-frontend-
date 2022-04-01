import React from "react";
import ConnectNetworkSection from "../components/ConnectNetowrkSection";
import Header from "../components/Header";
import styles from "../styles/About.module.scss";
import openRolesBg from "../public/businessman-with-leather-briefcase.png";
import missionImg from "../public/mission-placeholder.png";
import Image from "next/image";
import founder1Img from "../public/bhavish-img.png";
import founder2Img from "../public/Saha_passport.png";
import founder3Img from "../public/sushil-agarwal.png";
import manHoldingFlagImg from "../public/human-holding-flag.png";
import handshakeImg from "../public/hand-shake.png";
import manCorrectImg from "../public/right-man.png";
import heartyHandImg from "../public/hearty-hand.png";
import Head from "next/head";

const career = ({ openRoles }) => {
  return (
    <>
      <Head>
        <title>About - Happymonk</title>
        <meta property="og:title" content="About Happymonk" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>
              Innovating a safer, better and Inclusive future for human beings.
            </h2>
          </div>
        </div>

        {/* mission */}
        <div className={styles.mission}>
          <div className={styles.text}>
            <h2 className={styles.heading2}>Our Mission</h2>
            <div className={styles.para}>
              <p>
                We specialize in enabling People & Things to connect into one
                common universe which aids humans to take better, smarter and
                faster decisions, maintain government compliance and create
                financial efficiency in the ecosystem.
              </p>

              <p>
                Our focus is in the fields of Autonomous machines, Cyber
                Physical Systems &, Command & Control through the use of state
                of the art AI & Privacy Preserving techniques.
              </p>
            </div>
          </div>

          {/* <div className={styles.img}>
                    <Image
                        src={missionImg}
                        alt="mission"
                    />
                </div> */}
        </div>

        {/* our values */}
        <div className={styles.values}>
          <h2 className={styles.heading2}>Our Values</h2>
          <ul className={styles.valueList}>
            {/* {[1, 2, 3].map((e, i) => ( */}
            {/* <li className={styles.cards}>
            <div className={styles.glowVal1}></div>
            <div className={styles.glowVal2}></div>
            <div className={styles.valueImg}>
              <Image src={manHoldingFlagImg} alt={"value"} />
            </div>
            <div className={styles.text}>
              <div className={styles.subHeading}>Lead by example</div>
              <div className={styles.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </li> */}
            <li className={styles.cards}>
              <div className={styles.glowVal1}></div>
              <div className={styles.glowVal2}></div>
              <div className={styles.valueImg}>
                <Image src={handshakeImg} alt={"value"} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.subHeading}>Compassione</h3>
                <p className={styles.summary}>
                  We are kind and caring to everyone we encounter.
                </p>
              </div>
            </li>
            <li className={styles.cards}>
              <div className={styles.glowVal1}></div>
              <div className={styles.glowVal2}></div>
              <div className={styles.valueImg}>
                <Image src={manCorrectImg} alt={"value"} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.subHeading}>User focused</h3>
                <p className={styles.summary}>
                  Focus on the user and all else will follow.
                </p>
              </div>
            </li>
            <li className={styles.cards}>
              <div className={styles.glowVal1}></div>
              <div className={styles.glowVal2}></div>
              <div className={styles.valueImg}>
                <Image src={heartyHandImg} alt={"value"} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.subHeading}>Integrity</h3>
                <p className={styles.summary}>
                  Take actions on time with honesty and integrity in everything
                  we do.
                </p>
              </div>
            </li>
            <li className={styles.cards}>
              <div className={styles.glowVal1}></div>
              <div className={styles.glowVal2}></div>
              <div className={styles.valueImg}>
                <Image src={manHoldingFlagImg} alt={"value"} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.subHeading}>Accountability</h3>
                <p className={styles.summary}>
                  Each of us is responsible for our words, our actions, and our
                  results.
                </p>
              </div>
            </li>
            {/* ))} */}
          </ul>
        </div>

        {/* founders */}
        <div className={styles.founders}>
          <ul className={styles.valueList}>
            <li className={styles.cards}>
              <div className={styles.founderImg}>
                <Image src={founder1Img} alt={"founder"} />
              </div>
              <div className={styles.text}>
                <div className={styles.fglow1}></div>
                <div className={styles.fglow2}></div>
                <h2 className={styles.subHeading}>Bhavish Agarwal</h2>
                <h5 className={styles.fdeseg}>CEO and Managing Director </h5>
                {/* <div className={styles.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                eu, elit bibendum quis facilisi.
              </div> */}
              </div>
            </li>
            <li className={styles.cards}>
              <div className={styles.founderImg}>
                <Image src={founder2Img} alt={"founder"} />
              </div>
              <div className={styles.text}>
                <div className={styles.fglow1}></div>
                <div className={styles.fglow2}></div>
                <h2 className={styles.subHeading}>Dr. Snehanshu Saha</h2>
                <h5 className={styles.fdeseg}>Director of Research </h5>
                {/* <div className={styles.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                eu, elit bibendum quis facilisi.
              </div> */}
              </div>
            </li>
            <li className={styles.cards}>
              <div className={styles.founderImg}>
                <Image src={founder3Img} alt={"founder"} />
              </div>
              <div className={styles.text}>
                <div className={styles.fglow1}></div>
                <div className={styles.fglow2}></div>
                <h2 className={styles.subHeading}>Sushil Agarwal</h2>
                <h5 className={styles.fdeseg}>Director - Marketing</h5>
                {/* <div className={styles.summary}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
                eu, elit bibendum quis facilisi.
              </div> */}
              </div>
            </li>
          </ul>
        </div>

        {/* misc section */}
        <div className={styles.misc}>
          <div className={styles.container}>
            <h2 className={styles.heading2}>Company</h2>
            <div className={styles.para}>
              <p>
                We develop state of the art products & solutions in the field of
                Emerging Technologies.Our interest in understanding information
                and ethical machines, allows us to create state of the art
                Autonomous Machines, Cyber Physical Systems and Command &
                Control Centers.
              </p>
              <p>
                We have our own AI, Blockchain & IoT Research & Development
                Center. We have a large team of data scientists and AI
                engineers, who are led by leading Applied AI Master, Dr.
                Snehanshu Saha. We are at the forefront of creating state of the
                art methods, powered by Deep Learning, Computer Vision and
                Cryptography, assisting businesses and individuals in adopting
                Blockchain driven technologies and transforming traditional
                lives.
              </p>
            </div>
          </div>
        </div>

        {/* open roles */}
        {/* commented due to no content */}
        {/* <ConnectNetworkSection
        img={openRolesBg.src}
        heading={"Open Roles"}
        url={"/careers"}
        btnText={"See Open Roles"}
        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
        isActive={true}
      /> */}
      </div>
    </>
  );
};

export default career;
