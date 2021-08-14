import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Category } from '../../../../UI/organisms';
import useUser from '../../../../../hook/useUser';
import { CategoryType } from '../../../../../entity/repo/default';
import { getCategories } from '../../../../../repo/exercise-controller';

function FitnessCategory() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const { user } = useUser();

  useEffect(() => {
    getCategories(user.accessToken).then((d) => {
      setCategories(d.data.categories);
      console.log(typeof d.data.categories);
    });
  }, []);

  const history = useHistory();

  return (
    <>
      <Category categories={categories} />
    </>
  );
}

export default FitnessCategory;
