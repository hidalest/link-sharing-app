import React from 'react';

import data from '../../data.json';
import Card from '../../components/UI/Card/Card';
import Button from '../../components/UI/Button/Button';
import SocialLink from '../../components/SocialLink/SocialLink';
import { useAppSelector } from '../../hooks/hooks';
import { PreviewPageProps } from '../../interfaces';

import styles from './Preview.module.scss';

function Preview(props: PreviewPageProps) {
  const userLinks = useAppSelector((state) => state.links.links);
  const arrowLink = data.homeLinksData.phoneMockupProps.arrowIconLinks;
  const { navbarProps } = props.previewPageProps;
  const { goBackBtn, shareLinkBtn } = navbarProps;
  return (
    <section className={styles.preview}>
      <div className={styles['preview--navigation']}>
        <p>pre</p>
      </div>
      <nav className={styles['preview--navigation2']}>
        <Card priority='white' className={styles['preview--navigation_bar']}>
          <Button priority='secondary'>{goBackBtn}</Button>
          <Button priority='primary'>{shareLinkBtn}</Button>
        </Card>
      </nav>

      <Card priority='white' className={styles.previewLinksContainer}>
        <SocialLink userLinks={userLinks} arrowIconLinks={arrowLink} />
      </Card>
    </section>
  );
}

export default Preview;
