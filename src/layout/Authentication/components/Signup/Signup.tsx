import { SignupProps } from '../../../../interfaces';
import Card from '../../../../components/UI/Card/Card';
import InputText from '../../../../components/UI/InputText/InputText';
import { emailRegex, passwordRegex } from '../../../../utils/regex';
import Button from '../../../../components/UI/Button/Button';

import styles from './Signup.module.scss';

function Signup(props: SignupProps) {
  const { className, signupPhase } = props;
  const {
    loginHeader,
    loginButton,
    loginInstructions,
    emailLabel,
    emailPlaceholder,
    inputPasswordIcon,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    registerBtn,
    registerInstructionsBtn,
  } = signupPhase;

  const getEmailInputInfo = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getPasswordInput = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getConfirmPassword = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  return (
    <Card priority='white' className={`${styles.loginContainer} ${className}`}>
      <h1>{loginHeader}</h1>
      <p>{loginInstructions}</p>
      <div className={styles.inputsContainer}>
        <label htmlFor='inputEmail'>{emailLabel}</label>
        <InputText
          placeholder={emailPlaceholder}
          label={emailLabel}
          returnIsInputValid={getEmailInputInfo}
          validationregex={emailRegex}
          errorMessageProp={''}
          isRequired
          id={'inputEmail'}
        />
        <label htmlFor='inputPassword'>{passwordLabel}</label>
        <InputText
          placeholder={passwordPlaceholder}
          label={passwordLabel}
          returnIsInputValid={getPasswordInput}
          validationregex={passwordRegex}
          errorMessageProp={''}
          isRequired
          id={'inputPassword'}
        />
        <label htmlFor='inputConfirmPassword'>{confirmPasswordLabel}</label>
        <InputText
          placeholder={confirmPasswordPlaceholder}
          label={confirmPasswordLabel}
          returnIsInputValid={getConfirmPassword}
          validationregex={passwordRegex}
          errorMessageProp={''}
          isRequired
          id={'inputConfirmPassword'}
          inputLinkIcon={inputPasswordIcon}
        />
      </div>
      <Button priority='primary' className={styles.buttonLogin}>
        {loginButton}
      </Button>
      <div className={styles.buttonCombo}>
        <p className={styles.pButtonCombo}>{registerInstructionsBtn}</p>
        <Button priority='tertiary'>{registerBtn}</Button>
      </div>
    </Card>
  );
}

export default Signup;
