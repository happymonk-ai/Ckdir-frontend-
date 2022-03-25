import Header from "../../../components/Header";
import styles from "../../../styles/AutonomousIdentities.module.scss";
import gaeStyles from "../../../styles/GreenAndEconomy.module.scss";
import landingImg from "../../../public/social-footprint-main-banner-min.png";
import Image from "next/image";
import CaseStudySection from "../../../components/CaseStudySection";
import ConnectNetworkSection from "../../../components/ConnectNetowrkSection";
import AlternateSection from "../../../components/AlternateSection";
import fieldImg from "../../../public/countryside-field-sunny-day-countryside.png";
import derekImg from "../../../public/derek-lee.png";
import digitalIdentityImg from "../../../public/senior-woman-using-her-phone-park.png";
import greenEarthImg from "../../../public/freen-earth.png";
import raysImg from "../../../public/bg-colorfull-rays.png";

const GreenAndEconomy = () => {
  return (
    <div>
      <div className={`${styles.landing} ${gaeStyles.landing}`}>
        <Header />
        {/* <div className={styles.glowCircle}></div> */}
        <div className={`${styles.container} ${gaeStyles.textContainer}`}>
          <div className={`${styles.textContainer} ${gaeStyles.mainText}`}>
            <div className={`${styles.landingText} ${gaeStyles.landingText}`}>
              Social Footprint
            </div>
            <div className={`${styles.para} ${gaeStyles.para}`}>
              Reduce carbon footprint of your organisation.
            </div>
          </div>
          {/* <div className={styles.img}> */}
          {/* <Image
                            src={landingImg}
                            alt={'software in devices'}
                        /> */}
          {/* </div> */}
        </div>
      </div>

      <div className={styles.alterList}>
        <div className={styles.list1}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={
              "Agricultural Insurance & Automation"
            }
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Agricultural insurance schemes are traditionally a well-recognized tool to manage weather related risks. Here, farmers pay an insurance premium before the cropping cycle begins and receive an insurance payout whenever they experience a loss on their farm. Thus, the insurer bears all the insured risk and farmers are able to manage their financial exposure to weather extremes, i.e., financial losses caused by weather extremes. In addition, in case of weather threats that systemically affect all the insured farmers, the insurer can further hedge the systemic part of the risk with a reinsurance company.
                </div>
              </div>
            }
            image={<Image src={derekImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list2}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Food Supply Chain"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                The blockchain technology can track the provenance of food and thus helps create trustworthy food supply chains and build trust between producers and consumers. As a trusted way of storing data, it facilitates the use of data-driven technologies to make farming smarter. In addition, jointly used with smart contracts, it allows timely payments between stakeholders that can be triggered by data changes appearing in the blockchain 
                </div>
              </div>
            }
            image={<Image src={fieldImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            // isImageLast={true}
            heading={"Smart Agriculture"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                Smart agriculture is featured by the utilization of ICT, internet of things (IoT), and various modern data collection and analysis technologies including unmanned aerial vehicles (UAV), sensors and machine learning. A key issue of establishing smart agriculture is developing a comprehensive security system that facilitates the use and management of data. Traditional ways manage data in a centralized fashion and are prone to inaccurate data, data distortion and misuse as well as cyber-attack.
                </div>
              </div>
            }
            image={<Image src={digitalIdentityImg} alt={"image"} />}
          />
        </div>
        <div className={styles.list3}>
          {/* <div className={styles.glow}></div> */}
          <AlternateSection
            isImageLast={true}
            heading={"Ecological Safety"}
            text={
              <div className={styles.container}>
                <div className={styles.label}>
                blockchain technology helps establish a trust relationship with consumers and build up the reputation of their products, by transparently providing individual product information in the blockchain. Enterprises can better achieve the value of their products and thus increase their competitiveness. This would make it difficult for suppliers of fraud and low-quality products to stay in markets and force all suppliers to improve the quality of products in the whole agricultural and food sectors. From the consumers’ perspective, the blockchain makes true and reliable information about how food is produced and transacted available. It helps address consumers’ concern about the safety, quality and environmental friendliness of food
                </div>
              </div>
            }
            image={<Image src={greenEarthImg} alt={"image"} />}
          />
        </div>
      </div>

      {/* <CaseStudySection /> */}
      <ConnectNetworkSection
        img={raysImg.src}
        heading={"Have a thought on how, we can help you improve your organization?"}
        text={
          "Leverage industry leading expertise and find a shorter path to innovation Contact our representatives and get started right away."
        }
        url={"/register"}
        btnText={"Get Invited"}
        isActive={true}
      />
    </div>
  );
};

export default GreenAndEconomy;
