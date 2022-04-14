import Head from "next/head";
import Page from "../components/page";
import Title from "../components/title";
import styles from '../styles/Resume.module.scss';

const Resume = () => (
  <Page>
    <Head>
      <title>Resume</title>
      <meta name="title" content="Resume" />
    </Head>

    <Title>resume</Title>

    <div className={styles.resume}>
      <img src="/resume.jpg" />
    </div>
  </Page>
);

export default Resume;
