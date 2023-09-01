import Card from '../../../components/UI/Card/Card';

interface LinkFormProps {
  linkFormProps: {
    removeButton: string;
    heading: string;
    platformHeading: string;
    linkSubheading: string;
  };

  linkId: number;
}

function LinkForm(props: LinkFormProps) {
  const { linkId, linkFormProps } = props;
  const { removeButton } = linkFormProps;
  return (
    <Card priority='grey'>
      <div>
        <p>{`Link #${linkId}`}</p>
        <button>{removeButton}</button>
      </div>
    </Card>
  );
}

export default LinkForm;
