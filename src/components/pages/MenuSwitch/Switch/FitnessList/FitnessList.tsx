import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Logo from '../../../../../assets/Logo.png';
import { RowContainer } from '../../../../UI/atoms';
import { FitnessCard } from '../../../../UI/molecules';

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
  ];

  useEffect(() => {
    console.log(match.params.fitness);
    setCategory(match.params.fitness);
  });

  return (
    <RowContainer style={{ justifyContent: 'space-between' }}>
      {fake.map((v, i) => {
        return <FitnessCard url={v.url} text={v.text} />;
      })}
    </RowContainer>
  );
}

export default FitnessList;
