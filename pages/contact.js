import Page from '../components/page';
import Title from '../components/title';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  return (
    <Page>
      <Title>Contact me</Title>

      <div className={styles.container}>
        <div className={styles.links}>
          <a>+1 (352) 226 5343</a>
          <a href="mailto:akberli.mehin@gmail.com">akberli.mehin@gmail.com</a>
        </div>

        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <input type="text" name="firstName" />
            <p className={styles.placeholder}>First Name</p>
          </div>

          <div className={styles.inputContainer}>
            <input type="text" name="lastName" />
            <p className={styles.placeholder}>Last Name</p>
          </div>

          <div className={styles.inputContainer}>
            <input type="email" name="email" />
            <p className={styles.placeholder}>Email</p>
          </div>

          <div className={styles.inputContainer}>
            <textarea name="message" />
            <p className={styles.placeholder}>Message</p>
          </div>

          <input type="submit" />
        </form>
      </div>
    </Page>
  )
}

export default Contact;
