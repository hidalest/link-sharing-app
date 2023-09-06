import { useState } from 'react';
import { LinkType } from '../../../interfaces';
import styles from './Dropdown.module.scss';
import Button from '../Button/Button';
import Card from '../Card/Card';

interface DropdownProps {
  platforms: LinkType[];
}

interface DropdownContainerProps {
  children: React.ReactNode;
  defaultPlatform: {
    name: string;
    icon: string;
  };
}

function DropdownContainer({
  children,
  defaultPlatform,
}: DropdownContainerProps) {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const onToggleDropdownHandler = () => setToggleDropdown(!toggleDropdown);

  const dropdownStatus = toggleDropdown ? 'open' : '';

  return (
    <Button
      priority='tertiary'
      onClick={onToggleDropdownHandler}
      className={`${styles.dropdownContainer} ${styles[dropdownStatus]}`}
    >
      <img
        src={defaultPlatform.icon}
        alt={`icon for ${defaultPlatform.name}`}
      />
      <span>{defaultPlatform.name}</span>
      {children}
    </Button>
  );
}

function DropdownItems({ platforms }: DropdownProps) {
  return (
    <Card className={`${styles.dropdownItems}`} priority='white'>
      {platforms.map((platform, index) => (
        <article key={index}>
          <img src={platform.icon} alt={`icon for ${platform.name}`} />
          <span>{platform.name}</span>
        </article>
      ))}
    </Card>
  );
}

function Dropdown(props: DropdownProps) {
  const { platforms } = props;

  return (
    <DropdownContainer defaultPlatform={platforms[0]}>
      <DropdownItems platforms={platforms} />
    </DropdownContainer>
  );
}

export default Dropdown;
