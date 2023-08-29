import Button from '../../components/UI/Button';
import styles from './HomeLinks.module.scss';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

interface HomeLinksProps {
  homeLinksData: {
    mainHeader: string;
    mainInstructions: string;
    addNewLinkButtonCopy: string;
    welcomeMessage: {
      secondaryHeader: string;
      secondaryMainImage: string;
      secondaryInstructions: string;
    };
  };
}

function HomeLinks(props: HomeLinksProps) {
  const { mainHeader, mainInstructions, addNewLinkButtonCopy, welcomeMessage } =
    props.homeLinksData;

  const { secondaryHeader, secondaryMainImage, secondaryInstructions } =
    welcomeMessage;
  return (
    <section className={styles.homeLinks}>
      <div>
        <h1>{mainHeader}</h1>
        <p className={styles['homeLinks-mainIntructions']}>
          {mainInstructions}
        </p>
      </div>

      <Button priority='secondary' className={styles['homeLinks-buttonAdd']}>
        {addNewLinkButtonCopy}
      </Button>
      <WelcomeMessage
        secondaryHeader={secondaryHeader}
        secondaryInstructions={secondaryInstructions}
        secondaryMainImage={secondaryMainImage}
      />
    </section>
  );
}

export default HomeLinks;
