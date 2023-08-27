import { Link } from 'react-router-dom';
import Button from '../UI/Button';

import styles from './Navbar.module.scss';

interface NavBarProps {
  navbarProps: {
    mainLogoDesktop: string;
    mainLogoSmall: string;
    logoLinkPage: string;
    logoProfilePage: string;
    linkPageCopy: string;
    profileDetailsPageCopy: string;
    buttonPreviewCopy: string;
    buttonPreviewIcon: string;
  };

  isMobile: boolean;
}

function Navbar(props: NavBarProps) {
  const { navbarProps, isMobile } = props;
  console.log(isMobile);
  const {
    mainLogoDesktop,
    mainLogoSmall,
    logoLinkPage,
    logoProfilePage,
    linkPageCopy,
    profileDetailsPageCopy,
    buttonPreviewCopy,
    buttonPreviewIcon,
  } = navbarProps;

  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <img src={mainLogoDesktop} className={styles['mainLogo-big']}></img>
        <img src={mainLogoSmall} className={styles['mainLogo-small']}></img>
      </Link>
      <section className={styles.navbarLinks}>
        <Link to={'/links'} className={styles.navbarLinks}>
          <img src={logoLinkPage}></img>
          <span className={styles['link-copy']}>{linkPageCopy}</span>
        </Link>
        <Link to={'/profileDetails'} className={styles.navbarLinks}>
          <img src={logoProfilePage}></img>
          <span className={styles['link-copy']}>{profileDetailsPageCopy}</span>
        </Link>
      </section>
      <Link to={'/preview'} className={`${styles.navbarLinks} `}>
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
