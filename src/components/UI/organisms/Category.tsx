import React from 'react';

import { RowContainer, CategoryLink, CategoryText } from '../atoms';

interface CategoryProps {
  categories: string[];
}

function Category({ categories }: CategoryProps) {
  console.log(categories);
  return (
    <RowContainer width="80%" padding="20px 0 0 0">
      {categories.map((v) => {
        return (
          <CategoryLink key={v} width="30%" to={`/afitch/fitnesslist/${v}`}>
            <CategoryText width="100%" color="white" fontSize="2.5em">
              {v}
            </CategoryText>
          </CategoryLink>
        );
      })}
    </RowContainer>
  );
}

export default Category;
