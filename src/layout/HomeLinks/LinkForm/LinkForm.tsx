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
}

const onRemoveLinkHandler = (linkId: number) => {
  console.log(linkId);
};

function LinkForm(props: LinkFormProps) {
  const { linkId, linkFormProps, enumeration } = props;
  const { removeButton, sources } = linkFormProps;
  return (
    <Card priority='grey' className={styles.platformLink}>
      <section className={styles.actionButtons}>
        <p>{`Link #${enumeration}`}</p>
        <Button priority='tertiary' onClick={() => onRemoveLinkHandler(linkId)}>
          {removeButton}
        </Button>
      </section>
      <Dropdown platforms={sources} />
    </Card>
  );
}

export default LinkForm;
