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
      width="80%"
      style={{
        paddingTop: '20px',
        justifyContent: 'space-around',
      }}
    >
      {category.map((v) => {
        return (
          <LLink
            key={v.name}
            width="45%"
            marginRight="auto"
            to={`/afitch/fitnesslist/${v.param}`}
            style={{
              paddingBottom: 'min(45%, 400px)',
              marginBottom: '20px',
              position: 'relative',
              maxWidth: '400px',
              borderRadius: '10px',
            }}
          >
            <Text
              width="100%"
              color="white"
              fontSize="2.5em"
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
