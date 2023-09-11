import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import Dropdown from '../../../components/UI/Dropdown/Dropdown';
import styles from './LinkForm.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { linkActions } from '../../../store/store';
import InputText from '../../../components/UI/InputText/InputText';
import { FormEvent } from 'react';
import { LinkFormProps } from '../../../interfaces';

function LinkForm(props: LinkFormProps) {
  const {
    linkId,
    linkFormProps,
    enumeration,
    linkName,
    linkPlaceholder,
    linkIcon,
    linkUserLink,
  } = props;
  const {
    removeButton,
    sources,
    linkSubheading,
    platformHeading,
    inputLinkIcon,
    dragAndDropIcon,
  } = linkFormProps;

  const dispatch = useAppDispatch();

  const onUpdateCurrentPlatformHandler = (name: string) => {
    const findPlatform = sources.find((source) => source.name === name);

    const payload = {
      linkId,
      findPlatform,
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(linkActions.updateTheLinkPlatform(payload));
  };

  const onRemoveLinkHandler = (linkId: number) => {
    dispatch(linkActions.removeLink(linkId));
  };

  const onSubmitInputHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const inputValue = form.inputLink.value;
    const payload = {
      linkId,
      inputValue,
    };
    dispatch(linkActions.updateTheUserLink(payload));
  };

  return (
    <Card priority='grey' className={styles.platformLink}>
      <section className={styles.actionButtons}>
        <div className={styles.dragContainer}>
          <Button priority='tertiary'>
            <img src={dragAndDropIcon} />
          </Button>
          <p className={styles.enumeration}>{`Link #${enumeration}`}</p>
        </div>
        <Button priority='tertiary' onClick={() => onRemoveLinkHandler(linkId)}>
          {removeButton}
        </Button>
      </section>
      <section className={styles.platformContainer}>
        <p className={styles.platformSubheadings}>{platformHeading}</p>
        <Dropdown
          platforms={sources}
          platformId={linkId}
          name={linkName}
          icon={linkIcon}
          onUpdateCurrentPlatformHandler={onUpdateCurrentPlatformHandler}
        />
      </section>
      <section className={styles.linkContainer}>
        <p className={styles.platformSubheadings}>{linkSubheading}</p>
        <InputText
          placeholder={linkPlaceholder}
          inputValue={linkUserLink}
          inputLinkIcon={inputLinkIcon}
          onSubmit={onSubmitInputHandler}
        />
      </section>
    </Card>
  );
}

export default LinkForm;
