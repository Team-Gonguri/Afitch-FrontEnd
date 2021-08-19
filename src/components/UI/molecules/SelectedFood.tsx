import React from 'react';

import { RowContainer, Text } from '../atoms';
import { Food } from '../../../entity/repo/default';
import { FoodWrapperDto } from '../../../entity/repo/diet-controller';

interface SelectedFoodProps {
  selectedFoods: FoodWrapperDto[];
  setSelectedFoods: React.Dispatch<React.SetStateAction<FoodWrapperDto[]>>;
}

function SelectedFood({ selectedFoods, setSelectedFoods }: SelectedFoodProps) {
  const deleteFood = (i: number) => {
    const temp = selectedFoods;
    temp.splice(i, 1);
    setSelectedFoods([...temp]);
  };

  const addFood = (i: number) => {
    const temp = selectedFoods;
    temp[i].size++;
    setSelectedFoods([...temp]);
  };

  const minusFood = (i: number) => {
    const temp = selectedFoods;
    if (temp[i].size > 1) {
      temp[i].size--;
      setSelectedFoods([...temp]);
    } else {
      temp.splice(i, 1);
      setSelectedFoods([...temp]);
    }
  };

  return (
    <RowContainer
      width="100%"
      style={{
        display: selectedFoods.length === 0 ? 'none' : '',
        marginBottom: '20px',
      }}
    >
      {selectedFoods.map((v, i) => {
        return (
          <Text
            key={i}
            width="auto"
            style={{
              padding: '0px 10px',
              border: '1px solid #e9b3b3',
              justifyContent: 'center',
              background: 'white',
              borderRadius: '100px',
              margin: '0px 10px 10px 0px',
            }}
          >
            {`${v.food.name} ${v.size}개`}
            <Text
              width="auto"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => {
                minusFood(i);
              }}
            >
              {' '}
              -{' '}
            </Text>
            <Text
              width="auto"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => {
                addFood(i);
              }}
            >
              {' '}
              +{' '}
            </Text>
            <Text
              width="auto"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => {
                deleteFood(i);
              }}
            >
              X
            </Text>
          </Text>
        );
      })}
      {/* {selectedFoods.map((v, i) => {
        return (
          <Text
            key={i}
            width="auto"
            style={{
              padding: '0px 10px',
              border: '1px solid #e9b3b3',
              justifyContent: 'center',
              background: 'white',
              borderRadius: '100px',
              margin: '0px 10px 10px 0px',
            }}
          >
            {v.name}
            <Text
              width="auto"
              style={{ marginLeft: '10px', cursor: 'pointer' }}
              onClick={() => {
                deleteFood(i);
              }}
            >
              X
            </Text>
          </Text>
        );
      })} */}
    </RowContainer>
  );
}

export default SelectedFood;
