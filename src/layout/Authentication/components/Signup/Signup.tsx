import { SignupProps } from '../../../../interfaces';
import Card from '../../../../components/UI/Card/Card';
import InputText from '../../../../components/UI/InputText/InputText';
import {
  emailRegex,
  passwordRegex,
  usernameRegex,
} from '../../../../utils/regex';
import Button from '../../../../components/UI/Button/Button';
import { useAppDispatch } from '../../../../hooks/hooks';
import { appActions } from '../../../../store/store';
import { FormEvent, useState } from 'react';

import styles from './Signup.module.scss';

function Signup(props: SignupProps) {
  const { className, signupPhase } = props;
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(null);
  const {
    loginHeader,
    loginButton,
    loginInstructions,
    emailLabel,
    emailPlaceholder,
    inputPasswordIcon,
    inputPasswordEmailIcon,
    passwordLabel,
    passwordPlaceholder,
    confirmPasswordLabel,
    confirmPasswordPlaceholder,
    registerBtn,
    registerInstructionsBtn,
    usernameIcon,
    usernamePlaceholder,
    usernameLabel,
    passwordInstructions,
  } = signupPhase;

  const dispatch = useAppDispatch();

  const onChangeToLoginView = () =>
    dispatch(appActions.changeAuthenticationView());

  const getEmailInputInfo = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };

  const getPasswordInput = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getConfirmPassword = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getUsernameInfo = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };

  const onSubmitAccount = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Card priority='white' className={`${styles.loginContainer} ${className}`}>
      <h1>{loginHeader}</h1>
      <p>{loginInstructions}</p>
      <form className={styles.inputsContainer} onSubmit={onSubmitAccount}>
        {/* TODO, username placeholder doesnt look in line with the icon */}
        <label htmlFor='inputEmail'>{usernameLabel}</label>
        {/*  Username */}
        <InputText
          placeholder={usernamePlaceholder}
          label={usernameLabel}
          returnIsInputValid={getUsernameInfo}
          validationregex={usernameRegex}
          inputLinkIcon={usernameIcon}
          errorMessageProp={''}
          isRequired
          id={'inputEmail'}
        />
        {/*  Email */}
        <label htmlFor='inputEmail'>{emailLabel}</label>
        <InputText
          placeholder={emailPlaceholder}
          label={emailLabel}
          returnIsInputValid={getEmailInputInfo}
          validationregex={emailRegex}
          inputLinkIcon={inputPasswordEmailIcon}
          errorMessageProp={''}
          isRequired
          id={'inputEmail'}
          type='email'
        />
        {/*  Password */}
        <label htmlFor='inputPassword'>{passwordLabel}</label>
        <InputText
          placeholder={passwordPlaceholder}
          label={passwordLabel}
          returnIsInputValid={getPasswordInput}
          validationregex={passwordRegex}
          inputLinkIcon={inputPasswordIcon}
          errorMessageProp={''}
          isRequired
          id={'inputPassword'}
          type='password'
        />
        {/* Confirm Password */}
        <label htmlFor='inputConfirmPassword'>{confirmPasswordLabel}</label>
        <InputText
          placeholder={confirmPasswordPlaceholder}
          label={confirmPasswordLabel}
          returnIsInputValid={getConfirmPassword}
          validationregex={passwordRegex}
          errorMessageProp={"Password don't match"}
          isRequired
          id={'inputConfirmPassword'}
          inputLinkIcon={inputPasswordIcon}
          type='password'
        />
        <p>{passwordInstructions}</p>
        <Button
          priority='primary'
          className={`${styles.buttonLogin} ${styles.submitButton}`}
        >
          {registerBtn}
        </Button>
        <div className={styles.buttonCombo}>
          <p className={styles.pButtonCombo}>{registerInstructionsBtn}</p>
          <Button priority='tertiary' onClick={onChangeToLoginView}>
            {loginButton}
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Signup;
