import styles from './WelcomeMessage.module.scss';

interface WelcomeMessageProps {
  secondaryHeader: string;
  secondaryMainImage: string;
  secondaryInstructions: string;
}

function WelcomeMessage(props: WelcomeMessageProps) {
  const { secondaryHeader, secondaryMainImage, secondaryInstructions } = props;
  return (
    <section className={styles.welcomeMessage}>
      <img src={secondaryMainImage} alt='start creating links' />
      <h2>{secondaryHeader}</h2>
      <p>{secondaryInstructions}</p>
    </section>
  );
}

export default WelcomeMessage;
