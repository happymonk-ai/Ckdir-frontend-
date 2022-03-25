import Image from "next/image";
import styles from "../styles/Register.module.scss";
import logo from "../public/registerLogo.png";
import Input from "../components/Input";
import mailIcon from "../public/icons/mail2.png";
import phoneIcon from "../public/icons/phone2.png";
import userIcon from "../public/icons/user2.png";
import idIcon from "../public/icons/id-icon.svg";
import FilledBtn from "../components/FilledBtn";
import SelectBox from "../components/SelectBox";
import iMacImg from "../public/Apple-iMac-Retina.png";
import iphoneFullImg from "../public/iphone-full.png";
import CarouselNavigation from "../components/CarouselNavigation";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { useState } from "react";
import SelectField from "../components/SelectField";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import outlineFlag from "../public/icons/flag-outline.png";

const SelfRegistrationForm = () => {
  const [selfRegForm, setSelfRegForm] = useState(0);

  return selfRegForm === 0 ? (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.title}>Registration Form</div>
            <div className={styles.selectBox}>
              <SelectBox />
            </div>
          </div>
          <div className={styles.label}>Personal information</div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Name"
                icon={<Image src={userIcon} alt="user" />}
              />
            </div>

            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Phone number"
                icon={<Image src={phoneIcon} alt="phone" />}
              />
            </div>
            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Email ID"
                icon={<Image src={mailIcon} alt="mail" />}
              />
            </div>
            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Government ID proof"
                icon={<Image src={idIcon} alt="id" />}
              />
            </div>
            {/* <div className={styles.radioField}>
              <div className={styles.radioOptions}>
                <div className={styles.radioIcon}>
                  <CircleOutlinedIcon />
                </div>
                <div className={styles.fieldLabelText}>Aadhar Card</div>
              </div>
              <div className={styles.radioOptions}>
                <div className={styles.radioIcon}>
                  <CircleOutlinedIcon />
                </div>
                <div className={styles.fieldLabelText}>PAN Card</div>
              </div>
              <div className={styles.radioOptions}>
                <div className={styles.radioIcon}>
                  <CircleOutlinedIcon />
                </div>
                <div className={styles.fieldLabelText}>Driving license</div>
              </div>
            </div> */}

            {/* <div className={styles.btn}>
              <div>
                <CarouselNavigation
                  counts={2}
                  defaultView={0}
                  getValue={() => {}}
                />
              </div>
              
            </div> */}
            <div onClick={() => setSelfRegForm(1)}>
                <FilledBtn title="Next" url="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        {/* <div className={styles.text}>
          <div className={styles.heading}>Flagship Features</div>
          <div className={styles.para}>
            Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi.
          </div>
        </div> */}
        <div className={styles.img}>
          <Image src={iMacImg} alt={"desktop"} />
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.title}>Registration Form</div>
            <div className={styles.selectBox}>
              <SelectBox />
            </div>
          </div>
          <div className={styles.label}>Personal information</div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <div className={styles.outer}>
                <div
                  className={styles.countryDrop}
                  // onClick={() => setDrop(!drop)}
                >
                  <div className={styles.cLeft}>
                    <span>
                      <Image src={outlineFlag} alt="icon" />
                    </span>
                    <span>Choose country</span>
                  </div>
                  <div className={styles.cRight}>
                    <KeyboardArrowDownOutlinedIcon
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Address"
                icon={<Image src={phoneIcon} alt="phone" />}
              />
            </div>
            <div className={styles.field}>
              <div className={styles.outer}>
                <div
                  className={styles.countryDrop}
                  // onClick={() => setDrop(!drop)}
                >
                  <div className={styles.cLeft}>
                    <span>
                      <Image src={outlineFlag} alt="icon" />
                    </span>
                    <span>Reason for installing Chokdir</span>
                  </div>
                  <div className={styles.cRight}>
                    <KeyboardArrowDownOutlinedIcon
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.btn}>
              <div>
                <CarouselNavigation
                  counts={2}
                  defaultView={1}
                  getValue={() => {}}
                />
              </div>

              <div onClick={() => setSelfRegForm(1)}>
                <FilledBtn title="Get invitation" url="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.info}  ${styles.selfInvite}`}>
        <div className={styles.phoneImg}>
          <Image src={iphoneFullImg} alt={"desktop"} />
        </div>
        {/* <div className={styles.text}>
          <div className={styles.heading}>Flagship Features</div>
          <div className={styles.para}>
           <li>
           Amet, consectetur adipiscing elit, sed do eiusmod tempor.
           </li>
           <li>
           Amet, consectetur adipiscing elit, sed do eiusmod tempor.
           </li>
           <li>
           Amet, consectetur adipiscing elit, sed do eiusmod tempor.
           </li>
          </div>
        </div> */}
      </div>
    </div>
  );
};

const Register = () => {
  const [formCount, setFormCount] = useState(0);
  const [regType, setRegType] = useState("self");

  return regType === "self" ? (
    <SelfRegistrationForm />
  ) : (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.header}>
          <Image src={logo} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.formHeader}>
            <div className={styles.title}>Registration Form</div>
            <div className={styles.selectBox}>
              <SelectBox />
            </div>
          </div>
          <div className={styles.label}>Personal information</div>
          <div className={styles.fields}>
            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Name"
                icon={<Image src={userIcon} alt="user" />}
              />
            </div>

            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Phone number"
                icon={<Image src={phoneIcon} alt="phone" />}
              />
            </div>
            <div className={styles.field}>
              <Input
                type={"text"}
                getValue={(value) => {}}
                placeholder="Email ID"
                icon={<Image src={mailIcon} alt="mail" />}
              />
            </div>

            <div className={styles.btn}>
              {/* <div>
                <CarouselNavigation
                  counts={3}
                  defaultView={0}
                  getValue={() => {}}
                />
              </div> */}
              <FilledBtn title="Next" url="/" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.text}>
          <div className={styles.heading}>Flagship Features</div>
          <div className={styles.para}>
            Real-Time Synchronization
          </div>
        </div>
        <div className={styles.img}>
          <Image src={iMacImg} alt={"desktop"} />
        </div>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
