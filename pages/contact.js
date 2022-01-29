import Head from 'next/head';
import { useState } from 'react';
import Page from '../components/page';
import Title from '../components/title';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(undefined);

  const submit = async () => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: `${firstName} ${lastName}`,
        email,
        message
      })
    });


    if (res.status === 500) {
      const json = await res.json();

      setResponse({
        type: 'error',
        msg: json.msg
      });
    } else {
      setResponse({
        msg: "Your message was sent successfully!"
      });
    }
  }

  return (
    <Page>
      <Head>
        <title>Contact Me</title>
      </Head>

      <Title>Contact me</Title>

      <div className={styles.container}>
        <div className={styles.links}>
          <a>+1 (352) 226 5343</a>
          <a href="mailto:akberli.mehin@gmail.com">akberli.mehin@gmail.com</a>
        </div>

        <form className={styles.form} onSubmit={e => {
          e.preventDefault();
          submit();
        }}>
          <div className={styles.inputContainer}>
            <input type="text" name="firstName" onChange={e => setFirstName(e.target.value)} />
            <p className={styles.placeholder}>First Name</p>
          </div>

          <div className={styles.inputContainer}>
            <input type="text" name="lastName" onChange={e => setLastName(e.target.value)} />
            <p className={styles.placeholder}>Last Name</p>
          </div>

          <div className={styles.inputContainer}>
            <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
            <p className={styles.placeholder}>Email</p>
          </div>

          <div className={styles.inputContainer}>
            <textarea name="message" onChange={e => setMessage(e.target.value)} />
            <p className={styles.placeholder}>Message</p>
          </div>

          { response && 
            <p 
              className={
                `${styles.response} ${response.type === 'error' ? styles.error : ''}`
              }
            >
              {response.msg}
            </p>
          }

          <input type="submit" />
        </form>
      </div>
    </Page>
  )
}

export default Contact;
