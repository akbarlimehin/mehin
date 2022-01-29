import fs from 'fs/promises';
import Title from "../../components/title";
import Page from "../../components/page";
import projects from "../../constants/projects";
import styles from '../../styles/Project.module.scss';
import { useState } from 'react';
import Overlay from '../../components/overlay';
import path from 'path';
import Head from 'next/head';

const Project = ({ projectInfo, pictures }) => {
  const [galleryImage, openGalleryImage] = useState(undefined);
  const { title, displayTitle, description: { text, points } } = projectInfo;

  return (
    <Page>
      <Head>
        <title>{title}</title>
      </Head>

      <Title removeMarginBottom={true}>{displayTitle}</Title>

      <div className={styles.project}>
        { galleryImage && 
          <div className={styles.gallery}>
            <Overlay closeOverlay={() => openGalleryImage(undefined)}>
              <img src={galleryImage} />
            </Overlay>
          </div>
        }

        <p className={styles.italic}>Designed by Mehin Akbarli for MB Architects</p>
        <p className={styles.italic}>Photography: MB Architects</p>

        <div className={styles.images}>
          {
            pictures.map(picture => (
              <img
                src={picture}
                onClick={() => openGalleryImage(picture)}
                key={picture}
              />
            ))
          }
        </div>
      </div>

      {/* <Title removeMarginBottom={true}>Description</Title> */}

      <div className={styles.description}>
        <div className={styles.points}>
          {
            Object.keys(points).map(key => (
              <p className={styles.point} key={key}>
                <span className={styles.bold}>{key}</span>
                : {points[key]}
              </p>
            ))
          }
        </div>

        {
          text.map((paragraph, index) => (
            <p key={`${index}${paragraph.substring(0, 4)}`}>
              {paragraph}
            </p>
          ))
        }
      </div>
    </Page>
  )
};

export async function getServerSideProps(context) {
  const projectInfo = projects[context.params.project];

  if (!projectInfo) {
    return {
      redirect: {
        destination: '../projects',
        permanent: false,
      },
    }
  } else {
    const { imagesDir } = projectInfo;
    const picturesFiles = await fs.readdir(path.join(
      process.cwd(),
      `public/projects/${imagesDir}`
    ));

    const pictures = new Array(picturesFiles.length)
      .fill(null)
      .map((_item, index) => `/projects/${imagesDir}/${index + 1}.jpg`);

    return {
      props: {
        projectInfo,
        pictures,
      }
    }
  }
}

export default Project;