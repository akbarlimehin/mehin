import Head from 'next/head';
import Page from '../components/page';
import Title from '../components/title'
import styles from '../styles/About.module.scss';

const About = () => (
  <Page>
    <Head>
      <title>About Me</title>
      <meta name="title" content="About me" />
    </Head>

    <Title>about me</Title>
    
    <div className={styles.about}>
      <img src="/about.jpg" />

      <div>
        <p>
          My name is Mehin Akbarli, and I am a multidisciplinary interior designer based in the United States. Born and raised in Baku, Azerbaijan, I was surrounded by a family passionate about architecture and interior design, which inspired me to study architecture at the Azerbaijan Architecture and Construction University.
        </p>

        <p>
        While I was challenging myself in various branches of architecture as a student, I found myself fulfilled about being involved in the interior design aspects of each project. My plans for a career path had been solidified when I decided to pursue an interior design internship in Dubai, UAE. Shortly after graduation, I started to work as an interior designer for one of the leading developers of international standard commercial and residential properties. With a whole team, we delivered an array of prestigious projects in prime locations. In 2018, I moved on from my career in Azerbaijan and pursued a master’s degree in interior design at the University of Florida.
        </p>

        <p>
          I feel fortunate that I have been able to travel and learn more about Middle Eastern, European, and American design culture. The challenge of integrating traditional culture and technique into design fascinates me and inspires my works. I center my designs around the tension between rich finishes and repetitive forms to create spaces that catch an eye and provoke emotions.
        </p>
      </div>
    </div>
  </Page>
)

export default About;