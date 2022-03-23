import styles from "../../styles/Network.module.scss";
import Header from "../../components/Header";
import mapDashboardImg from "../../public/mapdashboard.png";
import Image from "next/image";
import Button from "../../components/Button";
import rectangleImg from "../../public/Rectangle_630.png";
import Link from "next/link";
import platformCard1Img from "../../public/closeHardwareBackground.png";
import platformCard2Img from "../../public/digital-world-banner-background-remixed-from-public-domain-by-nasa.png";
import platformCard3Img from "../../public/close-up-connect-component-background.png";
import platformCard4Img from "../../public/competition-computer-computing-perspective-sky.png";
import inteligenceImg from "../../public/icons/indeligence.svg";
import coordinatingDevicesImg from "../../public/icons/coordinating-devices.svg";
import governanceImg from "../../public/icons/central-governance.svg";
import privecyImg from "../../public/icons/lock-privecy.svg";
import React from "react";
import ConnectNetworkSection from "../../components/ConnectNetowrkSection";
import networkContactImg from "../../public/cloud-computing-banner-background-smart-city-1.png";

const Network = () => {
  const platFormCardData = [
    {
      imageUrl: platformCard1Img,
      heading: "Cloud Connect",
      text: "Click, Connect & Integrate your legacy Infrastructure, Fleet and Members into a common eco-system with multi-tenancy permissions and views",
    },
    {
      imageUrl: platformCard1Img,
      heading: "Go offline",
      text: "Our Propriety hardware systems allows you to take your data on-premise, adhere to compliance and create offline systems which scale horizontally deeply easing impacting the financial efficeny and compliance.",
    },
    {
      imageUrl: platformCard1Img,
      heading: "G2A, G2G Communication",
      text: "Connect ",
    },
    {
      imageUrl: platformCard2Img,
      heading: "Multi Location & Devices",
      text: "Integrate your organization across multiple locations, fleet into one common eco-systems to give you complete control over the track & trace, across your organization through single command and control centre on your phone.",
    },
    {
      imageUrl: platformCard3Img,
      heading: "Legacy Retrofitting",
      text: "Retro-fit your existing infrastructure and harness the power of state of the art blockchain and artificial intelligent algorithms.",
    },
    {
      imageUrl: platformCard4Img,
      heading: "Zero Fee",
      text: "Public Network runs at zero fees for any data verification or transfers that happens across the network. Organizations can create their own private network through our propriety hardware and LoRaWAN.",
    },
  ];
  return (
    <div className={styles.platform}>
      <div className={styles.landing}>
        <Header />
        <div className={styles.textContainer}>
          <span className={styles.landingText}>
            Creating Independent, Sustainable & Compliance based Eco-system for
            Governments, Industries and Agencies.
          </span>
        </div>
      </div>

      {/* Salient features section */}
      <div className={styles.salientFeature}>
        {/* <div className={styles.slientHeading}>Salient features</div> */}
        <div className={styles.featuresCard}>
          {/* glowing cards */}
          {/* <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div> */}

          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={inteligenceImg} alt="intelligence" />
              </div>
              <div className={styles.featureText}>Public x Private Network</div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image
                  src={coordinatingDevicesImg}
                  alt="coordinating devices"
                />
              </div>
              <div className={styles.featureText}>Digital Twins</div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={governanceImg} alt="governance" />
              </div>
              <div className={styles.featureText}>
                Offline Sensing and Processing
              </div>
            </li>
            <li className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Image src={privecyImg} alt="privacy" />
              </div>
              <div className={styles.featureText}>
                Zero Knowledge Collaboration
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* cards section */}
      <div className={styles.cardList}>
        {platFormCardData.map((card, i) => (
          <div className={styles.platformCard} key={i}>
            <div className={styles.platformCardImage}>
              <Image src={card.imageUrl} alt="card image" />
            </div>
            <div className={styles.platformTextContainer}>
              <div className={styles.platformCardHading}>{card.heading}</div>
              <div className={styles.platformCardText}>{card.text}</div>
            </div>
          </div>
        ))}
      </div>

      {/* test network section */}
      <div className={styles.connectNetwork}>
        <ConnectNetworkSection
          heading={
            "Leverage the power of Decentralization and Private network for your organization!"
          }
          url={"/contact"}
          isActive={true}
          img={networkContactImg.src}
        />
      </div>

      {/* use case section */}
      {/* no content avilable */}
      {/* <div className={styles.useCase}>
        <div className={styles.useCaseImg}>
          <Image src={rectangleImg} alt="use case" />
        </div>
        <div className={styles.useCaseText}>
          <div>
            <div className={styles.useCaseHeading}>Use Case</div>
            <div className={styles.useCaseSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
              nisl semper eu suscipit sapien varius enim hendrerit egestas.
              Morbi pellentesque ut dignissim lorem. Facilisis adipiscing
              gravida phasellus dui cras arcu. Tellus laoreet quam aliquet id
              sem tempus sollicitudin aenean nibh. Eget lacus elit nunc enim
              purus nec sed aliquam. Aenean semper ultrices nunc, fusce. Eget mi
              ante praesent lobortis ipsum sed erat a magna. Turpis molestie
              ultrices malesuada sagittis, cursus facilisi arcu, egestas dictum.
              Est in elit rutrum nulla malesuada ut eros eget duis. Vitae sit
              dignissim luctus nibh turpis.
            </div>
          </div>

          <div className={styles.useCaseReadMore}>
            <Link href="/platform/network">
              <a>Read more</a>
            </Link>
          </div>
        </div>
      </div> */}

      {/* using network section */}

      <div className={styles.network}>
        <div className={styles.netowrkImg}>
          <Image src={mapDashboardImg} alt="network dashboard" />
        </div>
        <div className={styles.networkTextContainer}>
          <div>
            <div className={styles.networkHeading}>
              Take a leap into the future
            </div>

            <p className={styles.networkText}>
              Contact our representatives and get started right away.
            </p>
          </div>
          <br />
          <div className={styles.contactBtn}>
            <Button title={"Contact"} url={"/contact"} isActive={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
