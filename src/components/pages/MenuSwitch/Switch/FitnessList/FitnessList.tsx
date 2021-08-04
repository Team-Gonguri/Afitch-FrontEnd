import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Logo from '../../../../../assets/Logo.png';
import { CardList } from '../../../../UI/organisms';

interface MatchParams {
  fitness: string;
}

function FitnessList({ match }: RouteComponentProps<MatchParams>) {
  const [category, setCategory] = useState('');

  const fake = [
    { url: Logo, text: '푸시업1' },
    { url: Logo, text: '푸시업2' },
    { url: Logo, text: '푸시업3' },
    { url: Logo, text: '푸시업4' },
    { url: Logo, text: '푸시업5' },
    { url: Logo, text: '푸시업6' },
    { url: Logo, text: '푸시업7' },
    { url: Logo, text: '푸시업8' },
    { url: Logo, text: '푸시업9' },
    { url: Logo, text: '푸시업9' },
    { url: Logo, text: '푸시업9' },
  ];

  useEffect(() => {
    console.log(match.params.fitness);
    setCategory(match.params.fitness);
  });

  return (
    <React.Fragment>
      <CardList list={fake} />
    </React.Fragment>
  );
}

export default FitnessList;
