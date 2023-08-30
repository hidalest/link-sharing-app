import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  priority: 'grey' | 'white' | 'transparent';
}

function Card(props: CardProps) {
  const { children, className, priority } = props;
  return (
    <div className={`${styles.card} ${styles[priority]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
