import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { ColumnContainer, RowContainer, Button } from '../../../../UI/atoms';
import { DateDisplay } from '../../../../UI/molecules';
import { DietList } from '../../../../UI/organisms';
import { Modal } from '../../../../templates';
import useDateParsing from '../../../../../hook/useDateParsing';
import useUser from '../../../../../hook/useUser';
import { getDailyDiet } from '../../../../../repo/diet-controller';

interface DateFormat {
  yyyy: string;
  mm: string;
  dd: string;
}

function MyDiet() {
  const [date, setDate] = useState(new Date());
  const [dateFormat, setDateFormat] = useState('');
  const [visible, setVisible] = useState<boolean | undefined>();
  const { user } = useUser();

  useEffect(() => {
    const temp = useDateParsing(date);
    setDateFormat(`${temp.yyyy}${temp.mm}${temp.dd}`);
  }, [date]);

  useEffect(() => {
    if (visible === undefined) setVisible(false);
    else setVisible(!visible);
  }, [date]);

  return (
    <ColumnContainer width="100%">
      <RowContainer
        width="100%"
        marginBottom="50px"
        style={{
          justifyContent: 'center',
        }}
      >
        <DateDisplay curDate={useDateParsing(date)} />
        <Button
          width="150px"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          날짜선택
        </Button>
      </RowContainer>
      <DietList curDate={dateFormat} />
      <Modal visible={visible} setVisible={setVisible}>
        <Calendar value={date} onChange={setDate} />
      </Modal>
    </ColumnContainer>
  );
}

export default MyDiet;
