import React from 'react';

import { Food } from '../../../entity/repo/default';
import { ColumnContainer, RowContainer, Text, Button } from '../atoms';
import { FoodWrapperDto } from '../../../entity/repo/diet-controller';

interface FoodListProps {
  foods: Food[];
  selectedFoods: FoodWrapperDto[];
  setSelectedFoods: React.Dispatch<React.SetStateAction<FoodWrapperDto[]>>;
}

function FoodList({ foods, selectedFoods, setSelectedFoods }: FoodListProps) {
  const addFood = (food: Food) => {
    // setSelectedFoods([...selectedFoods, food]);
    console.log(food);
    const idx = selectedFoods.findIndex((obj) => obj.food === food);
    if (idx === -1) {
      setSelectedFoods([...selectedFoods, { food: food, size: 1 }]);
    } else {
      const temp = selectedFoods;
      temp[idx].size++;
      setSelectedFoods([...temp]);
    }
  };

  return (
    <ColumnContainer width="100%">
      <RowContainer
        width="100%"
        marginBottom="10px"
        style={{ borderBottom: '2px solid black' }}
      >
        <Text fontWeight="400" width="30%">
          이름
        </Text>
        <Text fontWeight="400" width="10%">
          단위
        </Text>
        <Text fontWeight="400" width="10%">
          칼로리
        </Text>
        <Text fontWeight="400" width="10%">
          탄수화물
        </Text>
        <Text fontWeight="400" width="10%">
          지방
        </Text>
        <Text fontWeight="400" width="10%">
          단백질
        </Text>
      </RowContainer>
      {foods.map((v, i) => {
        return (
          <RowContainer key={i} width="100%" marginBottom="30px">
            <Text width="30%">{v.name}</Text>
            <Text width="10%">
              {v.size.toFixed(2)}
              {v.unit}
            </Text>
            <Text width="10%">{v.calories.toFixed(2)}</Text>
            <Text width="10%">{v.carbohydrate.toFixed(2)}</Text>
            <Text width="10%">{v.fat.toFixed(2)}</Text>
            <Text width="10%" marginRight="auto">
              {v.protein.toFixed(2)}
            </Text>
            <Button
              width="10%"
              height="25px"
              onClick={() => {
                addFood(v);
              }}
            >
              추가하기
            </Button>
          </RowContainer>
        );
      })}
    </ColumnContainer>
  );
}

export default FoodList;
