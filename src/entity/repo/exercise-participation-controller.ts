import { Authorities } from './default';

export interface SaveUserExerciseVideoPayload {
  exerciseId: number;
  open: string;
  video: File;
  authorities?: Authorities;
  id?: number;
}

export interface SaveUserExerciseVideoRes {
  expertURL: string;
  id: number;
  name: string;
  userURL: string;
}

export interface DeleteUserExerciseVideoParams {
  authorities: Authorities;
  exerciseId: number;
  exerciseUserId: number;
  id: number;
}

export interface GetParticipantDetailParams {
  authorities: Authorities;
  exerciseId: number;
  id: number;
  participationId: number;
}

export interface GetParticipantDetailRes {
  commentNum: number;
  comments: ExerciseCommentDto[];
  exerciseName: string;
  id: number;
  nickName: string;
  score: number;
  url: string;
}

export interface ExerciseCommentDto {
  createdAt: string;
  id: number;
  nickName: string;
  text: string;
}

export interface GetPariticpantsParams {
  exerciseId: number;
  order: 'LATEST' | 'RANKING';
}

export interface GetPariticpantsRes {
  lists: SimpleExerciseParticipationDto[];
}

export interface SimpleExerciseParticipationDto {
  exerciseId: number;
  exerciseName: string;
  participationId: number;
  scope: 'PUBLIC' | 'PRIVATE';
  score: number;
  userName: string;
}
