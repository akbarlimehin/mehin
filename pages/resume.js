import Head from "next/head";
import Page from "../components/page";
import Title from "../components/title";
import styles from '../styles/Resume.module.scss';

const Resume = () => (
  <Page>
    <Head>
      <title>Resume</title>
    </Head>

    <Title>resume</Title>

    <div className={styles.resume}>
      <img src="/resume.png" />

      <a
        href="https://issuu.com/mehin5/docs/cover"
        rel="noreferrer"
        target="_blank"
      >
        See more
      </a>
    </div>
  </Page>
);

export default Resume;
