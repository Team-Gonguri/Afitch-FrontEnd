import React from 'react';

import { RowContainer, Text } from '../atoms';

interface ReplyProps {
  id: string;
  contents: string;
}

function Reply({ id, contents }: ReplyProps) {
  return (
    <RowContainer
      width="100%"
      style={{ borderBottom: '0.1px solid rgba(0, 0, 0, 0.3)' }}
      marginBottom="15px"
    >
      <Text style={{ paddingLeft: '10px' }} width="15%">
        {id}
      </Text>
      <Text width="85%">{contents}</Text>
    </RowContainer>
  );
}

export default Reply;
