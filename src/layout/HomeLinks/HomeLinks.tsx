import Button from '../../components/UI/Button';
import styles from './HomeLinks.module.scss';

interface HomeLinksProps {
  homeLinksData: {
    mainHeader: string;
    mainInstructions: string;
    addNewLinkButtonCopy: string;
  };
}

function HomeLinks(props: HomeLinksProps) {
  const { mainHeader, mainInstructions, addNewLinkButtonCopy } =
    props.homeLinksData;
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
    </section>
  );
}

export default HomeLinks;
