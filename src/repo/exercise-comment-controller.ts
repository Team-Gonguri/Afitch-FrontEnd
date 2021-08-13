import axios from 'axios';

import {
  CreateCommentParams,
  CreateCommentReq,
  CreateCommentRes,
  ModifyCommentParams,
  ModifyCommentReq,
  ModifyCommentRes,
  DeleteCommentParams,
} from '../entity/repo/exercise-comment-controller';

export async function createComment(
  accessToken: string,
  { exerciseId, participationId, ...params }: CreateCommentParams,
  payload: CreateCommentReq,
) {
  const req = await axios.post<CreateCommentRes>(
    `/exercises/${exerciseId}/participation/${participationId}/comment`,
    {
      ...payload,
    },
    {
      headers: {
        Authorization: accessToken,
      },
      params: {
        ...params,
      },
    },
  );

  return req;
}

export async function modifyComment(
  accessToken: string,
  { commentId, exerciseId, participationId, ...params }: ModifyCommentParams,
  payload: ModifyCommentReq,
) {
  const req = await axios.put<ModifyCommentRes>(
    `
  /exercises/${exerciseId}/participation/${participationId}/comment/${commentId}`,
    { ...payload },
    {
      headers: {
        Authorization: accessToken,
      },
      params: {
        ...params,
      },
    },
  );

  return req;
}

export async function deleteComment(
  accessToken: string,
  { commentId, exerciseId, participationId, ...params }: DeleteCommentParams,
) {
  const req = await axios.delete(
    `/exercises/${exerciseId}/participation/${participationId}/comment/${commentId}`,
    {
      headers: {
        Authorization: accessToken,
      },
      params: {
        ...params,
      },
    },
  );

  return req;
}
