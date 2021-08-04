import React from 'react';

import { RowContainer, LLink, Text } from '../atoms';

interface CategoryProps {
  name: string;
  param: string;
}

interface Categories {
  category: CategoryProps[];
}

function Category({ category }: Categories) {
  return (
    <RowContainer
      width="100%"
      style={{
        paddingTop: '20px',
        justifyContent: 'space-between',
      }}
    >
      {category.map((v) => {
        return (
          <LLink
            key={v.name}
            width="45%"
            to={`/afitch/fitnesslist/${v.param}`}
            style={{
              paddingBottom: '45%',
              marginBottom: '20px',
              position: 'relative',
            }}
          >
            <Text
              width="100%"
              color="white"
              fontSize="3em"
              style={{
                justifyContent: 'center',
                position: 'absolute',
                bottom: '10%',
              }}
            >
              {v.name}
            </Text>
          </LLink>
        );
      })}
    </RowContainer>
  );
}

export default Category;
