import { useState } from 'react';
import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import Dropdown from '../../../components/UI/Dropdown/Dropdown';
import styles from './LinkForm.module.scss';

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
    sources: LinkType[];
  };
  linkId: number;
  enumeration: number;
  defaultLink: LinkType;
}

const onRemoveLinkHandler = (linkId: number) => {
  console.log(linkId);
};

function LinkForm(props: LinkFormProps) {
  const { linkId, linkFormProps, enumeration, defaultLink } = props;
  const { removeButton, sources } = linkFormProps;

  const [currentLink, setCurrentLink] = useState(defaultLink);

  const onUpdateCurrentPlatformHandler = (name: string) => {
    const findPlatform = sources.find((source) => source.name === name);
    setCurrentLink(findPlatform ? findPlatform : defaultLink);
    console.log(linkId);
  };

  return (
    <Card priority='grey' className={styles.platformLink}>
      <section className={styles.actionButtons}>
        <p>{`Link #${enumeration}`}</p>
        <Button priority='tertiary' onClick={() => onRemoveLinkHandler(linkId)}>
          {removeButton}
        </Button>
      </section>
      <Dropdown
        platforms={sources}
        platformId={linkId}
        placeholder={currentLink.placeholderLink}
        name={currentLink.name}
        icon={currentLink.icon}
        onUpdateCurrentPlatformHandler={onUpdateCurrentPlatformHandler}
      />
    </Card>
  );
}

export default LinkForm;
