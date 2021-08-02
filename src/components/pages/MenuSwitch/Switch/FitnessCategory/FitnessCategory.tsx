import React from 'react';
import { useHistory } from 'react-router-dom';

import { RowContainer, Button } from '../../../../UI/atoms';

function FitnessCategory() {
  const category = [
    { name: '어깨', param: 'shoulder' },
    { name: '등', param: 'back' },
    { name: '복부', param: 'abdominal' },
    { name: '하체', param: 'lowerbody' },
  ];

  const categoryBtnClicked = (param: string) => {
    history.push(`/afitch/fitnesslist/${param}`);
  };

  const history = useHistory();

  return (
    <RowContainer
      width="70%"
      height="auto"
      style={{
        paddingTop: '10vh',
        justifyContent: 'space-between',
      }}
    >
      {category.map((v) => {
        return (
          <Button
            key={v.param}
            width="45%"
            marginBottom="20px"
            onClick={() => {
              categoryBtnClicked(v.param ? v.param : '');
            }}
          >
            {v.name}
          </Button>
        );
      })}
    </RowContainer>
  );
}

export default FitnessCategory;
