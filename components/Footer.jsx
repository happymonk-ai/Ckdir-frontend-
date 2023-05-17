import Image from "next/image";
import logoImg from "../public/icons/smallLogo.svg";
import textLogoImg from "../public/icons/smallTextLogo.svg";
import styles from "../styles/componentsStyle/Footer.module.scss";
// import copyrightImg from "../public/icons/copyright.svg"
import Link from "next/link";
import envelopImg from "../public/icons/envelop.svg";
import phoneImg from "../public/icons/phone.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.footer}>
          <ul>
            <div className={styles.header}>Platform</div>
            <li className={styles.listItem}>
              <Link href={"/platform/network"}>
                <a>Network</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/platform/blockchain"}>
                <a>Blockchain Protocol</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/platform/ai"}>
                <a>AI</a>
              </Link>
            </li>
          </ul>
          <div>
            <ul>
              <div className={styles.header}>Product</div>
              <li className={styles.listItem}>
                <Link href={"/product/chokidr-hardware"}>
                  <a>Hardware</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href={"/product/chokidr-software"}>
                  <a>Software</a>
                </Link>
              </li>
            </ul>
            <ul className={styles.topSpacing}>
              <div className={styles.header}>Explore</div>
              <li className={styles.listItem}>
                <Link href={"/blog"}>
                  <a>Blog</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href={"/careers"}>
                  <a>Careers</a>
                </Link>
              </li>
            </ul>
          </div>

          <ul>
            <div className={styles.header}>About Us</div>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>Investors</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>Company</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>Location</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>News</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>Announcement</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href={"/about"}>
                <a>Partners</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer}>
          <div>
            <ul>
              <div className={styles.header}>Social Media</div>
              <li className={styles.listItem}>
                <Link href={"https://www.linkedin.com/company/10816363/"}>
                  <a>Linkedin</a>
                </Link>
              </li>
              {/* <li className={styles.listItem}> */}
              {/* <Link href={'/product/chokidr-software/identities'}>
                                    <a> */}
              {/* Discord */}
              {/* </a>
                                </Link> */}
              {/* </li> */}
            </ul>
            <ul className={styles.topSpacing}>
              <div className={styles.header}>Support</div>
              <li className={styles.listItem}>
                <Link href={"/contact"}>
                  <a>Hardware Service</a>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href={"/contact"}>
                  <a>Software Service</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <div className={styles.header}>Connect</div>
              <li className={`${styles.listItem} ${styles.connect}`}>
                <span className={styles.contactIcon}>
                  <Image src={envelopImg} alt="email" />
                </span>
                <span>sales@happymonk.co</span>
              </li>

              <li className={`${styles.listItem} ${styles.connect}`}>
                <span className={styles.contactIcon}>
                  <Image src={phoneImg} alt="phone" />
                </span>
                <span>+91 99161 77221</span>
              </li>
            </ul>
            {/* <ul className={styles.topSpacing}>
              <div className={styles.header}>Legal</div>
              <li className={styles.listItem}>
                <Link href={'/product/chokidr-software/identities'}>
                                    <a>
                Terms
                </a>
                                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href={'/product/chokidr-software/identities'}>
                                    <a>
                Policy
                </a>
                                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.footerItem}></div>
        <div className={styles.logoContainer}>
          <div className="logoImg">
            <Image src={logoImg} alt="logo" />
          </div>
          <div className="logoText">
            <Image src={textLogoImg} alt="logo" />
          </div>
        </div>
        <div className={styles.tradeMark}>
          <span className={styles.tradeMarkText}>
            &copy; 2021 Happymonk AI Labs Pvt Ltd.| All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
