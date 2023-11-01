import Card from '../UI/Card/Card';
import styles from './PhoneMockup.module.scss';
import { LinkType } from '../../interfaces';
import SocialLink from '../SocialLink/SocialLink';
import UserInformation from '../UserInformation/UserInformation';

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
      <img src={phoneMockupImage} alt='phone mockup' />
      <UserInformation className={styles['userInfo--phoneMockup']} />

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
