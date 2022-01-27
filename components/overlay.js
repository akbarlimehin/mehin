import styles from '../styles/Overlay.module.scss';

const Overlay = ({ children, closeOverlay }) => (
  <div className={styles.overlay}>
    <button
      onClick={closeOverlay}
      className={styles.close}
    >
      <img src="/close.png" />
    </button>

    { children }
  </div>
)

export default Overlay;
