import Footer from "./footer";
import Nav from "./nav";
import styles from '../styles/Page.module.scss';
import Head from "next/head";

const Page = ({ children }) => (
  <div className={styles.page}>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>

    <div>
      <Nav />

      <div className={styles.container}>
        {children}
      </div>
    </div>

    <Footer></Footer>
  </div>
)

export default Page;
