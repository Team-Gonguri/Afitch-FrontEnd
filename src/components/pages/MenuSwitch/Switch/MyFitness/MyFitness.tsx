import React from 'react';

import { ColumnContainer, Text } from '../../../../UI/atoms';
import { UserFitnessList } from '../../../../UI/organisms';

function MyFitness() {
  const dummy = [
    {
      text: 'id1',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id2',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id3',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id4',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id5',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id6',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id7',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id8',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
    {
      text: 'id9',
      url: 'http://d34o2hlkm01dp4.cloudfront.net/20210805_bc5b5163-c452-4c93-8008-944fd1b96e6b.mp4',
    },
  ];

  return (
    <ColumnContainer width="100%">
      <Text
        fontSize="2rem"
        fontWeight="bold"
        color="#E9B3B3"
        width="100%"
        marginBottom="50px"
      >
        내 운동
      </Text>
      <UserFitnessList fitness={dummy} />
    </ColumnContainer>
  );
}

export default MyFitness;
