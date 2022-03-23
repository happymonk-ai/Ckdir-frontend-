import styles from "../styles/componentsStyle/ConnectNetworkSection.module.scss"
import Button from "./Button";
// import img from "../public/bg-colorfull-rays.png"

const ConnectNetworkSection = ({ heading, text, url, btnText, isActive, img }) => {
    return (
        <div 
        className={styles.testNW}
        style={{
            backgroundImage: `url(${img})`
        }}
        >
            <div className={styles.testNWheading}>
                {heading}
            </div>
            {text && (
                <div className={styles.text}>
                    {text}
                </div>
            )}
            {/* <div className={styles.contactBtn}>
                <Button title={btnText ? btnText : "Contact"} url={url} isActive={isActive} />
            </div> */}
        </div>
    )
}

export default ConnectNetworkSection;
