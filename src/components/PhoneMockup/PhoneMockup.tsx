import Card from '../UI/Card/Card';
import styles from './PhoneMockup.module.scss';
import { LinkType } from '../../interfaces';
import { useAppSelector } from '../../hooks/hooks';
import SocialLink from '../SocialLink/SocialLink';

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
  const { profileImgURL, username, email } = useAppSelector(
    (state) => state.userProfile
  );

  const isUserInfoValid = username && email;
  const { arrowIconLinks } = phoneMockupProps;
  return (
    <Card priority='white' className={styles['phone-mockup']}>
      <img src={phoneMockupImage} alt='phone mockup' />
      {profileImgURL && (
        <section className={styles.profileImageContainer}>
          <img src={URL.createObjectURL(profileImgURL)} alt='user profile' />
        </section>
      )}
      {isUserInfoValid && (
        <section className={styles.profileInformationContainer}>
          <article className={styles['profileInformationContainer--text']}>
            <p className={styles['profileInformationContainer--name']}>
              {username}
            </p>
            <p className={styles['profileInformationContainer--email']}>
              {email}
            </p>
          </article>
        </section>
      )}
      {userLinks.length !== 0 && (
        <SocialLink
          userLinks={userLinks}
          arrowIconLinks={arrowIconLinks}
          className={styles.socialLinksContainer}
        />
      )}
    </Card>
  );
};
