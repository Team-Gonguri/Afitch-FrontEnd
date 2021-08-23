import React, { useEffect, useState } from 'react';

import useUser from '../../../../../hook/useUser';
import { ColumnContainer, RowContainer, Text } from '../../../../UI/atoms';
import { MyInfo, UserFitnessList } from '../../../../UI/organisms';
import { detailUserInfo } from '../../../../../repo/user';
import { DetailUserInfoResponse } from '../../../../../entity/repo/user';
import { FitnessCard } from '../../../../UI/molecules';

function MyFitness() {
  const { user } = useUser();
  const [info, setInfo] = useState<DetailUserInfoResponse>();

  useEffect(() => {
    detailUserInfo(user.accessToken, {}).then((d) => {
      setInfo(d.data);
      console.log(d.data);
    });
  }, []);

  return (
    <ColumnContainer width="100%">
      <MyInfo
        height={info?.height ? info.height.toString() : ''}
        weight={info?.weight ? info.weight.toString() : ''}
        nickName={info?.nickName ? info.nickName : ''}
      />
      <Text
        fontSize="2rem"
        fontWeight="bold"
        color="#E9B3B3"
        width="100%"
        marginBottom="50px"
      >
        내 운동
      </Text>
      <RowContainer width="100%">
        {/* {info?.myParticipation &&
          info.myParticipation.map((v) => {
            return (
              <FitnessCard
                name={v.exerciseName}
                id={v.id}
                to={`afitch/comment/${exerciseId}/${v.id}`}
              />
            );
          })} */}
      </RowContainer>
    </ColumnContainer>
  );
}

export default MyFitness;
