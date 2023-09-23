import { profileDetailsProps } from '../../../interfaces';

import styles from './ProfileDetails.module.scss';
import { CardInputImage } from './components/CardInput/CardInput';

export const ProfileDetailsForm = (props: profileDetailsProps) => {
  const {
    heading,
    headingInstructions,
    profilePictureImageLabel,
    profilePictureImageInstructions,
    profilePictureImageIcon,
    profilePictureImagePlaceholder,
  } = props;

  const CardInputImageProps = {
    profilePictureImageIcon,
    profilePictureImageInstructions,
    profilePictureImageLabel,
    profilePictureImagePlaceholder,
  };

  return (
    <section className={styles.profileDetails}>
      <header>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles['heading-instructions']}>{headingInstructions}</p>
      </header>
      <CardInputImage {...CardInputImageProps} />
    </section>
  );
};
