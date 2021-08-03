import React from 'react';
import { useHistory } from 'react-router-dom';

import { RowContainer, Button } from '../../../../UI/atoms';
import { Category } from '../../../../UI/organisms';

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

  return <Category category={category} />;
}

export default FitnessCategory;
