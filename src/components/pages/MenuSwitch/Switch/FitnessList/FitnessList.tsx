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
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업1',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업2',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업3',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업4',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업5',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업6',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업7',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업8',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업9',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업9',
    },
    {
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
      text: '푸시업9',
    },
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
