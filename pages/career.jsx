import React from "react";
import Header from "../components/Header"
import LongCard from "../components/LongCard";
import styles from "../styles/Career.module.scss";

const career = ({ openRoles }) => {
    return (
        <div>
            <div className={styles.landingContainer}>
                <Header />
                <div className={styles.landingPage}>
                    <div className={styles.heading1}>
                        Start your dream job by joining our team
                    </div>
                    <p className={styles.landingText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ac suspendisse etiam sit lacus.
                    </p>

                </div>
            </div>

            {/* Roles */}
            <div className={styles.roles}>
                <div className={styles.heading1}>Open Roles</div>
                {
                    openRoles.map((e, i) => (
                        <ul className={styles.roleList} key={i}>
                            <li className={styles.boldText}>
                                {e.field}
                            </li>
                            {
                                e.roles.map((role, ri) => (
                                    <React.Fragment key={`${i}-${ri}`}>

                                        <li className={styles.roleItem}>
                                            <LongCard>
                                                <div className={styles.boldText}>
                                                    {role.name}
                                                </div>
                                                <div className={styles.grayText}>
                                                    {role.exp}
                                                </div>
                                            </LongCard>
                                        </li>
                                    </React.Fragment>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default career;

export const getStaticProps = () => {
    return {
        props: {
            openRoles: [
                {
                    field: "Technology/ IT",
                    roles: [
                        {
                            name: "Back end developer",
                            exp: "0-1 year/ Freshers",
                        },
                        {
                            name: "Front end developer",
                            exp: "0-1 year/ Freshers",
                        },
                        {
                            name: "UI UX Designer",
                            exp: "0-1 year/ Freshers",
                        }
                    ]
                },
                {
                    field: "Data Science",
                    roles: [
                        {
                            name: "Data science intern",
                            exp: "0-1 year/ Freshers",
                        },
                        {
                            name: "Junior Data scientist",
                            exp: "0-1 year/ Freshers",
                        },
                        {
                            name: "Senior Data scientist",
                            exp: "5+ years",
                        }
                    ]
                }
            ]
        }
    }
}