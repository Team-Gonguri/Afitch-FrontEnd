import React from 'react';

import { RowContainer } from '../atoms';
import { FitnessCard } from '../molecules';

function RankList() {
  const dummy = [
    {
      text: 'id1',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id2',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id3',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id4',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id5',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id6',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id7',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id8',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
    {
      text: 'id9',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b',
    },
  ];

  return (
    <RowContainer width="100%">
      {dummy.map((v) => {
        return (
          <FitnessCard
            key={v.text}
            text={v.text}
            url={v.url}
            to={`/afitch/comment/${v.text}`}
          />
        );
      })}
    </RowContainer>
  );
}

export default RankList;
