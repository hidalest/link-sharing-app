import { AuthenticationPageProps } from "../../interfaces";

import Login from "./components/Login/Login";

import styles from "./Authentication.module.scss";

const Authentication = (props: AuthenticationPageProps) => {
  const { className, mainLogoDesktop, authenticationPhaseProps } = props;
  const { loginPhase } = authenticationPhaseProps;
  return (
    <section className={`${className} ${styles.authenticationContainer}`}>
      <img src={mainLogoDesktop} alt="dev links logo" />

      <Login loginPhase={loginPhase} className={styles.inputsContainer} />
    </section>
  );
};

export default Authentication;
