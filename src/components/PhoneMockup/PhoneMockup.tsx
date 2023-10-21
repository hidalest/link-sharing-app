import Card from '../UI/Card/Card';
import styles from './PhoneMockup.module.scss';
import { LinkType } from '../../interfaces';
import { SVGWrapper } from '../UI/SVGWrapper/SVGWrapper';

interface phoneMockupProps {
  userLinks: LinkType[];
  phoneMockupImage: string;
  phoneMockupProps: {
    arrowIconLinks: string;
  };
}

export const PhoneMockup = ({
  userLinks,
  phoneMockupImage,
  phoneMockupProps,
}: phoneMockupProps) => {
  const { arrowIconLinks } = phoneMockupProps;
  return (
    <Card priority='white' className={styles['phone-mockup']}>
      <img src={phoneMockupImage} alt='' />
      <section className={styles.profileInformationContainer}>
        <p>TEsting</p>
      </section>
      <section className={styles.linkContainer}>
        {userLinks
          .filter((link) => link.isValid === true)
          .map(
            ({ name, userLink, icon, backgroundColor, fontColor }, index) => {
              return (
                <a
                  className={styles.link}
                  href={userLink}
                  target='_blank'
                  key={index}
                  style={{ backgroundColor }}
                >
                  <div className={styles.linkInfoContainer}>
                    <SVGWrapper markup={icon} color={fontColor || '#ffffff'} />
                    <span
                      style={{ color: fontColor }}
                      className={styles.platformName}
                    >
                      {name}
                    </span>
                  </div>
                  <div>
                    <SVGWrapper
                      markup={arrowIconLinks}
                      color={fontColor || '#ffffff'}
                    />
                  </div>
                </a>
              );
            }
          )}
      </section>
    </Card>
  );
};
