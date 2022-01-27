import styles from '../styles/Title.module.scss';

const Title = ({ children, removeMarginBottom }) => {
  const spaceIndex = children.indexOf(' ');
  const croppedTitle = spaceIndex > -1 ? children.substring(0, children.indexOf(' ')) : children;

  return (
    <div className={styles.container}>
      <h1 className={removeMarginBottom ? styles.noMarginBottom : ''}>{croppedTitle}</h1>
      <h2>{children}</h2>
    </div>
  )
};

export default Title;
