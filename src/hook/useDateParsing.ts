import React from 'react';

function useDateParsing(date: Date) {
  const yyyy = `${date.getFullYear()}`;
  const tm = date.getMonth() + 1;
  const mm = tm < 10 ? `0${tm}` : `${tm}`;
  const td = date.getDate();
  const dd = td < 10 ? `0${td}` : `${td}`;

  return { yyyy, mm, dd };
}

export default useDateParsing;
