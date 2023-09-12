import Card from '../UI/Card/Card';
import styles from './PhoneMockup.module.scss';
import { LinkType } from '../../interfaces';

interface phoneMockupProps {
  userLinks: LinkType[];
  phoneMockupImage: string;
}

export const PhoneMockup = ({
  userLinks,
  phoneMockupImage,
}: phoneMockupProps) => {
  return (
    <Card priority='white' className={styles['phone-mockup']}>
      <img src={phoneMockupImage} alt='' />
      <section className={styles.linkContainer}>
        {userLinks.map(({ name, userLink, icon }) => {
          return (
            <article className={styles.link}>
              <img src={icon} alt='platform icon' />
              <a href={userLink} className={styles['linkContainer--link']}>
                {name}
              </a>
            </article>
          );
        })}
      </section>
    </Card>
  );
};
