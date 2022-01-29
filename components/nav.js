import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Overlay from './overlay';
import styles from '../styles/Nav.module.scss';

export const links = {
  'projects': 'Projects',
  'resume': 'Resume',
  'about': 'About me',
  'contact': 'Contact me',
};

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { asPath } = useRouter();

  const linksJSX = Object.keys(links).map(key => {
    const path = `/${key}`;

    return (
      <Link href={path} key={key}>
        <a className={asPath === path ? styles.active : ''}>{links[key]}</a>
      </Link>
    )
  });

  return (
    <div className={styles.nav}>
      <img src="/logo.png" alt="akberli mehin logo" />

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuButton}>
        <img src="/menu.png" alt="menu logo" />
      </button>

      <div className={`${styles.links} ${isMenuOpen ? styles.menu : ''}`}>
        { isMenuOpen
          ? <Overlay closeOverlay={() => setIsMenuOpen(false)}>
            {linksJSX}
          </Overlay>
          : linksJSX
        }
        
      </div>
    </div>
  )
};

export default Nav;
