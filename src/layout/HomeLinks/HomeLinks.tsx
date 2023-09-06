import Navbar from '../../components/NavBar/Navbar';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import { HomeLinksProps } from '../../interfaces';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';

import LinkForm from './LinkForm/LinkForm';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { linkActions } from '../../store/store';

import styles from './HomeLinks.module.scss';

function HomeLinks(props: HomeLinksProps) {
  const {
    mainHeader,
    mainInstructions,
    addNewLinkButtonCopy,
    welcomeMessage,
    phoneMockupImage,
    saveButton,
    navbarProps,
    linkFormProps,
  } = props.homeLinksData;

  const userLinks = useAppSelector((state) => state.links);
  const dispatch = useAppDispatch();

  const { secondaryHeader, secondaryMainImage, secondaryInstructions } =
    welcomeMessage;

  const { btnCopy } = saveButton;

  const areUserLinksEmpty = userLinks.length === 0;
  const defaultLink = userLinks[0];
  console.log(defaultLink);

  const onAddNewLinkHandler = () => dispatch(linkActions.addingNewLink());

  return (
    <>
      <Navbar navbarProps={navbarProps} />
      <section className={styles.mainContainer}>
        <Card priority='white' className={styles['phone-mockup']}>
          <img src={phoneMockupImage} alt='phone mockup' />
        </Card>
        <Card priority='white' className={styles.homeLinks}>
          <header>
            <h1>{mainHeader}</h1>
            <p className={styles['homeLinks-mainInstructions']}>
              {mainInstructions}
            </p>
          </header>

          <Button
            priority='secondary'
            className={styles['homeLinks-buttonAdd']}
            onClick={onAddNewLinkHandler}
          >
            {addNewLinkButtonCopy}
          </Button>

          {areUserLinksEmpty && (
            <WelcomeMessage
              secondaryHeader={secondaryHeader}
              secondaryInstructions={secondaryInstructions}
              secondaryMainImage={secondaryMainImage}
            />
          )}
          {!areUserLinksEmpty &&
            userLinks.map((link, index) => (
              <LinkForm
                linkFormProps={linkFormProps}
                linkId={link.linkId + 1}
                key={link.linkId}
                enumeration={index + 1}
                defaultLink={defaultLink}
              />
            ))}
        </Card>
        <Card priority='white' className={styles['buttonSave--container']}>
          <Button priority={'primary'}>{btnCopy}</Button>
        </Card>
      </section>
    </>
  );
}

export default HomeLinks;
