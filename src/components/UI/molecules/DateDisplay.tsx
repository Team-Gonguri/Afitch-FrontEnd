import React from 'react';

import { RowContainer, Text } from '../../UI/atoms';
import useDateParsing from '../../../hook/useDateParsing';

interface DateDisplayProps {
  date: Date;
}

function DateDisplay({ date }: DateDisplayProps) {
  const { yyyy, mm, dd } = useDateParsing(date);

  return (
    <RowContainer marginRight="20px">
      <Text width="auto" fontSize="5vw" fontWeight="bold" color="#E9B3B3">
        {yyyy} / {mm} / {dd}
      </Text>
    </RowContainer>
  );
}

export default DateDisplay;
