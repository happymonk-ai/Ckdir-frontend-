import landingImg from "../../../public/tab-width-phone.png";
import styles from "../../../styles/Software.module.scss";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import Image from "next/image";
import horioztalScaleImg from "../../../public/icons/horizontally-scrollable.svg";
import iotImg from "../../../public/iot-device.png";
import cloudLockImg from "../../../public/icons/cloud-lock.png";
import privateNWImg from "../../../public/icons/private-nw.png";
import knpImg from "../../../public/icons/zknp.png";
import CaseStudySection from "../../../components/CaseStudySection";
import sfImg from "../../../public/employee-with-laptop.png";
import GlowStyleCard from "../../../components/GlowStyleCard";
import firefiterImg from "../../../public/firefiter.png";
import faceRecogImg from "../../../public/face-recognition.png";
import commandNControllImg from "../../../public/command&control-min.png";
import Link from "next/link";
import AlternateSection from "../../../components/AlternateSection";
import connectingSenforImg from "../../../public/connecting-sensors.png";
import specialArms from "../../../public/specna-arms.png";
import iot5gImg from "../../../public/5giot-withhw.png";
import { Icons } from "../../../utils/icons";
import { useState } from "react";
import Button from "../../../components/Button";
import identityImg from "../../../public/identities-min.png";
import Head from "next/head";

const ChokidrSoftware = () => {
  const [carouselSwitch, setCarouselSwitch] = useState(false);

  return (
    <>
      <Head>
        <title>Software - Happymonk</title>
        <meta property="og:title" content="Software" key="title" />
      </Head>
      <div>
        <Header />
        <div className={styles.landing}>
          <div className={styles.glowCircle}></div>
          <div className={styles.container}>
            <div className={styles.textContainer}>
              <h2 className={styles.landingText}>
                Accelerating Autonomous Safety & Security
              </h2>
              <p className={styles.para}>
                Chokidr&trade; state of the Art Security & Threat Detection
                platform, designed to improve safety, autonomy, & efficiency of
                people.
              </p>
            </div>
            <div className={styles.img}>
              <Image src={landingImg} alt={"software in devices"} />
            </div>
          </div>
        </div>

        {/* device list */}
        <ul className={styles.deviceList}>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={knpImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Zero knowledge Proof</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={cloudLockImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Tamperproof Data</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={privateNWImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Private Network</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={iotImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Intergrated IOT</h6>
          </li>
          <li className={styles.item}>
            <div className={styles.img}>
              <Image src={horioztalScaleImg} alt="icon" />
            </div>
            <h6 className={styles.text}>Scalable and Affordable</h6>
          </li>
        </ul>

        {/* big image section */}
        <div className={styles.aditionalProtoKollo}>
          <div className={styles.aditionalProtoKolloBgImg}>
            {/* {!carouselSwitch ? ( */}
            <div
              className={`${styles.aditionalProtoKolloLeft} ${
                carouselSwitch ? styles.dNone : ""
              }`}
            >
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={commandNControllImg} alt="face recog" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Command & Control</h2>
                <p className={styles.para}>
                  Get real time information across your organization, members
                  and devices under one single unified dashboard.
                </p>
                <div className={styles.readMoreText}>
                  <Link href="/product/chokidr-software/command-and-control">
                    <a>Read more</a>
                  </Link>
                </div>
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
              <div className={styles.aditionalProtoKolloLeftImg}>
                <Image src={firefiterImg} alt="fire fighters" />
              </div>
              <div className={styles.textContainer}>
                <h2 className={styles.heading}>Autonomous Machines</h2>
                <p className={styles.para}>
                  Autonomous machines revolutionize our economy greatly by
                  improving the efficiency in delivery, transportation,
                  manufacturing, and many other sectors.
                </p>
                <div className={styles.readMoreText}>
                  <Link href="/product/chokidr-software/autonomousMachines">
                    <a>Read more</a>
                  </Link>
                </div>
              </div>
              <div className={styles.carouselBtn}>
                <Icons.outlinedDot onClick={() => setCarouselSwitch(false)} />
                <Icons.filledDot />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>

        {/* alternate section */}
        <div className={styles.alterList}>
          <AlternateSection
            // isImageLast={true}
            heading={"Connecting people and things"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                  A world like no other.<br></br> A simple, well-connected,
                  Decentralized application for people, companies and things
                  with powerful privacy preserving network-wide insight
                  generation can help foster more collaboration and generate
                  significant value for all the participants.
                </div>
              </div>
            }
            image={
              <div className={`${styles.csaImg} ${styles.smr}`}>
                <Image src={connectingSenforImg} alt={"image"} />
              </div>
            }
            btnText={"Read more"}
            url={"/product/chokidr-software/connecting-people-and-things"}
          />

          <div className={styles.ml}>
            <AlternateSection
              isImageLast={true}
              heading={"Identities"}
              text={
                <div className={styles.container}>
                  <div className={styles.label}>
                    Decentralized Identities for Humans, Devices and Things.
                    <br></br>
                    Identities contains data such as public keys, enabling the
                    holder to prove ownership over their personal data.
                    Verifiable Credentials are statements about the holder. They
                    can be verified online or in person, and the holder decides
                    who to share them with.
                  </div>
                </div>
              }
              image={
                <div className={`${styles.csaImg} ${styles.sml}`}>
                  <Image src={identityImg} alt={"image"} />
                </div>
              }
              btnText={"Read more"}
              url={"/product/chokidr-software/identities"}
            />
          </div>

          <AlternateSection
            // isImageLast={true}
            heading={"Edge IOT"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Connect Dhar and Sub-second feedback even while being offline
                through LoRaWAN and Inbuilt 5G with Legacy Retrofiting.
                </div>
              </div>
            }
            image={
              <div className={`${styles.csaImg}`}>
                <Image src={iot5gImg} alt={"image"} />
              </div>
            }
            btnText={"Read more"}
            url={"/product/chokidr-software/edge-iot"}
          />

          <div className={styles.sfLabel}>
            <AlternateSection
              isImageLast={true}
              heading={"Social Footprint"}
              text={
                <div className={`${styles.container}`}>
                  <div className={styles.label}>
                  Reduce Carbon foot print of your organisation. <br></br>Blockchain technology helps businesses to bring credibility to their carbon offsetting strategies to backup their net zero commitments with public transparency.
                  </div>
                </div>
              }
              image={
                <div className={`${styles.csaImg} ${styles.sml}`}>
                  <Image src={sfImg} alt={"image"} />
                </div>
              }
              btnText={"Read more"}
              url={"/product/chokidr-software/social-footprint"}
            />
          </div>
        </div>

        {/* Social Footprint Section */}
        {/* <div className={styles.sf}>
          <div className={styles.container}>
            <div className={styles.heading}></div>
            <div className={styles.label}></div>

            <div className={styles.readMoreText}>
              <Button
                title="Read more"
                url="/product/chokidr-software/social-footprint"
              />
            </div>
          </div>
          <div className={styles.img}>
            <Image src={sfImg} alt={"employe with laotop"} />
          </div>
        </div> */}

        {/* Case Studies section */}
        {/* no content */}
        {/* <div className={styles.csSection}>
        <CaseStudySection />
      </div> */}
      </div>
    </>
  );
};

export default ChokidrSoftware;
