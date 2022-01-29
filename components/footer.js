import styles from '../styles/Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div>
      <p>Mehin Akbarli</p>
      <p>akberli.mehin@gmail.com</p>
    </div>

    <a
      href="https://norton-dev.com/"
      target="_blank"
      rel="noreferrer"
    >
      Website designed and developed by <span className={styles.underline}>Norton</span>
    </a>
  </div>
)

export default Footer;
