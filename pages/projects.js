import Head from 'next/head';
import Nav from '../components/nav'
import Page from '../components/page';
import Title from '../components/title'
import projects from '../constants/projects'
import styles from '../styles/Projects.module.scss';

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Projects</title>
      </Head>

      <Title>projects</Title>

      <div className={styles.projects}>
        {
          Object.keys(projects).map((key) => {
            const { 
              thumbnail,
              title,
              location,
              imagesDir,
            } = projects[key];

            return (
              <a href={`/project/${key}`} className={styles.entry} key={title}>
                <img src={`/projects/${imagesDir}/${thumbnail}`}></img>
                <h3>{title}</h3>
                <p>{location}</p>
              </a>
            )
          })
        }
      </div>
    </Page>
  )
}
