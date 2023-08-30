import Button from '../../components/UI/Button';
import styles from './HomeLinks.module.scss';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

interface HomeLinksProps {
  homeLinksData: {
    phoneMockupImage: string;
    mainHeader: string;
    mainInstructions: string;
    addNewLinkButtonCopy: string;
    welcomeMessage: {
      secondaryHeader: string;
      secondaryMainImage: string;
      secondaryInstructions: string;
    };

    saveButton: {
      btnCopy: string;
    };
  };
}

function HomeLinks(props: HomeLinksProps) {
  const {
    mainHeader,
    mainInstructions,
    addNewLinkButtonCopy,
    welcomeMessage,
    phoneMockupImage,
    saveButton,
  } = props.homeLinksData;

  const { secondaryHeader, secondaryMainImage, secondaryInstructions } =
    welcomeMessage;

  const { btnCopy } = saveButton;
  return (
    <section className={styles.mainContainer}>
      <div className={styles['phone-mockup']}>
        <img src={phoneMockupImage} alt='phone mockup' />
      </div>
      <div className={styles.homeLinks}>
        <header>
          <h1>{mainHeader}</h1>
          <p className={styles['homeLinks-mainInstructions']}>
            {mainInstructions}
          </p>
        </header>

        <Button priority='secondary' className={styles['homeLinks-buttonAdd']}>
          {addNewLinkButtonCopy}
        </Button>
        <WelcomeMessage
          secondaryHeader={secondaryHeader}
          secondaryInstructions={secondaryInstructions}
          secondaryMainImage={secondaryMainImage}
        />
        <section className={'buttonSave--container'}>
          <Button priority={'primary'}>{btnCopy}</Button>
        </section>
      </div>
    </section>
  );
}

export default HomeLinks;
