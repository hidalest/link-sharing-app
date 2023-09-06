import { useState } from 'react';
import { LinkType } from '../../../interfaces';
import styles from './Dropdown.module.scss';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { useAppSelector } from '../../../hooks/hooks';

interface DropdownProps {
  platforms: LinkType[];
  platformId: number;
  onClick: () => void;
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

function DropdownItems({ platforms, platformId, onClick }: DropdownProps) {
  console.log(platformId);
  return (
    <Card className={`${styles.dropdownItems}`} priority='white'>
      {platforms.map((platform, index) => {
        return (
          <article key={index} onClick={onClick}>
            <img src={platform.icon} alt={`icon for ${platform.name}`} />
            <span>{platform.name}</span>
          </article>
        );
      })}
    </Card>
  );
}

function Dropdown(props: DropdownProps) {
  const { platforms, platformId, onClick } = props;
  // const userLinks = useAppSelector(state => state.links)

  return (
    <DropdownContainer defaultPlatform={platforms[0]}>
      <DropdownItems
        platforms={platforms}
        platformId={platformId}
        onClick={onClick}
      />
    </DropdownContainer>
  );
}

export default Dropdown;
