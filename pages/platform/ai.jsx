import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/AI.module.scss";
import cs1Img from "../../public/Rectangle_630.png"
import dataIntegrationImg from "../../public/icons/dataIntegration.svg"
import deepLearningImg from "../../public/icons/deepLearning.svg"
import fogComputingImg from "../../public/icons/fogComputing.svg"
import cardImg1 from "../../public/man-using-tablet.png";
import cardImg2 from "../../public/hands-digital-universe-background.png"
import iphoneImg from "../../public/iphone11.png"
import fullPhoneImg from "../../public/phone-full-height.png";
import mapImg from "../../public/map.png";
import decentralisedImg from "../../public/icons/decentralised-storeage.svg"
import externalOrgImg from "../../public/icons/external-org.png"
import serversImg from "../../public/icons/connected-servers.svg";
import aiAnalyticsImg from "../../public/icons/AI-analytics.svg"
import workingChartImg from "../../public/working-chart.png";

const platFormCardData = [

    {
        imageUrl: cardImg1,
        heading: "Edge IOT",
        text: "Autonomous Prediction & Actions on the edge. Get critical insights, and aid your team with critical information from sensors, real-time data of your organization, being even offline.",
    },
    {
        imageUrl: cardImg2,
        heading: "Sensor Fusion",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac suspendisse etiam sit lacus. Curabitur purus senectus sed nisl. Donec amet maecenas imperdiet id duis id mi etiam et.",
    },
];
const AI = () => {
    return (
        <div>
            {/* landing section */}
            <div className={`${styles.landing} ${styles.blur}`}>
                {/* <div className={styles.darkLayer}></div> */}
                <Header />
                <div className={styles.textContainer}>
                    <span className={styles.landingText}>
                        Bringing a fresh perspective to _____ with groundbreaking technology!
                    </span>
                </div>
            </div>

            {/* chart section */}
            <div className={styles.chart}>

                <div className={styles.chartImg}>
                    <Image
                        src={workingChartImg}
                        alt="chart"
                    />

                </div>
            </div>


            {/* Salient features section */}

            <div className={styles.sf}>
                <div className={styles.heading}>Salient features</div>

                <div className={styles.glassCard}>
                    {/* glowing cards */}
                    <div className={styles.circle1}></div>
                    <div className={styles.circle2}></div>
                    <div className={styles.circle3}></div>
                    <div className={styles.circle4}></div>

                    <ul className={styles.sfList}>

                        <li className={styles.sfItem}>
                            <div className={styles.featureIcon}>
                                <Image src={fogComputingImg} alt="icon" />
                            </div>
                            <div className={styles.sfText}>
                                Fog computing
                            </div>
                        </li>
                        <li className={styles.sfItem}>
                            <div className={styles.featureIcon}>
                                <Image src={deepLearningImg} alt="icon" />
                            </div>
                            <div className={styles.sfText}>
                                Deep learning
                            </div>
                        </li>
                        <li className={styles.sfItem}>
                            <div className={styles.featureIcon}>
                                <Image src={dataIntegrationImg} alt="icon" />
                            </div>
                            <div className={styles.sfText}>
                                Data Integration
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
                            <Image
                                src={card.imageUrl}
                                alt="card image"
                            />
                        </div>
                        <div className={styles.platformTextContainer}>
                            <div className={styles.platformCardHading}>
                                {card.heading}
                            </div>
                            <div className={styles.platformCardText}>
                                {card.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* software section */}
            <div className={styles.software}>
                <div className={styles.heading}>Software</div>
                <div className={styles.sCards}>
                    <div className={styles.sCard}>
                        <div className={styles.sCardImg}>
                            <Image
                                src={iphoneImg}
                                alt="device"
                            />
                        </div>
                        <div className={styles.sCardText}>
                            <div className={styles.sCardHeading}>Lorem ipsum dolor sit amet</div>
                            <div className={styles.sCardSummary}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ac suspendisse etiam sit lacus. Curabitur purus senectus
                                sed nisl. Donec amet maecenas imperdiet id duis id mi etiam et.
                                Ut non cursus porttitor cursus tortor. Ut scelerisque odio
                                tellus id varius turpis vestibulum, nulla. Fames ac id sollicitudin
                                euismod pretium ullamcorper tempus.
                            </div>
                        </div>
                    </div>

                    <div className={styles.sCard}>
                        <div className={styles.sCardImg}>
                            <Image
                                src={mapImg}
                                alt="device"
                            />
                        </div>
                        <div className={`${styles.sCardText} ${styles.alignEnd}`}>
                            <div className={styles.sCardHeading}>Lorem ipsum dolor sit amet</div>
                            <div className={styles.sCardSummary}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ac suspendisse etiam sit lacus. Curabitur purus senectus
                                sed nisl. Donec amet maecenas imperdiet id duis id mi etiam et.
                                Ut non cursus porttitor cursus tortor. Ut scelerisque odio
                                tellus id varius turpis vestibulum, nulla. Fames ac id sollicitudin
                                euismod pretium ullamcorper tempus.
                            </div>
                        </div>
                    </div>

                    <div className={styles.sCard}>
                        <div className={styles.sCardImg}>
                            <Image
                                src={fullPhoneImg}
                                alt="device"
                            />
                        </div>
                        <div className={styles.sCardText}>
                            <div className={styles.sCardHeading}>Lorem ipsum dolor sit amet</div>
                            <div className={styles.sCardSummary}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Ac suspendisse etiam sit lacus. Curabitur purus senectus
                                sed nisl. Donec amet maecenas imperdiet id duis id mi etiam et.
                                Ut non cursus porttitor cursus tortor. Ut scelerisque odio
                                tellus id varius turpis vestibulum, nulla. Fames ac id sollicitudin
                                euismod pretium ullamcorper tempus.
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* case study section */}
            <div className={styles.cs}>
                <div className={styles.csItem}>
                    <div className={styles.csText}>
                        <div className={styles.csHeading}>Case study 1</div>
                        <div className={styles.csSummary}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Ac suspendisse etiam sit lacus. Curabitur purus senectus
                            sed nisl. Donec amet maecenas imperdiet id duis id mi
                            etiam et. Ut non cursus porttitor cursus tortor.
                            Ut scelerisque odio tellus id varius turpis vestibulum,
                            nulla. Fames ac id sollicitudin euismod pretium ullamcorper
                            tempus. Pellentesque facilisi at blandit sit adipiscing
                            varius facilisi habitant malesuada. Scelerisque morbi
                            tristique platea tortor magna. Aliquet in tortor enim quis.
                            Sagittis, mauris, felis et nisi pharetra, enim, platea mollis.
                            Urna consectetur diam id accumsan tristique faucibus maecenas.
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
                            Ac suspendisse etiam sit lacus. Curabitur purus senectus
                            sed nisl. Donec amet maecenas imperdiet id duis id mi
                            etiam et. Ut non cursus porttitor cursus tortor. Ut
                            scelerisque odio tellus id varius turpis vestibulum, nulla. Fames ac id sollicitudin euismod pretium ullamcorper tempus. Pellentesque facilisi at blandit sit adipiscing varius facilisi habitant malesuada. Scelerisque morbi tristique platea tortor magna. Aliquet in tortor enim quis. Sagittis, mauris, felis et nisi pharetra, enim, platea mollis. Urna consectetur diam id accumsan tristique faucibus maecenas.
                        </div>
                    </div>
                    <div className={styles.csImg}>
                        <Image
                            src={cs1Img}
                            alt="case study"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AI;


// export const getStaticProps = async () => {
//     const platFormCardData = [

//         {
//             imageUrl: cardImg1,
//             heading: "Public Network",
//             text: "The benefits of Monk Network/Dhar doesn’t end there. Enjoy the privilege of having a public network, where all data is verifiable with zero knowledge proofs.",
//         },
//         {
//             imageUrl: cardImg1,
//             heading: "Zero Fee",
//             text: "The best part? Monk Network is a Zero Fee network!",
//         },
//     ];

//     return {
//         props: {
//             platFormCardData,
//         },
//     };
// };
