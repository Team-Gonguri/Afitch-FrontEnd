import React from 'react';

import { CategoryLink, CategoryText, RowContainer } from '../atoms';
import { CategoryType } from '../../../entity/repo/default';
import Abdominal from '../../../assets/Abdominal.png';
import Arm from '../../../assets/Arm.jpg';
import Chest from '../../../assets/Chest.jpg';
import Leg from '../../../assets/Leg.png';
import Whole from '../../../assets/Whole.png';

interface CategoryProps {
  categories: CategoryType[];
}

function Category({ categories }: CategoryProps) {
  console.log(categories);
  return (
    <RowContainer width="100%" padding="20px 0 0 0">
      {categories.map((v, i) => {
        let img;
        if (v === 'ABDOMINAL') img = Abdominal;
        if (v === 'ARM') img = Arm;
        if (v === 'CHEST') img = Chest;
        if (v === 'LEG') img = Leg;
        if (v === 'WHOLE') img = Whole;

        return (
          <CategoryLink
            key={i}
            width="42%"
            to={`/afitch/fitnesslist/${v}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <CategoryText
              width="42%"
              height="100%"
              color="white"
              fontSize="2.5em"
            >
              {v}
            </CategoryText>
          </CategoryLink>
        );
      })}
    </RowContainer>
  );
}

export default Category;
