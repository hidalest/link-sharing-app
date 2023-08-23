import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Button from '../UI/Button';

interface NavBarProps {
  navbarProps: {
    mainLogoDesktop: string;
    mainLogoSmall: string;
    logoLinkPage: string;
    logoProfilePage: string;
    linkPageCopy: string;
    profileDetailsPageCopy: string;
    buttonPreviewCopy: string;
  };
}

function Navbar(props: NavBarProps) {
  const {
    mainLogoDesktop,
    logoLinkPage,
    logoProfilePage,
    linkPageCopy,
    profileDetailsPageCopy,
    buttonPreviewCopy,
  } = props.navbarProps;
  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <img src={mainLogoDesktop}></img>
      </Link>
      <section className={styles.navbarLinks}>
        <Link to={'/links'} className={styles.navbarLinks}>
          <img src={logoLinkPage}></img>
          <span>{linkPageCopy}</span>
        </Link>
        <Link to={'/profileDetails'} className={styles.navbarLinks}>
          <img src={logoProfilePage}></img>
          <span>{profileDetailsPageCopy}</span>
        </Link>
      </section>
      <Link to={'/preview'}>
        <Button priority='secondary'>{buttonPreviewCopy}</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
