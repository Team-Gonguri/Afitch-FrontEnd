import React from 'react';

import { RowContainer, Text } from '../../UI/atoms';

interface DateDisplayProps {
  curDate: DateFormat;
}

interface DateFormat {
  yyyy: string;
  mm: string;
  dd: string;
}

function DateDisplay({ curDate }: DateDisplayProps) {
  return (
    <RowContainer marginRight="20px">
      <Text width="auto" fontSize="5vw" fontWeight="bold" color="#E9B3B3">
        {curDate.yyyy} / {curDate.mm} / {curDate.dd}
      </Text>
    </RowContainer>
  );
}

export default DateDisplay;
