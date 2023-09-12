import Navbar from '../../components/NavBar/Navbar';
import Button from '../../components/UI/Button/Button';
import Card from '../../components/UI/Card/Card';
import { HomeLinksProps } from '../../interfaces';
import WelcomeMessage from './WelcomeMessage/WelcomeMessage';
import LinkForm from './LinkForm/LinkForm';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { linkActions } from '../../store/store';
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from 'react-beautiful-dnd';

import styles from './HomeLinks.module.scss';
import { StrictModeDroppable } from '../../components/StrictModeDroppableWrapper/StrictoModeDroppableWrapper';

const getItemStyle = (isDragging: boolean, draggableStyles: any) => ({
  padding: 10,
  margin: '10px',
  background: isDragging ? 'red' : 'grey',
  color: isDragging ? 'white' : 'black',
  ...draggableStyles,
});

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

  const userLinks = useAppSelector((state) => state.links.links);
  const dispatch = useAppDispatch();

  const { secondaryHeader, secondaryMainImage, secondaryInstructions } =
    welcomeMessage;

  const { btnCopy } = saveButton;

  const areUserLinksEmpty = userLinks.length === 0;
  const defaultLink = userLinks[0];

  const onAddNewLinkHandler = () => dispatch(linkActions.addingNewLink());

  console.log('Home', userLinks);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    const userLinksCopy = [...userLinks];
    const [newOrder] = userLinksCopy.splice(source.index, 1);
    userLinksCopy.splice(destination.index, 0, newOrder);
    dispatch(linkActions.updateWholeLinksOrder(userLinksCopy));

    console.log('usersLinksCopy', userLinksCopy);
  };

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
          {!areUserLinksEmpty && (
            <DragDropContext onDragEnd={onDragEnd}>
              <StrictModeDroppable droppableId='userLinks'>
                {(provided) => (
                  <div
                    className={styles.linksContainer}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {userLinks.map((link, index) => {
                      console.log('Link.LinkId', link.linkId);
                      return (
                        <Draggable
                          draggableId={link.linkId}
                          key={link.linkId}
                          index={index}
                        >
                          {(provided) => {
                            return (
                              <div
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                              >
                                <LinkForm
                                  linkFormProps={linkFormProps}
                                  linkId={link.linkId}
                                  linkName={link.name}
                                  linkUserLink={link.userLink}
                                  linkPlaceholder={link.placeholderLink}
                                  linkIcon={link.icon}
                                  enumeration={index + 1}
                                  defaultLink={defaultLink}
                                />
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    })}
                  </div>
                )}
              </StrictModeDroppable>
            </DragDropContext>
          )}
          <Card priority='white' className={styles['buttonSave--container']}>
            <Button priority={'primary'}>{btnCopy}</Button>
          </Card>
        </Card>
      </section>
    </>
  );
}

export default HomeLinks;
