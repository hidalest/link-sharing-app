import { LoginProps } from "../../../../interfaces";
import Card from "../../../../components/UI/Card/Card";
import InputText from "../../../../components/UI/InputText/InputText";
import { emailRegex, passwordRegex } from "../../../../utils/regex";
import Button from "../../../../components/UI/Button/Button";

import styles from "./Login.module.scss";
import { useAppDispatch } from "../../../../hooks/hooks";
import { appActions } from "../../../../store/store";

function Login(props: LoginProps) {
  const { className, loginPhase } = props;
  const {
    loginHeader,
    loginButton,
    loginInstructions,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
    registerBtn,
    registerInstructionsBtn,
  } = loginPhase;

  const dispatch = useAppDispatch();
  const getEmailInputInfo = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getPasswordInput = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };

  const onChangeViewToSignup = () =>
    dispatch(appActions.changeAuthenticationView());

  return (
    <Card priority="white" className={`${styles.loginContainer} ${className}`}>
      <h1>{loginHeader}</h1>
      <p>{loginInstructions}</p>
      <div className={styles.inputsContainer}>
        <label htmlFor="inputEmail">{emailLabel}</label>
        <InputText
          placeholder={emailPlaceholder}
          label={emailLabel}
          returnIsInputValid={getEmailInputInfo}
          validationregex={emailRegex}
          errorMessageProp={""}
          isRequired
          id={"inputEmail"}
        />
        <label htmlFor="inputPassword">{passwordLabel}</label>
        <InputText
          placeholder={passwordPlaceholder}
          label={passwordLabel}
          returnIsInputValid={getPasswordInput}
          validationregex={passwordRegex}
          errorMessageProp={""}
          isRequired
          id={"inputPassword"}
        />
      </div>
      <Button priority="primary" className={styles.buttonLogin}>
        {loginButton}
      </Button>
      <div className={styles.buttonCombo}>
        <p className={styles.pButtonCombo}>{registerInstructionsBtn}</p>
        <Button priority="tertiary" onClick={onChangeViewToSignup}>
          {registerBtn}
        </Button>
      </div>
    </Card>
  );
}

export default Login;
