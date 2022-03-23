import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Blockchain.module.scss";
import securityShieldImg from "../../public/icons/securityShiedl.svg";
import decentralisedImg from "../../public/icons/Decentralised-fill.svg";
import logsImg from "../../public/icons/Immutable-logs.svg";
import kpImg from "../../public/laptop-network.png";
import rightIcon from "../../public/icons/right-circle.svg";
import soundIcon from "../../public/icons/sound.svg";
import zeroKpIcon from "../../public/icons/zerokp.svg";
import phonesImg from "../../public/phoneGroup.png";
import locationImg from "../../public/icons/location.svg";
import proofDocIcon from "../../public/icons/proofDoc.svg";
import authorityProof from "../../public/icons/authorityProof.svg";
import zkp from "../../public/zkp.jpeg";



const Blockchain = ({ kpList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <Header />
        <div className={styles.textContainer}>
          <span className={styles.landingText}>
            Revolutionize the way vital information is managed!
          </span>
        </div>
      </div>

      {/* Blockchain section */}

      <div className={styles.blockchain}>
        {/* <div className={styles.heading}>Blockchain</div> */}

        <div className={styles.glassCard}>
          {/* glowing cards */}
          {/* <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div> */}

          <ul className={styles.bList}>
            <li className={styles.bItem}>
              <div className={styles.featureIcon}>
                <Image src={logsImg} alt="Immutable logs" />
              </div>
              <div className={styles.bText}>Immutable logs</div>
            </li>
            <li className={styles.bItem}>
              <div className={styles.featureIcon}>
                <Image src={decentralisedImg} alt="decentralised" />
              </div>
              <div className={styles.bText}>Decentralized</div>
            </li>
            <li className={styles.bItem}>
              <div className={styles.featureIcon}>
                <Image src={securityShieldImg} alt="Enhanced Security" />
              </div>
              <div className={styles.bText}>Enhanced Security</div>
            </li>
          </ul>
        </div>
      </div>

      {/* Protokollo section */}
      <div className={styles.protokollo}>
        <div className={styles.heading}>Protokollo</div>
        <div className={styles.glowCircle}></div>
        <div className={styles.pImg}>
          <Image src={phonesImg} alt={"phones"} />
        </div>

        <div className={styles.pCards}>
          <div className={styles.pCard}>
            <div className={styles.pImg}>
              <Image src={locationImg} alt="icon" />
            </div>
            <div className={styles.pText}>Proof of location</div>
          </div>
          <div className={styles.pCard}>
            <div className={styles.pImg}>
              <Image src={proofDocIcon} alt="icon" />
            </div>
            <div className={styles.pText}>Proof of activity</div>
          </div>
          <div className={styles.pCard}>
            <div className={styles.pImg}>
              <Image src={authorityProof} alt="icon" />
            </div>
            <div className={styles.pText}>Proof of authority</div>
          </div>
        </div>
      </div>

      {/* platform picture */}
      {/* <div className={styles.platformPic}>

      </div> */}

      {/* 0 knowledge proof section */}
      <div className={styles.kp}>
        {/* <div className={styles.heading}>Zero knowledge Proof</div> */}
        <div className={styles.kpImg}>
            <Image src={zkp} alt="knowledge proof" />
          </div>
        {/* <div className={styles.kpText}>
          ZKP is essentially about proving that:
        </div> */}
        <div className={styles.kpPoints}>
          <ul className={styles.kpList}>
            {kpList?.map((e, i) => (
              <li key={i} className={styles.kpItem}>
                <div className={styles.kpItemStyle}></div>
                <div className={styles.kpText}>{e}</div>
              </li>
            ))}
          </ul>
          {/* <div className={styles.kpImg}>
            <Image src={zkp} alt="knowledge proof" />
          </div> */}
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image src={rightIcon} alt="right icon" />
            </div>
            <div className={styles.cardHeading}>Complete</div>
            <div className={styles.cardText}>
              Conclusive that the knowledge obtained is accurate.
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image src={soundIcon} alt="icon" />
            </div>
            <div className={styles.cardHeading}>Sound</div>
            <div className={styles.cardText}>Prove that the proof is true.</div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardImg}>
              <Image src={zeroKpIcon} alt="icon" />
            </div>
            <div className={styles.cardHeading}>Zero knowledge proof</div>
            <div className={styles.cardText}>
              Without divulging any additional information in the process.
            </div>
          </div>
        </div>
      </div>

      {/* Hardware section */}
      <div className={styles.hardware}>
        <div className={styles.heading}>A More Common Example</div>
        <div className={styles.hwSummary}>
          Having a private network across your organization in different
          locations, enables cross-communication between devices, allowing for
          identification of members, vehicles and objects across the
          organization, location irrespective. This reduces the no. of times
          members, vehicles and objects need to be registered on the network -
          only once. If they are registered at one location, seamless movement
          and identification across the organization, with any restrictions on
          access would be stored and enabled, across different locations.
        </div>
      </div>
      {/* no content */}
      {/* Software section */}
      {/* <div className={styles.software}>
        <div className={styles.heading}>Software</div>
      </div> */}

      {/* case study section */}
      {/* no content */}
      {/* <div className={styles.cs}>
        <div className={styles.csItem}>
          <div className={styles.csText}>
            <div className={styles.csHeading}>Case study 1</div>
            <div className={styles.csSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ac suspendisse etiam sit lacus. Curabitur purus
              senectus sed nisl. Donec amet maecenas imperdiet id duis
              id mi etiam et.
            </div>
          </div>
          <div className={styles.csImg}>
            <Image
              src={cs1Img}
              alt="case study"
            />
          </div>
        </div>
        <div className={styles.csItem}>
          <div className={`${styles.csText} ${styles.order1}`}>
            <div className={styles.csHeading}>Case study 2</div>
            <div className={styles.csSummary}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ac suspendisse etiam sit lacus. Curabitur purus
              senectus sed nisl. Donec amet maecenas imperdiet id duis
              id mi etiam et.
            </div>
          </div>
          <div className={styles.csImg}>
            <Image
              src={cs1Img}
              alt="case study"
            />
          </div>
        </div>

      </div> */}
    </div>
  );
};

export default Blockchain;

export const getStaticProps = () => {
  return {
    props: {
      kpList: [
        "You know something without divulging information about how you know it or learnt it / You know that some data is correct without revealing the data",
        "You know some information without revealing the information itself.",
        "You have something without sharing how much of something you have.",
        "You meet a specific criteria without sharing private information in order to do the same.",
      ],
    },
  };
};
