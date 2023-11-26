import { AuthenticationPageProps } from '../../interfaces';

import Login from './components/Login/Login';

import styles from './Authentication.module.scss';
import Signup from './components/Signup/Signup';

const Authentication = (props: AuthenticationPageProps) => {
  const { className, mainLogoDesktop, authenticationPhaseProps } = props;
  const { loginPhase, signupPhase } = authenticationPhaseProps;
  return (
    <section className={`${className} ${styles.authenticationContainer}`}>
      <img src={mainLogoDesktop} alt='dev links logo' />

      {/* <Login loginPhase={loginPhase} className={''} /> */}
      <Signup signupPhase={signupPhase} className={''} />
    </section>
  );
};

export default Authentication;
