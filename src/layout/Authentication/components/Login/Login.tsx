import { LoginProps } from "../../../../interfaces";
import Card from "../../../../components/UI/Card/Card";
import InputText from "../../../../components/UI/InputText/InputText";
import { emailRegex, passwordRegex } from "../../../../utils/regex";
import Button from "../../../../components/UI/Button/Button";

function Login(props: LoginProps) {
  const {
    loginHeader,
    loginButton,
    loginInstructions,
    emailLabel,
    emailPlaceholder,
    passwordLabel,
    passwordPlaceholder,
  } = props.loginPhase;

  const getEmailInputInfo = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  const getPasswordInput = (isValid: boolean, inputValue: string) => {
    console.log(isValid, inputValue);
  };
  return (
    <Card priority="white">
      <h1>{loginHeader}</h1>
      <p>{loginInstructions}</p>
      <div>
        <label>{emailLabel}</label>
        <InputText
          placeholder={emailPlaceholder}
          label={emailLabel}
          returnIsInputValid={getEmailInputInfo}
          validationregex={emailRegex}
          errorMessageProp={""}
          isRequired
        />
        <InputText
          placeholder={passwordPlaceholder}
          label={passwordLabel}
          returnIsInputValid={getPasswordInput}
          validationregex={passwordRegex}
          errorMessageProp={""}
          isRequired
        />
        <Button priority="primary">{loginButton}</Button>
      </div>
    </Card>
  );
}

export default Login;
