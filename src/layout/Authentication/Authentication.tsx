import React from 'react';
import Card from '../../components/UI/Card/Card';
import { AuthenticationPageProps } from '../../interfaces';

const Authentication = (props: AuthenticationPageProps) => {
  const { className } = props;
  return (
    <Card priority='white' className={className}>
      Authentication
    </Card>
  );
};

export default Authentication;
