import Card from '../UI/Card/Card';
import styles from './PhoneMockup.module.scss';
import { LinkType } from '../../interfaces';
import { SVGWrapper } from '../UI/SVGWrapper/SVGWrapper';
import { useAppSelector } from '../../hooks/hooks';

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
  const userProfileState = useAppSelector((state) => state.userProfile);
  console.log(userProfileState.firsName);
  const { arrowIconLinks } = phoneMockupProps;
  return (
    <Card priority='white' className={styles['phone-mockup']}>
      <img src={phoneMockupImage} alt='phone mockup' />
      <section className={styles.profileInformationContainer}>
        <article className={styles['profileInformationContainer--text']}>
          <p className={styles['profileInformationContainer--name']}>
            {userProfileState.firsName} {userProfileState.lastName}
          </p>
          <p className={styles['profileInformationContainer--email']}>
            {userProfileState.email}
          </p>
        </article>
      </section>
      <section className={styles.linkContainer}>
        {userLinks
          .filter((link) => link.isValid)
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
