import React, { useRef, useState, useEffect } from 'react';

import { Food } from '../../../entity/repo/default';
import { FoodWrapperDto } from '../../../entity/repo/diet-controller';
import { foodSearch } from '../../../repo/food-controller';
import { ColumnContainer, RowContainer, Button } from '../atoms';
import {
  InputBoxButton,
  FoodList,
  Pagination,
  MealRadios,
  SelectedFood,
} from '../molecules';
import useUser from '../../../hook/useUser';
import { saveDiet } from '../../../repo/diet-controller';

interface FoodSearchProps {
  date: string;
}

interface IndexSignature {
  [key: string]: boolean;
}

const init: IndexSignature = {
  BREAKFAST: false,
  LUNCH: false,
  DINNER: false,
  SNACK: false,
};

function FoodSearch({ date }: FoodSearchProps) {
  const { user } = useUser();
  const [keyWord, setKeyWord] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [curPage, setCurPage] = useState(0);
  const [selectedFoods, setSelectedFoods] = useState<FoodWrapperDto[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [check, setChecked] = useState(init);

  useEffect(() => {
    if (keyWord) {
      foodSearch(user.accessToken, {
        keyword: keyWord,
        page: curPage,
      }).then((d) => {
        console.log(d.data);
        setFoods(d.data.foods);
      });
    }
  }, [curPage]);

  const onClick = () => {
    if (inputRef.current && inputRef.current.value) {
      setKeyWord(inputRef.current.value);
      foodSearch(user.accessToken, {
        keyword: inputRef.current.value,
        page: 0,
      }).then((d) => {
        console.log(d.data);
        setCurPage(0);
        setTotalPage(d.data.totalPages);
        setFoods(d.data.foods);
      });
    }
  };

  useEffect(() => {
    console.log(selectedFoods);
  }, [selectedFoods]);

  const submit = () => {
    let tempMeal;
    for (let meal in check) {
      if (check[meal]) tempMeal = meal;
    }

    if (tempMeal && selectedFoods.length !== 0) {
      saveDiet(
        user.accessToken,
        { date, foods: selectedFoods, type: tempMeal },
        {},
      ).then((d) => console.log(d));
    } else {
      alert('섭취 시간 혹은 음식을 입력하세요');
    }
  };

  return (
    <ColumnContainer width="100%">
      <RowContainer
        width="100%"
        marginBottom="20px"
        style={{ justifyContent: 'flex-end' }}
      >
        <InputBoxButton
          width="50%"
          btnText="검색"
          iRef={inputRef}
          onClick={onClick}
        />
      </RowContainer>
      <RowContainer
        width="100%"
        marginBottom="20px"
        style={{ alignItems: 'center' }}
      >
        <MealRadios init={init} check={check} setChecked={setChecked} />
        <Button height="30px" style={{ marginLeft: 'auto' }} onClick={submit}>
          등록하기
        </Button>
      </RowContainer>
      <SelectedFood
        selectedFoods={selectedFoods}
        setSelectedFoods={setSelectedFoods}
      />
      <ColumnContainer
        width="100%"
        padding="10px"
        marginBottom="50px"
        style={{
          minHeight: '200px',
          background: 'white',
          border: '1px solid #E9B3B3',
        }}
      >
        <FoodList
          foods={foods}
          selectedFoods={selectedFoods}
          setSelectedFoods={setSelectedFoods}
        />
        <Pagination
          totalPage={totalPage}
          curPage={curPage}
          setCurPage={setCurPage}
        />
      </ColumnContainer>
    </ColumnContainer>
  );
}

export default FoodSearch;
