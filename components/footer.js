import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { links } from './nav';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.info}>
      <p>Mehin Akbarli</p>
      <p>akberli.mehin@gmail.com</p>
    </div>

    <div className={styles.links}>
      {
        Object.keys(links).map(key => {
          const path = `/${key}`;
      
          return (
            <Link href={path} key={key}>
              <a>{links[key]}</a>
            </Link>
          )
        })
      }
    </div>

    <a
      href="https://www.hollium.com/"
      target="_blank"
      rel="noreferrer"
    >
      Website designed and developed by <span className={styles.underline}>Hollium</span>
    </a>
  </div>
)

export default Footer;
