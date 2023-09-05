import Button from '../../../components/UI/Button/Button';
import Card from '../../../components/UI/Card/Card';
import styles from './LinkForm.module.scss';

interface LinkFormProps {
  linkFormProps: {
    removeButton: string;
    heading: string;
    platformHeading: string;
    linkSubheading: string;
  };

  linkId: number;
  enumeration: number;
}

const onRemoveLinkHandler = (linkId: number) => {
  console.log(linkId);
};

function LinkForm(props: LinkFormProps) {
  const { linkId, linkFormProps, enumeration } = props;
  const { removeButton } = linkFormProps;
  return (
    <Card priority='grey' className={styles.platformLink}>
      <section className={styles.actionButtons}>
        <p>{`Link #${enumeration}`}</p>
        <Button priority='tertiary' onClick={() => onRemoveLinkHandler(linkId)}>
          {removeButton}
        </Button>
      </section>
    </Card>
  );
}

export default LinkForm;
