import React, { useEffect, useState } from 'react';

import { RowContainer, Text } from '../atoms';

interface PaginationProps {
  totalPage: number;
  curPage: number;
  setCurPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ totalPage, curPage, setCurPage }: PaginationProps) {
  const [temp, setTemp] = useState<Array<number>>([]);

  useEffect(() => {
    setTemp(Array.from({ length: totalPage }, (v, i) => i + 1));
  }, [totalPage]);

  const onClick = (i: number) => {
    setCurPage(i);
  };

  return (
    <RowContainer>
      <Text
        width="auto"
        style={{ display: curPage < 10 ? 'none' : '', cursor: 'pointer' }}
        onClick={() => {
          setCurPage((parseInt(`${curPage / 10}`) - 1) * 10 + 9);
        }}
      >
        {'<'}
      </Text>
      {temp &&
        temp.map((v, i) => {
          if (parseInt(`${i / 10}`) !== parseInt(`${curPage / 10}`)) {
            return;
          } else {
            return (
              <Text
                key={i + 1}
                width="auto"
                color={i === curPage ? '#e9b3b3' : ''}
                fontWeight={i === curPage ? 'bold' : ''}
                style={{ margin: '0px 5px', cursor: 'pointer' }}
                onClick={() => {
                  onClick(i);
                }}
              >
                {v}
              </Text>
            );
          }
        })}
      <Text
        width="auto"
        style={{
          display:
            parseInt(`${totalPage / 10}`) === parseInt(`${curPage / 10}`)
              ? 'none'
              : '',
          cursor: 'pointer',
        }}
        onClick={() => {
          setCurPage((parseInt(`${curPage / 10}`) + 1) * 10);
        }}
      >
        {'>'}
      </Text>
    </RowContainer>
  );
}

export default Pagination;
