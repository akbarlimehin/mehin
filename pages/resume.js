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

      <a
        href="https://issuu.com/mehin5/docs/mehin_akbarli_portfolio"
        rel="noreferrer"
        target="_blank"
      >
        See more
      </a>
    </div>
  </Page>
);

export default Resume;
