import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import Dropdown from '../../../components/UI/Dropdown/Dropdown';
import styles from './LinkForm.module.scss';
import { useAppDispatch } from '../../../hooks/hooks';
import { linkActions } from '../../../store/store';
import InputText from '../../../components/UI/InputText/InputText';

type LinkType = {
  icon: string;
  name: string;
  placeholderLink: string;
};

interface LinkFormProps {
  linkFormProps: {
    removeButton: string;
    heading: string;
    platformHeading: string;
    linkSubheading: string;
    inputLinkIcon: string;
    sources: LinkType[];
  };
  linkId: number;
  linkName: string;
  linkUserLink: string;
  linkPlaceholder: string;
  linkIcon: string;
  enumeration: number;
  defaultLink: LinkType;
}

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
  } = linkFormProps;

  const dispatch = useAppDispatch();

  const onUpdateCurrentPlatformHandler = (name: string) => {
    const findPlatform = sources.find((source) => source.name === name);

    const payload = {
      linkId,
      findPlatform,
    };
    console.log('find platform', findPlatform);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(linkActions.updateTheLinkPlatform(payload));
  };

  const onRemoveLinkHandler = (linkId: number) => {
    dispatch(linkActions.removeLink(linkId));
  };

  return (
    <Card priority='grey' className={styles.platformLink}>
      <section className={styles.actionButtons}>
        <p>{`Link #${enumeration}`}</p>
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
        />
      </section>
    </Card>
  );
}

export default LinkForm;
