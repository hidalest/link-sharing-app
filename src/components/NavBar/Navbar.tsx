import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { NavBarProps } from '../../interfaces';

import styles from './Navbar.module.scss';

function Navbar(props: NavBarProps) {
  const {
    mainLogoDesktop,
    mainLogoSmall,
    logoLinkPage,
    logoProfilePage,
    linkPageCopy,
    profileDetailsPageCopy,
    buttonPreviewCopy,
    buttonPreviewIcon,
  } = props.navbarProps;

  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <img src={mainLogoDesktop} className={styles['mainLogo-big']}></img>
        <img src={mainLogoSmall} className={styles['mainLogo-small']}></img>
      </Link>
      <section className={styles.navbarLinks}>
        <Link
          to={'/home'}
          className={`${styles.navbarLinks} ${styles.routeLink} ${
            location.pathname === '/home' ? styles.activeRoute : ''
          }`}
        >
          <img src={logoLinkPage}></img>
          <span className={styles['link-copy']}>{linkPageCopy}</span>
        </Link>
        <Link
          to={'/profileDetails'}
          className={`${styles.navbarLinks} ${styles.routeLink} ${
            location.pathname === '/profile' ? styles.activeRoute : ''
          }`}
        >
          <img src={logoProfilePage}></img>
          <span className={styles['link-copy']}>{profileDetailsPageCopy}</span>
        </Link>
      </section>
      <Link to={'/preview'} className={`${styles.navbarLinks}`}>
        <Button priority='secondary' className={styles.previewBtn}>
          <span className={styles['link-copy']}>{buttonPreviewCopy}</span>
          <img
            className={styles['button-preview-icon']}
            src={buttonPreviewIcon}
          ></img>
        </Button>
      </Link>
    </nav>
  );
}

export default Navbar;
