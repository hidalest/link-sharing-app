import React from 'react';

import styles from './Preview.module.scss';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import SocialLink from '../../components/SocialLink/SocialLink';
import { useAppSelector } from '../../hooks/hooks';

import data from '../../data.json';

function Preview() {
  const userLinks = useAppSelector((state) => state.links.links);
  const arrowLink = data.homeLinksData.phoneMockupProps.arrowIconLinks;
  return (
    <section className={styles.preview}>
      <div className={styles['preview--navigation']}>
        <p>pre</p>
      </div>
      <nav className={styles['preview--navigation2']}>
        <Card priority='white' className={styles['preview--navigation_bar']}>
          <Button priority='secondary'>Go Back</Button>
          <Button priority='primary'>Share Link</Button>
        </Card>
      </nav>

      <Card priority='white'>
        <SocialLink userLinks={userLinks} arrowIconLinks={arrowLink} />
      </Card>
    </section>
  );
}

export default Preview;
