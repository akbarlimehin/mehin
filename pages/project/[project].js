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
  const [galleryImageIndex, setGalleryImageIndex] = useState(undefined);
  const { title, displayTitle, metaTitle, description: { text, points } } = projectInfo;

  const switchToNextImage = () => {
    const nextIndex = galleryImageIndex + 1;

    if (nextIndex >= pictures.length) {
      setGalleryImageIndex(0);
    } else {
      setGalleryImageIndex(nextIndex);
    }
  };

  const switchToPrevImage = () => {
    const prevIndex = galleryImageIndex - 1;

    if (prevIndex < 0) {
      setGalleryImageIndex(pictures.length - 1);
    } else {
      setGalleryImageIndex(prevIndex);
    }
  }

  return (
    <Page>
      <Head>
        <title>{metaTitle || title}</title>
      </Head>

      <Title removeMarginBottom={true}>{displayTitle}</Title>

      <div className={styles.project}>
        { galleryImageIndex !== undefined && 
          <div className={styles.gallery}>
            <Overlay closeOverlay={() => setGalleryImageIndex(undefined)}>
              <div className={styles.overlayWrap}>
                <button
                  className={styles.overlayButton}
                  onClick={switchToPrevImage}
                >
                  <div className={styles.arrow} />
                </button>

                <img src={pictures[galleryImageIndex]} />

                <button
                  className={styles.overlayButton} 
                  onClick={switchToNextImage}
                >
                  <div className={styles.arrow} />
                </button>
              </div>
            </Overlay>
          </div>
        }

        <p className={styles.italic}>Designed by Mehin Akbarli for MB Architects</p>
        <p className={styles.italic}>Photography: MB Architects</p>

        <div className={styles.images}>
          {
            pictures.map((picture, index) => (
              <img
                src={picture}
                onClick={() => setGalleryImageIndex(index)}
                key={picture}
              />
            ))
          }
        </div>
      </div>

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
            <p 
              key={`${index}${paragraph.substring(0, 4)}`}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            />
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

    const files = picturesFiles.filter(file => !/cover/.test(file));

    const pictures = new Array(files.length)
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