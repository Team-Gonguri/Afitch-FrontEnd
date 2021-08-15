import { Authorities } from './default';

export interface CreateCommentParams {
  exerciseId: number;
  participationId: number;
  authorities?: Authorities;
  id?: number;
}

export interface CreateCommentReq {
  text: string;
}

export interface CreateCommentRes {
  createdAt: string;
  id: number;
  nickName: string;
  text: string;
}

export interface ModifyCommentParams {
  authorities: Authorities;
  commentId: number;
  exerciseId: number;
  id: number;
  participationId: number;
}

export interface ModifyCommentReq {
  text: string;
}

export interface ModifyCommentRes {
  createdAt: string;
  id: number;
  nickName: string;
  text: string;
}

export interface DeleteCommentParams {
  authorities: Authorities;
  commentId: number;
  exerciseId: number;
  id: number;
  participationId: number;
}
