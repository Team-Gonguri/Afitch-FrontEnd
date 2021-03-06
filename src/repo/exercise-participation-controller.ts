import axios from 'axios';

import {
  SaveUserExerciseVideoPayload,
  SaveUserExerciseVideoRes,
  DeleteUserExerciseVideoParams,
  GetParticipantDetailParams,
  GetParticipantDetailRes,
  GetPariticpantsParams,
  GetPariticpantsRes,
} from '../entity/repo/exercise-participation-controller';

export async function createUserVideo(
  accessToken: string,
  payload: SaveUserExerciseVideoPayload,
) {
  const formData = new FormData();
  formData.append('video', payload.video);
  formData.append('open', payload.open);
  const req = axios.post(
    `/exercises/${payload.exerciseId}/participation`,
    formData,
    {
      headers: {
        Authorization: accessToken,
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return req;
}

export async function deleteUserVideo(
  accessToken: string,
  { exerciseId, exerciseUserId, ...params }: DeleteUserExerciseVideoParams,
) {
  const req = await axios.delete(
    `/exercises/${exerciseId}/participation/${exerciseUserId}`,
    {
      headers: {
        Authorization: accessToken,
      },
      params: { ...params },
    },
  );

  return req;
}

export async function getParticipantDetail(
  accessToken: string,
  { exerciseId, participationId, ...params }: GetParticipantDetailParams,
) {
  const req = await axios.get<GetParticipantDetailRes>(
    `/exercises/${exerciseId}/participation/${participationId}`,
    {
      headers: { Authorization: accessToken },
      params: { ...params },
    },
  );

  return req;
}

export async function getParticipants(
  accessToken: string,
  { exerciseId, ...params }: GetPariticpantsParams,
) {
  const req = await axios.get<GetPariticpantsRes>(
    `/exercises/${exerciseId}/participation/list`,
    {
      headers: {
        Authorization: accessToken,
      },
      params: { ...params },
    },
  );
  return req;
}
