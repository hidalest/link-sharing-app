import Card from '../../../components/UI/Card/Card';
import InputText from '../../../components/UI/InputText/InputText';
import { profileDetailsProps } from '../../../interfaces';
import { usernameRegex } from '../../../utils/regex';
import { CardInputImage } from './components/CardInput/CardInput';

import styles from './ProfileDetails.module.scss';
export const ProfileDetailsForm = (props: profileDetailsProps) => {
  const {
    heading,
    headingInstructions,
    profilePictureImageLabel,
    profilePictureImageInstructions,
    profilePictureImageIcon,
    profilePictureImagePlaceholder,
    firstNameLabel,
    firstNamePlaceholder,
    firstNameErrorMessage,
    secondLastNameLabel,
    secondLastNamePlaceholder,
    secondNameErrorMessage,
    emailLabel,
    emailPlaceholder,
    emailErrorMessage,
  } = props;

  const CardInputImageProps = {
    profilePictureImageIcon,
    profilePictureImageInstructions,
    profilePictureImageLabel,
    profilePictureImagePlaceholder,
  };

  const returnInputFirstNameHandler = (
    isValid: boolean,
    inputValue?: string
  ) => {
    console.log(isValid, inputValue);
  };
  const returnInputLastNameHandler = (
    isValid: boolean,
    inputValue?: string
  ) => {
    console.log(isValid, inputValue);
  };
  const returnInputEmailHandler = (isValid: boolean, inputValue?: string) => {
    console.log(isValid, inputValue);
  };

  return (
    <section className={styles.profileDetails}>
      <header>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles['heading-instructions']}>{headingInstructions}</p>
      </header>
      <CardInputImage {...CardInputImageProps} />
      <Card priority='grey'>
        <InputText
          placeholder={firstNamePlaceholder}
          validationregex={usernameRegex}
          errorMessageProp={firstNameErrorMessage}
          returnIsInputValid={returnInputFirstNameHandler}
          label={firstNameLabel}
          showLabel
        />
        <InputText
          placeholder={secondLastNamePlaceholder}
          validationregex={usernameRegex}
          errorMessageProp={secondNameErrorMessage}
          returnIsInputValid={returnInputLastNameHandler}
          label={secondLastNameLabel}
          showLabel
        />
        <InputText
          placeholder={emailPlaceholder}
          validationregex={usernameRegex}
          errorMessageProp={emailErrorMessage}
          returnIsInputValid={returnInputEmailHandler}
          label={emailLabel}
          showLabel
        />
      </Card>
    </section>
  );
};
