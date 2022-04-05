import React, { useEffect } from "react";
import Header from "../../components/Header";
import LongCard from "../../components/LongCard";
import styles from "../../styles/Career.module.scss";
import Head from "next/head";
import { useQuery } from "urql";

const jobQuery = `
  query {
    jobDeescriptions{
      id,
      JobTitle,
      published_at,
      Experience,
      
    }
}
`;

const Career = () => {
  const [result, reexecuteQuery] = useQuery({
    query: jobQuery,
  });

  const { data, fetching, error } = result;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Head>
        <title>Careers - Happymonk</title>
        <meta property="og:title" content="Careers at Happymonk" key="title" />
      </Head>
      <div>
        <div className={styles.landingContainer}>
          <Header />
          <div className={styles.landingPage}>
            <h2 className={styles.heading1}>Jobs at Happymonk.AI</h2>
            <p className={styles.landingText}>
              Like building revolutionary products? Do your fingers type faster
              than your brains? Then, This is the right place for you.
            </p>
          </div>
        </div>

        {/* Roles */}
        <div className={styles.roles}>
          <h2 className={styles.heading1}>Open Roles</h2>
          {data && (
            // openRoles.map((e, i) =>
            <ul className={styles.roleList}>
              {/* <li className={styles.boldText}>{e.field}</li> */}
              {data?.jobDeescriptions?.map((role, ri) => (
                <React.Fragment key={ri}>
                  <li className={styles.roleItem}>
                    <LongCard url={`/careers/${role.id}`}>
                      <h4 className={styles.boldText}>{role.JobTitle}</h4>
                      <h5 className={styles.grayText}>{role.Experience}</h5>
                    </LongCard>
                  </li>
                </React.Fragment>
              ))}
            </ul>
            // )
          )}
        </div>
      </div>
    </>
  );
};

export default Career;
