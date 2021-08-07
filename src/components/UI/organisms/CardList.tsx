import React from 'react';

import Logo from '../../../assets/Logo.png';
import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';

interface Card {
  url: string;
  text: string;
}

interface Cards {
  list: Card[];
}

function CardList({ list }: Cards) {
  return (
    <RowContainer width="100%" style={{ justifyContent: '' }}>
      {list.map((v, i) => {
        return <FitnessCard key={i} url={v.url} text={v.text} />;
      })}
    </RowContainer>
  );
}

export default CardList;
