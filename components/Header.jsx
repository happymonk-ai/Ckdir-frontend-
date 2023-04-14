import styles from "../styles/componentsStyle/Header.module.scss";
import happyMonkLogo from "../public/happymonk-logo.png";
import { Icons } from "../utils/icons";
import Image from "next/image";
import NavDropDown from "./NavDropDown";
import navImg from "../public/icons/nav-icon.png";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [drop, setDrop] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.loginContainer}>
        <Link href={"/"}>
          <a>
            <div className={styles.logo}>
              <span className={styles.logoImg}>
                <Image src={happyMonkLogo} alt="logo" />
              </span>
            </div>
          </a>
        </Link>
        <div className={styles.navImg} onClick={() => setDrop(!drop)}>
          {drop ? (
            <CloseIcon
              style={{ fontSize: "30px", color: "rgba(255,255,255,0.8)" }}
            />
          ) : (
            <Image src={navImg} alt="navigation" />
          )}
        </div>
      </div>

      {
        <ul className={`${styles.navList} ${drop ? "" : styles.activeList}`}>
          <NavDropDown
            ddList={[
              {
                heading: (
                  <Link href={"/platform/network"}>
                    <a>Network</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/platform/blockchain"}>
                    <a>Blockchain Protocol and ZKP</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/platform/ai"}>
                    <a>Artificial Intelligence</a>
                  </Link>
                ),
                options: [],
              },
            ]}
          >
            <li className={styles.navItem}>
              <span>Platform</span>
              <Icons.ArrowDown />
            </li>
          </NavDropDown>

          <NavDropDown
            ddList={[
              {
                heading: (
                  <Link href={"/product/chokidr-hardware"}>
                    <a>Chokidr Hardware </a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/product/chokidr-software"}>
                    <a>Chokidr Software </a>
                  </Link>
                ),
                options: [
                  <Link href={"/product/chokidr-software/identities"} key={1}>
                    <a>Identities</a>
                  </Link>,
                  <Link
                    href={"/product/chokidr-software/autonomousMachines"}
                    key={1}
                  >
                    <a>Autonomous Machines</a>
                  </Link>,
                  <Link
                    href={
                      "/product/chokidr-software/connecting-people-and-things"
                    }
                    key={1}
                  >
                    <a>Connecting People and Things</a>
                  </Link>,
                  <Link
                    href={"/product/chokidr-software/command-and-control"}
                    key={1}
                  >
                    <a>Command And Control</a>
                  </Link>,
                  <Link href={"/product/chokidr-software/edge-iot"} key={1}>
                    <a>Edge IOT</a>
                  </Link>,
                  <Link
                    href={"/product/chokidr-software/social-footprint"}
                    key={1}
                  >
                    <a>Social Footprint</a>
                  </Link>,
                ],
              },
            ]}
          >
            <li className={styles.navItem}>
              <span>Product</span>
              <Icons.ArrowDown />
            </li>
          </NavDropDown>

          <NavDropDown
            ddList={[
              {
                heading: (
                  <Link href={"/contact"}>
                    <a>Contact</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/contact"}>
                    <a>Hardware Support</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/contact"}>
                    <a>Software Support</a>
                  </Link>
                ),
                options: [],
              },
            ]}
          >
            <li className={styles.navItem}>
              <span>Connect</span>
              <Icons.ArrowDown />
            </li>
          </NavDropDown>

          <NavDropDown
            ddList={[
              {
                heading: (
                  <Link href={"/blog"}>
                    <a>Blog</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/about"}>
                    <a>About Happymonk</a>
                  </Link>
                ),
                options: [],
              },
              {
                heading: (
                  <Link href={"/careers"}>
                    <a>Career</a>
                  </Link>
                ),
                options: [],
              },
            ]}
            right={"0"}
          >
            <li className={styles.navItem}>
              <span>Explore</span>
              <Icons.ArrowDown />
            </li>
          </NavDropDown>
        </ul>
      }
    </div>
  );
};

export default Header;
