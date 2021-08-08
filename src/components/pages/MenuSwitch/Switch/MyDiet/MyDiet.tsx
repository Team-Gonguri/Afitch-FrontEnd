import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { ColumnContainer, RowContainer, Button } from '../../../../UI/atoms';
import { DateDisplay } from '../../../../UI/molecules';
import { DietList } from '../../../../UI/organisms';
import { Modal } from '../../../../templates';

function MyDiet() {
  const [date, setDate] = useState(new Date());
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log(date);
    setVisible(!visible);
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
        <DateDisplay date={date} />
        <Button
          width="150px"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          날짜선택
        </Button>
      </RowContainer>
      <DietList />
      <Modal visible={visible} setVisible={setVisible}>
        <Calendar value={date} onChange={setDate} />
      </Modal>
    </ColumnContainer>
  );
}

export default MyDiet;
