import { AuthenticationPageProps } from '../../interfaces';

import styles from './Authentication.module.scss';
import Login from './components/Login/Login';

const Authentication = (props: AuthenticationPageProps) => {
  const { className, mainLogoDesktop, authenticationPhaseProps } = props;
  const { loginPhase } = authenticationPhaseProps;
  return (
    <section className={`${className} ${styles.authenticationContainer}`}>
      <img src={mainLogoDesktop} alt='dev links logo' />

      <Login loginPhase={loginPhase} />
    </section>
  );
};

export default Authentication;
