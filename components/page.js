import Footer from "./footer";
import Nav from "./nav";
import styles from '../styles/Page.module.scss';

const Page = ({ children }) => (
  <div className={styles.page}>
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
